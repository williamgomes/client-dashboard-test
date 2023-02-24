<template>
  <div>
    <div
      id="accordionTasks"
      class="accordion open">
      <ServiceTaskListItem
        v-for="serviceTask in serviceTasks"
        :key="serviceTask.id"
        :serviceTask="serviceTask" />
    </div>
  </div>
</template>

<script>
import ServiceTaskListItem from "@/components/tasks/ServiceTaskListItem.vue";

export default {
  components: {ServiceTaskListItem},
  props: {
    pathYear: {
      type: String,
      required: true,
    }
  },
  computed: {
    serviceTasks() {
      return this.pathYear === '' ? this.$store.state.serviceTasksOngoing : this.$store.state.serviceTasksByYear[this.pathYear]
    }
  },
}
</script>