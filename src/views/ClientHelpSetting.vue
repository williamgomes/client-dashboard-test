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
              :activeItem="'help-desk'"
            />
            <LeftSidebarNeedHelp />
          </div>

          <div class="col-12 col-md-9">
            <div class="card card-bleed shadow-light-lg mb-6">
              <div class="card-header">
                <router-link
                  class="text-decoration-none fw-bold fs-sm text-uppercase"
                  :to="{name: 'my-service', params: {service: 'help-desk'}}">
                  <i class="fe fe-arrow-left ms-0" /> Help Desk
                </router-link>
                <div class="col me-auto mt-0">
                  <h2 class="mb-0">
                    {{ settingFromUrl.title }}
                  </h2>
                </div>
              </div>
              <div class="card-body">
                <p>
                  Help for
                </p>
                <p class="text-gray-800">
                  {{ settingFromUrl.description }}
                </p>

                <hr>
                <div class="form-group mb-5">
                  <label
                    class="form-label"
                    for="helpMessage">
                    Comment
                    <span class="fs-sm text-muted ms-3">(Required)</span>
                  </label>
                  <textarea
                    id="helpMessage"
                    class="form-control"
                    rows="5"
                    placeholder="Comment"
                    spellcheck="false" />
                </div>
                <div class="d-flex justify-content-end">
                  <button
                      class="btn btn-sm btn-primary"
                      type="submit">
                    Submit
                  </button>

                  <router-link
                      class="btn btn-sm btn-outline-white ms-4"
                      :to="{name: 'my-service', params: {service: 'help-desk'}}">
                    Cancel
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import LayoutHeaderBanner from "@/components/common/LayoutHeaderBanner.vue";
import LeftSidebar from "@/components/common/LeftSidebar.vue";
import LeftSidebarNeedHelp from "@/components/common/LeftSidebarNeedHelp.vue";

export default {
  name: 'ClientHelpSetting',
  components: {LeftSidebarNeedHelp, LeftSidebar, LayoutHeaderBanner},
  data(){
    return {
      employeeData: () => [],
      myServices: () => [],
      settingFromUrl: () => [],
    }
  },
  mounted(){
    this.employeeData = this.$store.state.employeeData;
    this.myServices = this.$store.state.myServices

    this.settingFromUrl = this.$store.state.clientHelpSettings.find(obj => obj.id === parseInt(this.$route.params.client_help_setting_id));
  }
}
</script>