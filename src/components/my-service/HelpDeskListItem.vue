<template>
  <div class="list-group-item">
    <div class="row align-items-center">
      <div class="col">
        <router-link
          :to="{name: 'my-service.help-desk', params: {client_help_setting_id: clientHelpSetting.id}}"
          class="stretched-link fs-5">
          {{ clientHelpSetting.title }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelpDeskListItem',
  props: {
    clientHelpSetting: {
      type: Object,
      required: true,
    }
  },
}
</script>