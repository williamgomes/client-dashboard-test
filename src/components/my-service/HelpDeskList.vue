<template>
  <div class="list-group list-group-flush">
    <HelpDeskListItem
      v-for="clientHelpSetting in clientHelpSettings"
      :key="clientHelpSetting.id"
      :clientHelpSetting="clientHelpSetting" />
  </div>
</template>

<script>
import HelpDeskListItem from "@/components/my-service/HelpDeskListItem.vue";

export default {
  name: 'HelpDeskList',
  components: {HelpDeskListItem},
  props: {
    clientHelpSettings: {
      type: Array,
      required: false,
      default: () => [],
    }
  }
}
</script>