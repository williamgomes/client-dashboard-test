<template>
  <div class="subtask-block">
    <div class="row mx-0 py-3">
      <div class="col-1 me-5">
        <ServiceSubtaskStatus
          :class="'position-absolute'"
          :number="subtask.id"
          :status="status" />
        <div class="vl" />
      </div>
      <div class="col">
        <div class="fw-bold mb-1">
          {{ subtask.title }}
        </div>
        <div class="fs-sm text-muted mb-0">
          {{ subtask.description }}
        </div>
      </div>
      <router-link
        v-if="subtask.notification_log_id"
        :to="{name: 'service-progress.to-do', params: {service_id: this.$route.params.service_id, notification_log_id: subtask.notification_log_id}}"
        class="col-auto py-3 stretched-link">
        <img
          src="@/assets/img/document_hoverOFF_completedOFF.svg"
          class="img-fluid mb-2">
      </router-link>
      <router-link
        v-if="subtask.ticket_comment_id"
        :to="{name: 'service-progress.request', params: {service_id: this.$route.params.service_id, ticket_id: subtask.ticket_comment_id}}"
        class="col-auto py-3 stretched-link">
        <img
          src="@/assets/img/envelop_hoverON_completedOFF.svg"
          class="img-fluid mb-2">
      </router-link>
    </div>
  </div>
</template>

<script>
import ServiceSubtaskStatus from "@/components/tasks/subtasks/ServiceSubtaskStatus.vue";

export default {
  components: {ServiceSubtaskStatus},
  props: {
    subtask: {
      type: Object,
      required: true,
    },
    status: {
      type: String,
      required: true,
    }
  },
}
</script>

<style>
.vl {
  position: absolute;
  height: calc(100% - 16px);
  top: 44px;
  margin-left: 23px;
  border-left: 1px solid lightgray;
}

.subtasks-block .subtask-block:last-child .vl {
  display:none;
}
</style>