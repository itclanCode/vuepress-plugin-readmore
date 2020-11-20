<template>
  <div>

  </div>
</template>

<script>
  const readMore = require("./readmore");
  const btwPluginConfig = require("./config");
  export default {
    name: "readMore",
    data() {
      return {
        blogId: '',
        name: '',
        qrcode: '',
        keyword: ''
      }
    },

    mounted() {
      readMore();
      btwPluginConfig(this.blogId, this.name, this.qrcode, this.keyword);
    }
  }
</script>

<style lang="scss" scoped>

</style>