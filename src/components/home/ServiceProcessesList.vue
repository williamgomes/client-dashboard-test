<template>
  <div class="card card-border border-primary shadow-lg">
    <div class="card-body">
      <div class="list-group list-group-flush">
        <ServiceProcessesListItem
          v-for="serviceProcess in serviceProcesses"
          :key="serviceProcess.id"
          :serviceProcess="serviceProcess"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ServiceProcessesListItem from "@/components/home/ServiceProcessesListItem";

export default {
  components: {ServiceProcessesListItem},
  props: {
    serviceProcesses: {
      type: Array,
      required: true,
    }
  }
}
</script>