<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-white">
    <div class="container">
      <router-link
        class="navbar-brand"
        to="/">
        <img
          src="@/assets/img/logo.png"
          class="navbar-brand-img nav-logo"
          alt="Logo">
      </router-link>

      <div
        id="navbarCollapse"
        class="collapse navbar-collapse">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <i class="fe fe-x" />
        </button>

        <LayoutHeaderNavbar />

        <!--        <form-->
        <!--          action=""-->
        <!--          class="form-inline ms-auto">-->
        <!--          <input-->
        <!--            type="search"-->
        <!--            class="form-control form-control-sm"-->
        <!--            placeholder="Search">-->
        <!--        </form>-->

        <NavbarSettings />

        <router-link
          class="navbar-btn btn btn-sm btn-primary lift ms-auto"
          :to="{name: 'my-service', params: {service: 'help-desk'}}">
          Help
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
import LayoutHeaderNavbar from "@/components/layouts/LayoutHeaderNavbar";
import NavbarSettings from "@/components/layouts/NavbarSettings.vue";

export default {
  components: {NavbarSettings, LayoutHeaderNavbar},
}
</script>