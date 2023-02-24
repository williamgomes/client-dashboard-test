<template>
  <div class="w-100">
    <iframe
      id="notification_content"
      width="100%"
      height="500"
      class="border-0">
    </iframe>
  </div>
</template>

<script>
export default {
  props: {
    content: {
      type: String,
      required: true,
    },
  },
  mounted(){
    // Dynamically put email content into iframe to prevent styles mixing up
    const iframe = document.getElementById('notification_content');
    const iWindow = iframe.contentWindow;
    const iDocument = iWindow.document;
    const element = iDocument.getElementsByTagName("body")[0];

    element.innerHTML = this.content;
  }
}
</script>