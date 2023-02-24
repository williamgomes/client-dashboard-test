<template>
  <div class="card card-bleed shadow-light-lg mb-6">
    <TableHeaderWithDateFilter
      :title="'Invoice'"
      :periodName="'year'" />
    <div class="card-body">
      <div class="table-responsive">
        <InvoicesTable :invoices="invoices" />
      </div>
    </div>
  </div>
</template>

<script>
import TimeUsageTable from "@/components/my-service/TimeUsageTable.vue";
import TableHeaderWithDateFilter from "@/components/common/TableHeaderWithDateFilter.vue";
import InvoicesTable from "@/components/my-service/InvoicesTable.vue";

export default {
  name: 'InvoiceHistory',
  components: {InvoicesTable, TableHeaderWithDateFilter},
  data() {
    return {
      invoices: [],
    }
  },
  mounted() {
    this.invoices = this.$store.state.invoices;
  },
}
</script>