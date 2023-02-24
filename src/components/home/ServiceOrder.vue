<template>
  <div class="col-12 col-md-6 col-lg-4 mb-8">
    <router-link
      :to="{name: 'service-progress', params: {service_id: service.id}}"
      class="h-100 card shadow-lg mb-6 mb-md-8 lift lift-lg card-border"
      :class="colorClass('border')">
      <div class="card-body text-center h-100">
        <h3 class="fw-bold mb-4">
          {{ service.title }}
        </h3>

        <h3
          class="my-2"
          :class="colorClass('text')">
          ●
        </h3>

        <p
          v-sane-html="service.shortDescription"
          class="fw-lighter text-black-50 lh-sm mb-8" />

        <div class="card-img-overlay card-img-overlay">
          <div
            class="card-body p-3"
            :class="colorClass('bg')">
            <p class="fs-5 mb-2 text-white">
              View progress <i class="fe fe-arrow-right ms-0" />
            </p>

            <div
              class="shape shape-bottom-100 shape-fluid-x"
              :class="colorClass('text')">
              <svg
                viewBox="0 0 2880 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M0 48h2880V0h-720C1442.5 52 720 0 720 0H0v48z"
                  fill="currentColor" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    service: {
      type: Object,
      required: true,
    }
  },
  methods: {
    colorClass(type) {
      return `${type}-${this.service.color}`;
    }
  }
}
</script>