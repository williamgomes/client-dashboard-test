<template>
  <div class="card card-bleed border-bottom border-bottom-md-0 shadow-light-lg mt-4">
    <div
      id="sidenavCollapse"
      class="collapse d-md-block">
      <div class="card-body">
        <h5 class="fw-bold">
          Need help?
        </h5>

        <h6 class="mb-3 text-muted">
          Not sure exactly what to do or just want clarification?
          Our accountants will be happy to chat with you and clear things up for you.
        </h6>

        <p class="fs-6 text-uppercase text-gray-700 mb-0">
          Call
        </p>
        <a
          href="mailto:+4722555577"
          data-ol-has-click-handler="">
          <p class="fs-6 fw-bold mb-2">
            (+47) 22 55 55 77
          </p>
        </a>

        <p class="fs-6 text-uppercase text-gray-700 mb-0">
          Email
        </p>
        <a
          href="mailto:regnskap@synega.no"
          data-ol-has-click-handler="">
          <p class="fs-6 fw-bold mb-2">
            regnskap@synega.no
          </p>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    services() {
      return this.$store.state.services
    }
  },
}
</script>