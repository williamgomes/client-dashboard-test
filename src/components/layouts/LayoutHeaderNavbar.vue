<template>
  <ul class="navbar-nav ms-auto">
    <li class="nav-item cursor-pointer">
      <MyDropdown>
        <template #title>
          Service progress
        </template>

        <router-link
          v-for="service in services"
          :key="service.id"
          class="dropdown-item"
          :to="{name: 'service-progress', params: {service_id: service.id}}">
          {{ service.title }}
        </router-link>
      </MyDropdown>
    </li>
    <li class="nav-item cursor-pointer">
      <MyDropdown>
        <template #title>
          My service
        </template>

        <router-link
          v-for="myService in myServices"
          :key="myService.id"
          class="dropdown-item"
          :to="{name: 'my-service', params: {service: myService.id}}">
          {{ myService.title }}
        </router-link>
      </MyDropdown>
    </li>
  </ul>
</template>

<script>
import MyDropdown from "@/components/common/MyDropdown.vue";

export default {
  components: {MyDropdown},
  computed: {
    services() {
      return this.$store.state.services
    },
    myServices() {
      return this.$store.state.myServices
    },
  },
  created() {
    this.$store.dispatch('getServices')
  }
}
</script>
