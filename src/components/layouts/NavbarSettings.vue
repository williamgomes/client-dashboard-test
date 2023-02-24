<template>
  <ul class="navbar-nav ms-auto">
    <li class="nav-item cursor-pointer">
      <MyDropdown>
        <template #title>
          <i class="fe fe-power logout-button text-black-50" />
        </template>
        <a
          href="#"
          class="dropdown-item"
          @click="logout()">
          Logout
        </a>
      </MyDropdown>
    </li>
  </ul>
</template>

<script>
import MyDropdown from "@/components/common/MyDropdown.vue";

export default {
  components: {MyDropdown},
  methods: {
    logout() {
      localStorage.removeItem('api-xsrf-token');
      localStorage.removeItem('vuex');

      // Simply reload the page and the router auth check will redirect the user to login page
      this.$router.go()
    }
  }
}
</script>
