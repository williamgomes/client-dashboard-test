<template>
  <div>
    <div class="card card-bleed shadow-light-lg mb-6">
      <div class="card-header">
        <h2 class="mb-0">
          Help Desk
        </h2>
      </div>
      <div class="card-body">
        <!--      <form class="mt-0 mb-5">-->
        <!--        <div class="input-group input-group-sm">-->
        <!--          <span class="input-group-text border-0 pe-1 bg-light">-->
        <!--            <i class="fe fe-search" />-->
        <!--          </span>-->
        <!--    -->
        <!--          <input-->
        <!--            v-model="search"-->
        <!--            class="form-control form-control-flush border-bottom-sm-1 px-1 fs-sm bg-light"-->
        <!--            type="text"-->
        <!--            aria-label="Search"-->
        <!--            placeholder="Search">-->
        <!--    -->
        <!--          <span class="input-group-text border-0 py-0 ps-1 pe-3 bg-light">-->
        <!--            <button-->
        <!--              class="btn btn-xs btn-light text-primary"-->
        <!--              type="submit">-->
        <!--              Search-->
        <!--            </button>-->
        <!--          </span>-->
        <!--        </div>-->
        <!--      </form>-->
        <HelpDeskList :clientHelpSettings="filteredClientHelpSettings" />
      </div>
    </div>
    <PauseHelp/>
  </div>
</template>

<script>
import HelpDeskList from "@/components/my-service/HelpDeskList.vue";
import PauseHelp from "@/components/my-service/PauseHelp.vue";

export default {
  name: 'HelpDesk',
  components: {PauseHelp, HelpDeskList},
  data() {
    return {
      search: '',
      clientHelpSettings: this.$store.state.clientHelpSettings,
    }
  },
  computed: {
    filteredClientHelpSettings() {
      return this.clientHelpSettings.filter(setting => {
        return setting.title.toLowerCase().includes(this.search.toLowerCase()) || setting.description.toLowerCase().includes(this.search.toLowerCase())
      })
    }
  },
}
</script>