<template>
  <li class="nav-item dropdown">
    <a
      id="navbarServiceProgress"
      ref="myDropdown"
      class="nav-link btn-white"
      :class="{'show':showDropdown}"
      @click="showDropdown = !showDropdown">
      <slot name="title" />
    </a>
    <div
      class="dropdown-menu"
      :class="{'show':showDropdown}">
      <slot />
    </div>
  </li>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      showDropdown: false,
    }
  },
  mounted() {
    document.addEventListener('click', this.dropdown)
  },
  unmounted () {
    document.removeEventListener('click', this.dropdown)
  },
  methods: {
    dropdown(e) {
      let el = this.$refs.myDropdown;
      let target = e.target;
      if (el !== target && !el.contains(target)) {
        this.showDropdown = false
      }
    },
  },
}
</script>
