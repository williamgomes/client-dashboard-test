<template>
  <header class="bg-dark pt-9 pb-11 d-none d-md-block">
    <div class="container-md">
      <div class="row align-items-center">
        <div class="col">
          <h1 class="fw-bold text-white mb-2">
            {{ this.$route.meta.bannerTitle }}
          </h1>

          <p class="fs-lg text-white-75 mb-0">
            {{ this.$route.meta.bannerInfo }}
          </p>
        </div>
        <div class="col-auto">
          <p class="fs-sm text-uppercase text-gray-200 mb-1">
            {{ employeeData.info }}
          </p>
          <p class="fs-sm text-gray-500 mb-1">
            {{ employeeData.first }}
          </p>
          <p class="fs-sm text-gray-500 mb-1">
            {{ employeeData.second }}
          </p>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    employeeData: {
      type: Object,
      required: true,
    }
  }
}
</script>