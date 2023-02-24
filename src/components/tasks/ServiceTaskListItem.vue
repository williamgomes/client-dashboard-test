<template>
  <div>
    <div class="card card-bleed shadow-light-lg mb-1">
      <div class="accordion-item">
        <h2
          :id="`heading${serviceTask.id}`"
          class="accordion-header">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            :data-bs-target="`#collapse${serviceTask.id}`"
            aria-expanded="false"
            :aria-controls="`collapse${serviceTask.id}`">
            <span class="me-2">{{ serviceTask.title }}</span>

            <span class="badge bg-primary-soft rounded-pill">1</span>

            <div class="text-muted ms-auto">
              <span class="fs-sm me-4 d-none d-md-inline">{{ serviceTask.deadline }}</span>
            </div>
          </button>

          <div
            class="progress"
            style="height: 7px;">
            <div
              class="progress-bar progress-bar-striped"
              role="progressbar"
              style="width: 10%"
              aria-valuenow="[progressbar_value]"
              aria-valuemin="0"
              aria-valuemax="100" />
          </div>
        </h2>
        <div
          :id="`collapse${serviceTask.id}`"
          class="accordion-collapse collapse py-2"
          :aria-labelledby="`heading${serviceTask.id}`">
          <div class="accordion-body px-0">
            <ServiceTaskAlert
              :title="'Subject of email notification'"
              :description="'The requisite documents have not been delivered. Please send them within the informed date so we can deliver your service on the schedule.'" />
            <ServiceSubtaskList
              :id="`heading${serviceTask.id}`"
              :subtasks="serviceTask.subtasks" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

import ServiceSubtaskList from "@/components/tasks/subtasks/ServiceSubtaskList.vue";
import ServiceTaskAlert from "@/components/tasks/ServiceTaskAlert.vue";
import { Tooltip } from "bootstrap";

export default {
  components: {ServiceTaskAlert, ServiceSubtaskList},
  props: {
    serviceTask: {
      type: Object,
      required: true,
    }
  },
  mounted() {
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new Tooltip(tooltipTriggerEl, {
      trigger : 'hover'
    }))
  }
}
</script>

<style>
.progress {
  border-radius: 0;
}
</style>