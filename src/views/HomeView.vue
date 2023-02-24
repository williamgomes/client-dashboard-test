<template>
  <section class="container py-5">
    <ServiceProcesses/>
  </section>
  <section class="bg-gray-200">
    <div class="container">
      <SectionTitleAndDescription
        :title="'Your service orders'"
        :description="'These are service orders following the current service agreement.'"/>
      <ServiceOrders />
    </div>
  </section>
</template>

<script>
import SectionTitleAndDescription from "@/components/home/SectionTitleAndDescription";
import ServiceOrders from "@/components/home/ServiceOrders";
import ServiceProcesses from "@/components/home/ServiceProcesses";

export default {
  name: 'HomeView',
  components: {ServiceProcesses, ServiceOrders, SectionTitleAndDescription},
}
</script>
