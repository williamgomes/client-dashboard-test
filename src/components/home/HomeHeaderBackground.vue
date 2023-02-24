<template>
  <section
    data-jarallax
    data-speed=".8"
    class="pt-10 pb-11 py-md-10 overlay overlay-black overlay-80 jarallax"
    :style="{ backgroundImage: 'url(' + require('@/assets/img/header-cover.jpg') + ')' }">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-md-10 text-center">
          <h1 class="display-2 fw-bold text-white header-main-text">
            Client Dashboard
          </h1>
          <p class="lead text-white-75 mb-0">
            Essential view of Synega service you abce
          </p>
          <h3 class="text-white-75 mt-3 mb-0 fw-bold">
            {{ authClientName }}
          </h3>
        </div>
      </div>
    </div>
  </section>
  <div class="position-relative">
    <div class="shape shape-bottom shape-fluid-x svg-shim text-light">
      <svg
        viewBox="0 0 2880 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"><path
          d="M0 48h2880V0h-720C1442.5 52 720 0 720 0H0v48z"
          fill="currentColor" /></svg>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      authClientName: this.$store.state.authClient.name,
    }
  }
}
</script>