<template>
  <div>

  </div>
</template>

<script>
  const readMore = require("./lib/readmore");
  const btwPluginConfig = require("./lib/config");
  export default {
    name: "readMore",
    data() {
      return {
        id: '',
        blogId: '',
        name: '',
        qrcode: '',
        keyword: ''
      }
    },

    mounted() {
      readMore();
      btwPluginConfig(this.id, this.blogId, this.name, this.qrcode, this.keyword);
    }
  }
</script>

<style lang="scss" scoped>

</style>