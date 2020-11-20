<template>
  <div>

  </div>
</template>

<script>
  const readMore = require("./lib/readmore");
  export default {
    name: "readMore",
    props: {
      id: '',
      blogId: '',
      name: '',
      qrcode: '',
      keyword: ''
    },
    data() {
      return {
        
      }
    },

    mounted() {
      readMore();
      import('./lib/config')(this.id, this.blogId, this.name, this.qrcode, this.keyword)
    }
  }
</script>

<style lang="scss" scoped>

</style>