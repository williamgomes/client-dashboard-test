<template>
  <div class="container-fluid">
    <div class="row align-items-center justify-content-center">
      <div class="col-12 col-md-5 col-lg-6 col-xl-4 px-lg-6 my-5">
        <div class="login-logo mb-6">
          <img
            src="@/assets/img/logo.png"
            class="img-fluid mb-2">
        </div>
        <p class="text-muted text-center mb-5">
          Welcome to the Client Dashboard!
        </p>
        <div
          v-show="hash"
          class="text-center">
          <button
            class="btn btn-xs btn-primary m-auto"
            @click="login">
            {{ submitButtonText }}
          </button>
        </div>

        <p class="text-danger small text-center mt-5">
          {{ errorMessage }}
        </p>
      </div>
      <div class="col-12 col-md-7 col-lg-6 col-xl-8 d-none d-lg-block">
        <div
          class="bg-cover vh-100 mt--1 mr-n3"
          :style="{backgroundImage: 'url(' + require('@/assets/img/auth-side-cover.png') + ')'}" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: 'LoginView',
  data() {
    return {
      hash: this.$route.params.hash ?? null,
      errorMessage: '',
      submitButtonText: 'Continue',
    }
  },
  mounted() {
    if (this.hash) {
      localStorage.setItem('client-hash', this.hash);
    } else {
      this.errorMessage = 'The URL is incomplete.'
    }

    this.getSanctumCookies();
  },
  methods: {
    getSanctumCookies() {
      this.axios.get(`/sanctum/csrf-cookie`, {
      }).catch(error => {
        if (error.response) {
          // Request made and server responded
          this.errorMessage = error.response.data.message;
        } else if (error.request) {
          // The request was made but no response was received
          this.errorMessage = 'Connection refused.'
        } else {
          // Something happened in setting up the request that triggered an Error
          this.errorMessage = error.message;
        }
      });
    },
    login() {
      this.errorMessage = '';

      this.axios.post(`/client-dashboard/login`, {
            hash: this.hash,
          },
          {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            }
          }).then(response => {
            this.axios.defaults.headers.Authorization = `Bearer ${response.data.token}`;
            localStorage.setItem('api-xsrf-token', response.data.token);
            this.$store.dispatch('setAuthClient', response.data.client)

            this.submitButtonText += '...';

            setTimeout(() => {
              this.$router.push({name: 'home'})
            }, 500)
      }).catch(error => {
        if (error.response) {
          // Request made and server responded
          this.errorMessage = error.response.data.message;
        } else if (error.request) {
          // The request was made but no response was received
          this.errorMessage = 'Connection refused.'
        } else {
          // Something happened in setting up the request that triggered an Error
          this.errorMessage = error.message;
        }
      });
    },
  }
}

</script>

