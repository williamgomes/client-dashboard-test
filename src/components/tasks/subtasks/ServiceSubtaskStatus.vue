<template>
  <div>
    <button
      v-if="status==='in_progress' || status==='future'"
      class="btn btn-sm btn-circle opacity-1 mx-1 my-1"
      :class="bgClass(status)"
      data-bs-toggle="tooltip"
      data-bs-placement="top"
      :data-bs-title="displayStatus">
      {{ number }}
    </button>

    <span
      v-if="status==='completed'"
      class="icon text-success"
      data-bs-toggle="tooltip"
      data-bs-placement="top"
      :data-bs-title="displayStatus">
      <svg width="40" height="40" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z"/><circle fill="#335EEA" opacity=".3" cx="12" cy="12" r="10"/><path d="M16.769 7.818a1 1 0 011.462 1.364l-7 7.5a1 1 0 01-1.382.077l-3.5-3a1 1 0 011.302-1.518l2.772 2.376 6.346-6.8z" fill="#335EEA"/></g></svg>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    status: {
      type: String,
      required: true,
    },
    number: {
      type: Number,
      required: true,
    }
  },
  methods: {
    bgClass(status){
      if(status === 'in_progress'){
        return 'btn-success'
      } else {
        return 'btn-gray-400'
      }
    }
  },
  computed: {
    displayStatus(){
      if(this.status === 'in_progress'){
        return 'in progress'
      } else if(this.status === 'future'){
        return 'future step'
      } else {
        return this.status;
      }
    }
  }
}
</script>

<style>
.btn-circle {
  width: 40px;
  height: 40px;
  padding: 6px 0px;
  border-radius: 20px;
  text-align: center;
  font-size: 17px;
  line-height: 1.42857;
}
</style>