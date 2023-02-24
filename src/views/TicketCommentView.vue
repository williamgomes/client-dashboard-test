<template>
  <div>
    <LayoutHeaderBanner
      :employeeData="employeeData"
    />
    <div class="pb-8 pb-md-11 mt-md-n6">
      <div class="container-md">
        <div class="row">
          <div class="col-12 col-md-3">
            <LeftSidebar
              :header="'Service Progress'"
              :items="services"
              :route="'service-progress'"
              :param="'service_id'"
              :activeItem="$route.params.service_id" />
            <LeftSidebarNeedHelp />
          </div>

          <div class="col-12 col-md-9">
            <TicketComment
              :ticketComment="ticketComment" 
              :serviceTemplate="serviceTemplate"
              :taskPeriod="taskPeriod" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import LeftSidebar from "@/components/common/LeftSidebar.vue";
import LeftSidebarNeedHelp from "@/components/common/LeftSidebarNeedHelp.vue";
import LayoutHeaderBanner from "@/components/common/LayoutHeaderBanner.vue";
import TicketComment from "@/components/service-process/TicketComment.vue";

export default {
  name: 'TicketCommentView',
  components: {TicketComment, LayoutHeaderBanner, LeftSidebarNeedHelp, LeftSidebar},
  data() {
    return {
      serviceTemplate: 'Preparation for the annual accounts',
      taskPeriod: 2020,
      ticketComment: {
        id: 13,
        subject: 'Subject',
        to: 'email@example.com',
        from: 'User Name',
        body: 'Curabitur est quam, faucibus et elementum in, cursus eu quam. Phasellus vel urna semper, faucibus dui ac, pellentesque tellus. Phasellus eget egestas turpis, ut rutrum nibh. Etiam faucibus ultrices est, in pellentesque leo vehicula et. Donec eget tempus mi. Vestibulum porttitor libero sed metus ornare, eget elementum dui porttitor. Vivamus velit nunc, blandit id nunc eu, porta ullamcorper dolor. Ut sit amet finibus odio. Morbi enim ex, pellentesque in metus id, venenatis pellentesque ex. Nunc ac ipsum varius, facilisis mauris in, tempor felis. Quisque ligula neque, ultricies id libero non, molestie malesuada libero. Aliquam euismod ex vitae lorem ornare, ut pellentesque felis laoreet.\n' +
            '\n' +
            'Proin aliquet dolor felis, ut elementum turpis tristique id. Donec ac feugiat felis, sed finibus erat. Vestibulum sodales turpis hendrerit nibh hendrerit ullamcorper. Aliquam aliquet, lorem eu tincidunt consectetur, leo odio interdum turpis, quis congue turpis ligula a ipsum. Duis faucibus mattis libero, in ultricies leo convallis at. Praesent a volutpat sem, ut congue turpis. Nullam placerat arcu quis odio sollicitudin, feugiat tristique magna congue.\n' +
            '\n' +
            'Pellentesque eu dictum est. Cras a odio euismod, eleifend ex id, aliquam nisi. Duis eget bibendum ipsum. Curabitur bibendum tellus in aliquam sagittis. Nulla a elit vitae metus blandit euismod quis mattis turpis. Mauris ultrices sed elit ut blandit. Integer convallis velit non dapibus iaculis.\n' +
            '\n' +
            'Phasellus eleifend consectetur ante, eu lobortis risus maximus ac. Suspendisse potenti. Aenean quis placerat leo. Aenean ligula nulla, facilisis at dolor in, pellentesque sodales mi. Morbi interdum tincidunt pretium. In vitae dolor hendrerit, malesuada ligula sed, volutpat justo. Curabitur lorem lacus, interdum vitae dui dignissim, sollicitudin malesuada justo. Cras eget commodo sapien, eu tincidunt est. Sed laoreet, mi at blandit finibus, eros lorem tincidunt tortor, nec tristique lectus ipsum at tortor. Sed sed laoreet dui, ut faucibus elit.',
        created_at: '2022-02-03 12:12',
      },
    }
  },
  computed: {
    employeeData() {
      return this.$store.state.employeeData;
    },
    services() {
      return this.$store.state.services
    }
  },
}

</script>
