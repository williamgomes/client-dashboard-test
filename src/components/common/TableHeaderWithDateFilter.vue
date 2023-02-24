<template>
  <div class="card-header">
    <div class="row align-items-center">
      <div class="col">
        <h2 class="mb-0">
          {{ title }}
        </h2>
      </div>

      <div class="col-auto">
        <div class="dropdown">
          <button
            id="dropdownPeriods"
            class="btn btn-xs btn-light dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false">
            {{ selectedPeriod }}
          </button>
          <div
            class="dropdown-menu dropdown-menu-xs pre-scrollable"
            aria-labelledby="dropdownPeriods"
            style="">
            <router-link
              v-for="period in periods"
              :key="period.offset"
              :to="{name: 'my-service', query: {service_id: $route.params.service}, query: {offset: period.offset}}"
              class="dropdown-item period-filter">
              {{ period.date }}
            </router-link>
          </div>
        </div>
      </div>

      <div class="col-auto">
        <a
          :class="periodOffset > -10 ? '' : 'disabled'"
          class="btn btn-primary btn-xs"
          @click="addPeriod(-1)"><i class="fe fe-chevron-left" /></a>
        <a
          :class="periodOffset < 0 ? '' : 'disabled'"
          class="btn btn-primary btn-xs ms-2"
          @click="addPeriod(1)"><i class="fe fe-chevron-right" /></a>
      </div>
    </div>
  </div>
</template>

<script>
import moment, {months} from "moment";

export default {
  name: 'TableHeaderWithDateFilter',
  props: {
    title: {
      type: String,
      required: true,
    },
    periodName: {
      type: String,
      required: true,
    }
  },
  data() {
    return {
      periods: [],
      periodOffset: 0,
    }
  },
  computed: {
    selectedPeriod() {
      let date = this.periods.find(obj => obj.offset === parseInt(this.periodOffset));
      return date ? date['date'] : '';
    },
    periodFormat() {
      if (this.periodName === 'year') {
        return 'YYYY';
      } else if (this.periodName === 'month') {
        return 'MMMM YYYY';
      }
    },
    periodPlural() {
      if (this.periodName === 'year') {
        return 'years';
      } else if (this.periodName === 'month') {
        return 'months';
      }
    }
  },
  watch: {
    '$route.query.offset': {
      immediate: true,
      handler(newVal) {
        if (typeof newVal == "undefined") {
          newVal = 0;
        }
        this.periodOffset = newVal;
      }
    }
  },
  mounted() {
    for (let i = 0; i >= -10; i--) {
      this.periods.push({
        offset: i,
        date: i === 0 ? `Current ${this.periodName}` : moment().add(i, this.periodPlural).format(this.periodFormat),
      })
    }
  },
  methods: {
    addPeriod(amount) {
      let newPeriodOffset = parseInt(this.periodOffset) + parseInt(amount);

      if (newPeriodOffset >= -10 && newPeriodOffset <= 0) {
        this.periodOffset = newPeriodOffset;
        this.$router.push({path: this.$route.path, query: {offset: this.periodOffset}})
      }
    },
  }
}
</script>