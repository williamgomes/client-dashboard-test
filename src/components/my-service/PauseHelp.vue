<template>
  <div class="card card-bleed shadow-light-lg mb-3">
    <div class="card-header">
      <div class="row align-items-center">
        <div class="col">
          <h4 class="card-header-title">
            {{ pauseStatusChangeBlockHeader }}
          </h4>
        </div>
        <div class="col-auto">
          <div
            class="btn btn-xs btn-warning"
            :class="disabledClass"
            @click="openModal">
            {{ modalOpeningButtonText }}
          </div>
        </div>
      </div>
    </div>
    <div class="card-body">
      <div
        v-if="requested"
        class="alert alert-info mt-2">
        We have received your request and will process it as soon as possible.
      </div>
      <p
        v-else
        class="mb-0">
        This will result in all work for {{ client.name }} stopping immediately.
        You can activate your profile yourself by returning to the help center.
        All pause requests are manually approved.
      </p>
    </div>
  </div>
  <MyModal
    ref="modal"
    :header="modalHeading">
    <div class="row">
      <div class="col-sm-12">
        <p class="fs-sm">
          {{ modalWarning }}
        </p>
        
        <div class="mt-5">
          <button
            class="btn btn-xs btn-primary"
            type="submit"
            @click="confirmPauseStatusChange">
            <strong>Confirm</strong>
          </button>

          <button
            type="button"
            class="btn btn-xs"
            data-dismiss="modal"
            @click="closeModal">
            Cancel
          </button>
        </div>
      </div>
    </div>
  </MyModal>
</template>

<script>
import MyModal from "@/components/common/MyModal.vue";

export default {
  name: 'PauseHelp',
  components: {MyModal},
  data() {
    return {
      client: {},
      requested: false,
    }
  },
  computed: {
    pauseStatusChangeBlockHeader() {
      return this.client.paused ? 'Activate your profile from pause' : 'Pause your profile';
    },
    disabledClass() {
      return this.requested ? 'disabled' : '';
    },
    modalHeading() {
      let postfix = this.client.paused ? 'reactivate your profile' : 'pause your profile';
      return `Are you sure you want to ${postfix}?`
    },
    modalWarning() {
      if (this.client.paused) {
        return `This will mean that we continue our work for ${this.client.name} where we last ended. You can even pause your profile by returning to the Help Center. All pause requests are manually approved.`
      } else {
        return `This will cause everything to work for ${this.client.name} stops immediately. You can activate your profile yourself by returning to the help center. All pause requests are manually approved.`;
      }
    },
    modalOpeningButtonText() {
      return this.client.paused ? 'Activate profile' : 'Pause profile';
    }
  },
  mounted() {
    this.client = this.$store.state.authClient;
  },
  methods: {
    confirmPauseStatusChange() {
      // The logic to be here
      this.requested = true;
      this.closeModal()
    },
    openModal() {
      this.$refs.modal.openModal()
    },
    closeModal() {
      this.$refs.modal.closeModal()
    }
  }
}
</script>