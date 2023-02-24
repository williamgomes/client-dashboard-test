<template>
  <table class="table table-hover">
    <thead class="table-light">
      <tr class="bg-gray-300 fs-6 fst-normal text-muted text-uppercase">
        <th scope="col">
          Issued Date
        </th>
        <th scope="col">
          Control Number
        </th>
        <th scope="col">
          Total Time Usage
        </th>
        <th scope="col">
          Amount
        </th>
        <th scope="col">
          Due Date
        </th>
      </tr>
    </thead>
    <tbody>
      <template
        v-for="invoice in invoices"
        :key="invoice.id">
        <tr class="fs-sm">
          <td>{{ invoice.created_at }}</td>
          <td>
            #{{ invoice.control_number }}
          </td>
          <td>{{ invoice.time_usage }}</td>
          <td>{{ invoice.amount }}</td>
          <td>{{ invoice.due_at }}</td>
        </tr>
      </template>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'InvoicesTable',

  props: {
    invoices: {
      type: Array,
      required: false,
      default: () => [],
    }
  },
  mounted() {
    this.invoices.forEach((element) => {
      element.showDescription = false;
    })
  },
  methods: {
    time(minutes) {
      let resultString = 'minute';
      if (parseInt(minutes) > 1) {
        resultString += 's';
      }
      return `${minutes} ${resultString}`;
    },
    toggleDescription(invoice) {
      invoice.showDescription = !invoice.showDescription;
    },
  }
}
</script>
