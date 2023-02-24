<template>
  <div class="row">
    <div class="col-md-4">
      <h2 class="fw-bold text-black">
        Service processes waiting for <span class="text-success">your action</span>
      </h2>

      <p class="fs-lg text-gray-700 mb-7 mb-md-9">
        Find the essential steps to help us deliver all your service in time.
      </p>
    </div>
    <div class="col">
      <ServiceProcessesList
        v-if="Object.keys(serviceProcesses).length"
        :serviceProcesses="serviceProcesses" />

      <div
        v-else
        class="card card-border border-primary shadow-sm mt-2 mb-6 mb-md-8">
        <div class="card-body text-center">
          <button class="btn btn-success btn-rounded-circle">
            <i class="fe fe-check" />
          </button>
          <h5 class="fw-bold mt-2 mb-4">
            Good news, there is no outstanding to be done!
          </h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ServiceProcessesList from "@/components/home/ServiceProcessesList";

export default {
  components: {ServiceProcessesList},
  computed: {
    serviceProcesses() {
      return this.$store.state.processes;
    },
  },
  created() {
    this.$store.dispatch('getProcesses')
  }
}
</script>