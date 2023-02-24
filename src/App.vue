<template>
  <router-view
    class="view layout-header"
    name="LayoutHeader" />

  <router-view
    class="view home-header-background"
    name="HomeHeaderBackground" />

  <router-view class="view main-content" />

  <router-view
    class="view layout-footer"
    name="LayoutFooter" />
</template>

<style lang="scss">
@import "@/assets/main.scss";
</style>
