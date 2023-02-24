<template>
  <div>
    <LayoutHeaderBanner
      :employeeData="employeeData"
    />
    <main class="pb-8 pb-md-11 mt-md-n6">
      <div class="container-md">
        <div class="row">
          <div class="col-12 col-md-3">
            <LeftSidebar
              :header="'My Service'"
              :items="myServices"
              :route="'my-service'"
              :param="'service'"
              :activeItem="$route.params.service"
            />
            <LeftSidebarNeedHelp />
          </div>

          <div class="col-12 col-md-9">
            <TimeUsage v-if="$route.params.service === 'time-usage'"/>
            <InvoiceHistory v-else-if="$route.params.service === 'invoice'"/>
            <HelpDesk v-else-if="$route.params.service === 'help-desk'"/>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>

import LayoutHeaderBanner from "@/components/common/LayoutHeaderBanner.vue";
import LeftSidebar from "@/components/common/LeftSidebar.vue";
import TimeUsage from "@/components/my-service/TimeUsage.vue";
import LeftSidebarNeedHelp from "@/components/common/LeftSidebarNeedHelp.vue";
import InvoiceHistory from "@/components/my-service/InvoiceHistory.vue";
import HelpDesk from "@/components/my-service/HelpDesk.vue";

export default {
  name: 'MyServiceView',
  components: {HelpDesk, InvoiceHistory, LeftSidebarNeedHelp, TimeUsage, LeftSidebar, LayoutHeaderBanner},
  computed: {
    employeeData() {
      return this.$store.state.employeeData;
    },
    myServices() {
      return this.$store.state.myServices
    }
  }
}

</script>
