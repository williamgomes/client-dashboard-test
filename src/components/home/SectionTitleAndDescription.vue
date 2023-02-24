<template>
  <div class="row justify-content-center pt-7">
    <div class="col-12 col-md-10 col-lg-8 text-center">
      <h2 class="fw-bold text-black">
        {{ title }}
      </h2>

      <p
        v-if="description"
        class="fs-lg text-gray-700 mb-7 mb-md-9">
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      required: true,
      type: String,
    },
    description: {
      required: false,
      type: String,
      default: '',
    }
  }
}
</script>