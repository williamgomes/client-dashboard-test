<template>
  <div
    id="currentModal"
    class="modal fade"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header py-5 px-5">
          <h5
            id="exampleModalLabel"
            class="modal-title">
            {{ header }}
          </h5>
          <button
            type="button"
            class="btn-close py-5"
            data-bs-dismiss="modal"
            aria-label="Close" />
        </div>
        <div class="modal-body px-5 pt-4 pb-5">
          <slot/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Modal } from "bootstrap";

export default {
  name: 'MyModal',
  props: {
    header: {
      type: String,
      required: true,
    }
  },
  data() {
    return {
      modal: null,
    }
  },
  mounted(){
    this.modal = new Modal('#currentModal', {})
  },
  methods: {
    openModal() {
      this.modal.show()

      const body = document.getElementById('app')
      const modalNode = document.getElementById('currentModal')
      body.insertBefore(modalNode, body.firstChild)
    },
    closeModal() {
      this.modal.hide()
    }
  }
}
</script>
