<template>
  <div
    v-if="services.length"
    class="row">
    <ServiceOrder
      v-for="service in services"
      :key="service.id"
      :service="service" />
    <ServiceOrderDummy />
  </div>
</template>

<script>
import ServiceOrder from "@/components/home/ServiceOrder";
import ServiceOrderDummy from "@/components/home/ServiceOrderDummy";

export default {
  components: {
    ServiceOrderDummy,
    ServiceOrder
  },
  computed: {
    services() {
      return this.$store.state.services;
    },
  },
}
</script>