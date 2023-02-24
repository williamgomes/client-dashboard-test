<template>
  <div class="row bg-gray-200 mx-0 py-3">
    <div class="col-1 me-5 py-3">
      <div class="icon text-primary">
        <svg width="40" height="40" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z"/><circle fill="#335EEA" opacity=".3" cx="12" cy="12" r="10"/><rect fill="#335EEA" x="11" y="7" width="2" height="8" rx="1"/><rect fill="#335EEA" x="11" y="16" width="2" height="2" rx="1"/></g></svg>
      </div>
    </div>
    <div class="col">
      <div class="fw-bold mb-1">
        {{ title }}
      </div>
      <div class="fs-sm text-muted mb-0">
        {{ description }}
      </div>
    </div>
    <div class="col-auto py-3">
      <img src="@/assets/img/document_hoverOFF_completedOFF.svg" class="img-fluid mb-2">
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