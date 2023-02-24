<template>
  <div class="card card-bleed shadow-light-lg mb-6">
    <div class="card-header">
      <router-link
        class="text-decoration-none fw-bold fs-sm text-uppercase"
        :to="{name: 'service-progress', params: {service_id: serviceFromUrl.id}}">
        <i class="fe fe-arrow-left ms-0" /> {{ serviceFromUrl.title }}
      </router-link>
      <div class="col me-auto mt-0">
        <h2 class="mb-0">
          {{ ticketComment.subject }}
        </h2>
      </div>
    </div>
    <div class="card-body">
      <div class="list-group list-group-flush">
        <div class="list-group-item d-flex align-items-center">
          <div>
            <h6 class="text-uppercase mb-0">
              Requested For
            </h6>

            <p class="fs-sm text-gray-700 mb-0">
              {{ serviceTemplateAndTaskPeriod }}
            </p>
          </div>
        </div>
        <div class="list-group-item d-flex align-items-center">
          <div class="px-0 container-fluid">
            <div class="d-flex justify-content-between">
              <div class="fs-sm">
                <h6 class="text-uppercase mb-0">
                  To
                </h6>
                <p class="fs-sm text-gray-700 mb-0">
                  {{ ticketComment.to }}
                </p>
              </div>

              <div class="fs-sm">
                <h6 class="text-uppercase mb-0">
                  From
                </h6>
                <p class="fs-sm text-gray-700 mb-0">
                  {{ ticketComment.from }}
                </p>
              </div>

              <div class="fs-sm">
                <h6 class="text-uppercase mb-0">
                  Requested At
                </h6>
                <p class="fs-sm text-gray-700 mb-0">
                  {{ ticketComment.created_at }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="list-group-item d-flex align-items-center">
          <div>
            <h6 class="text-uppercase">
              Requested
            </h6>

            <p class="fs-sm text-gray-700 bg-gray-200 p-4 mb-0">
              {{ ticketComment.body }}
            </p>
          </div>
        </div>

        <div class="list-group-item d-flex align-items-center">
          <div>
            <h6 class="text-uppercase">
              Important
            </h6>

            <p class="fs-sm text-gray-700 mb-0">
              This is a copy of the requested email sent to your contact person. Please submit the requested information or documentation by replying to the email you received.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    ticketComment: {
      type: Object,
      required: true,
    },
    serviceTemplate: {
      type: Object,
      required: true,
    },
    taskPeriod: {
      type: String,
      required: true,
    }
  },
  computed: {
    serviceTemplateAndTaskPeriod(){
      return `${this.serviceTemplate} (${this.taskPeriod})`
    },
    serviceFromUrl() {
      return this.$store.state.services.find(obj => obj.id === parseInt(this.$route.params.service_id));
    }
  },
}
</script>