<template>
  <table class="table table-hover">
    <thead class="table-light">
      <tr class="bg-gray-300 fs-6 fst-normal text-muted text-uppercase">
        <th scope="col">
          Date
        </th>
        <th scope="col">
          Guidance
        </th>
        <th scope="col">
          Time
        </th>
        <th scope="col">
          Cost
        </th>
      </tr>
    </thead>
    <tbody>
      <template
        v-for="timeUsageRecord in timeUsageRecords"
        :key="timeUsageRecord.id">
        <tr class="fs-sm">
          <td>{{ timeUsageRecord.date }}</td>
          <td
            class="title cursor-pointer"
            @click="toggleDescription(timeUsageRecord)">
            <i class="fe fe-help-circle text-primary fs-5" />
            Assignment: {{ timeUsageRecord.title }}
          </td>
          <td>{{ time(timeUsageRecord.time) }}</td>
          <td>{{ timeUsageRecord.cost }}</td>
        </tr>
        <tr v-show="timeUsageRecord.showDescription">
          <td
            colspan="4"
            class="description bg-gray-200 text-gray-800 fs-sm">
            {{ timeUsageRecord.description }}
          </td>
        </tr>
      </template>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'TimeUsageTable',

  props: {
    timeUsageRecords: {
      type: Array,
      required: false,
      default: () => [],
    }
  },
  mounted() {
    this.timeUsageRecords.forEach((element) => {
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
    toggleDescription(timeUsageRecord) {
      timeUsageRecord.showDescription = !timeUsageRecord.showDescription;
    },
  }
}
</script>
