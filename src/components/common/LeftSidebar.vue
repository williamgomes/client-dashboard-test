<template>
  <div class="card card-bleed border-bottom border-bottom-md-0 shadow-light-lg">
    <div
      id="sidenavCollapse"
      class="collapse d-md-block">
      <div class="card-body">
        <h6 class="fw-bold text-uppercase mb-5">
          {{ header }}
        </h6>

        <ul class="card-list list text-gray-700">
          <li
            v-for="item in items"
            :key="item.id"
            :class="activeClass(item.id)"
            class="list-item my-4">
            <router-link
              class="list-link text-reset"
              :to="{name: route, params: {[param]: item.id}}">
              {{ item.title }}
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    header: {
      type: String,
      required: true,
    },
    items: {
      type: Array,
      required: true,
    },
    route: {
      type: String,
      required: true,
    },
    param: {
      type: String,
      required: true,
    },
    activeItem: {
      type: String,
      required: false,
      default: null,
    }
  },
  methods: {
    activeClass(id) {
      return id === this.activeItem ? 'active' : '';
    }
  }
}
</script>