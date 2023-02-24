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
              :header="'Service Progress'"
              :items="services"
              :route="'service-progress'"
              :param="'service_id'"
              :activeItem="$route.params.service_id"
            />
            <LeftSidebarNeedHelp />
          </div>

          <div class="col-12 col-md-9">
            <div class="card card-bleed shadow-light-lg mb-6">
              <div class="card-header">
                <div class="col me-auto mt-0">
                  <h2 class="mb-0">
                    Bookkeepping
                  </h2>
                  <span class="badge rounded-pill bg-danger text-uppercase">1 Request</span>
                  <span class="badge rounded-pill bg-primary text-uppercase m-1">1 To do</span>

                  <div class="py-3">
                    <div
                      id="collapseServiceDescription"
                      class="text-ellipsis"
                      :class="serviceDescriptionVisibilityClass">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aut consequuntur dolore error eveniet facilis fugiat harum, labore nostrum officia omnis placeat quas voluptatibus. Excepturi, ullam, velit. Accusantium adipisci at atque commodi corporis cumque dicta distinctio dolore dolorum eos eveniet facilis, harum ipsa ipsam libero magni nesciunt odit officiis possimus quam recusandae rerum, sit sunt suscipit vel velit voluptatem. Accusamus architecto consequatur consequuntur delectus distinctio natus perspiciatis reiciendis sit! Doloremque incidunt natus neque quam! Accusantium animi consequuntur debitis dolorem doloremque dolores doloribus in minus nam nesciunt nulla obcaecati odio quidem, recusandae velit voluptas voluptate? Adipisci asperiores aspernatur cum cupiditate, delectus eos eum excepturi explicabo, ipsam iure officia officiis placeat quibusdam recusandae reiciendis tempore vero? Facere, inventore, magnam? Autem, ducimus, porro.
                    </div>

                    <a
                      href=""
                      class="small"
                      @click.prevent="toggleServiceDescriptionVisibility">{{ serviceDescriptionButtonText }}</a>
                  </div>
                </div>
              </div>
              <div class="card-body">
                <ul class="nav nav-tabs mb-6">
                  <li class="nav-item">
                    <router-link
                      class="nav-link"
                      :class="tabStatusClass('')"
                      :to="{name: 'service-progress', params: {service_id: $route.params.service_id}}">
                      Ongoing
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link
                      class="nav-link"
                      :class="tabStatusClass(currentYear)"
                      :to="{name: 'service-progress', params: {service_id: $route.params.service_id, year: currentYear}}">
                      {{ currentYear }}
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link
                      class="nav-link"
                      :class="tabStatusClass(currentYear - 1)"
                      :to="{name: 'service-progress', params: {service_id: $route.params.service_id, year: currentYear - 1}}">
                      {{ currentYear - 1 }}
                    </router-link>
                  </li>
                </ul>

                <ServiceTaskList :pathYear="pathYear" />
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
import ServiceTaskList from "@/components/tasks/ServiceTaskList.vue";

export default {
  name: 'ServiceProgressView',
  components: {ServiceTaskList, LeftSidebarNeedHelp, LeftSidebar, LayoutHeaderBanner},
  data() {
    return {
      employeeData: {
        info: 'Responsible accountant',
        first: 'Vigdis Berntsberg Lundahl (Accountant)',
        second: 'Hilde Lindstrøm Berland (Manager)',
      },
      serviceDescriptionVisibility: false,
      currentYear: new Date().getFullYear(),
    }
  },
  computed: {
    serviceDescriptionVisibilityClass() {
      return this.serviceDescriptionVisibility ? 'text-wrap' : '';
    },
    serviceDescriptionButtonText() {
      return this.serviceDescriptionVisibility ? 'Read less' : 'Read more';
    },
    pathYear(){
      return this.$route.params.year ?? '';
    },
    services() {
      return this.$store.state.services
    }
  },
  methods: {
    toggleServiceDescriptionVisibility() {
      this.serviceDescriptionVisibility = !this.serviceDescriptionVisibility;
    },
    tabStatusClass(val){
      return (! val && this.pathYear === '') ? 'active' : (val.toString() === this.pathYear ? 'active' : '');
    }
  }
}

</script>
