<template>
  <div class="subtasks-block">
    <ServiceSubtaskListItem
      v-for="(subtask,index) in subtasks"
      :key="subtask.id"
      :subtask="subtask"
      :status="getStatus(index)" />
  </div>
</template>

<script>
import ServiceSubtaskListItem from "@/components/tasks/subtasks/ServiceSubtaskListItem.vue";

export default {
  components: {ServiceSubtaskListItem},
  props: {
    subtasks: {
      type: Array,
      required: false,
      default: () => [],
    }
  },
  methods: {
    getStatus(index) {
      let subtask = this.subtasks[index];
      let previousSubtask = this.subtasks[index - 1] ?? null;

      if (subtask.completed) {
        return 'completed';
      } else if (!subtask.completed && previousSubtask && previousSubtask.completed) {
        return 'in_progress';
      } else {
        return 'future';
      }
    }
  }
}
</script>