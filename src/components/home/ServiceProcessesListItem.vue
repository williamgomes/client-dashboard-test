<template>
  <div class="list-group-item d-flex align-items-center">
    <div class="me-auto">
      <router-link
        v-if="serviceProcess.type === 'ticket'"
        :to="{name: 'service-progress.request', params: {service_id: serviceProcess.dashboard_service_id, ticket_id: serviceProcess.id}}"
        class="stretched-link mb-1">
        {{ serviceProcess.title }}
      </router-link>
      <router-link
        v-if="serviceProcess.type === 'notification'"
        :to="{name: 'service-progress.to-do', params: {service_id: serviceProcess.dashboard_service_id, notification_log_id: serviceProcess.id}}"
        class="stretched-link mb-1">
        {{ serviceProcess.title }}
      </router-link>
      <p class="fs-sm text-muted mb-0 text-uppercase">
        {{ serviceProcess.dashboard_service_title }}
      </p>
    </div>

    <div
      class="badge rounded-pill mb-3 text-uppercase"
      :class="bgClass">
      {{ actionButtonText }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    serviceProcess: {
      type: Object,
      required: true,
    }
  },
  computed: {
    bgClass() {
      let className = this.serviceProcess.type === 'ticket' ? 'danger' : 'primary';
      return `bg-${className}`
    },
    actionButtonText() {
      return this.serviceProcess.type === 'ticket' ? 'Request' : 'To Do';
    },
  }
}
</script>
