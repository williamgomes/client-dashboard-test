<template>
  <div class="card card-bleed shadow-light-lg mb-6">
    <TableHeaderWithDateFilter
      :title="'Time Usage'"
      :periodName="'month'" />
    <div class="card-body">
      <div class="table-responsive">
        <TimeUsageTable :timeUsageRecords="timeUsageRecords" />
      </div>
    </div>
  </div>
</template>

<script>
import TimeUsageTable from "@/components/my-service/TimeUsageTable.vue";
import TableHeaderWithDateFilter from "@/components/common/TableHeaderWithDateFilter.vue";

export default {
  name: 'InvoiceHistory',
  components: {TableHeaderWithDateFilter, TimeUsageTable},
  data() {
    return {
      timeUsageRecords: [],
    }
  },
  mounted() {
    this.timeUsageRecords = this.$store.state.timeUsageRecords;
  },
}
</script>