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
      this._setAttrs(this.id, this.blogId, this.name, this.qrcode, this.keyword);
    },

    _setAttrs(id,blogId,name,qrcode,keyword) {
     const themeDefaultContent = $(
         '#app > .theme-container>.page > .theme-default-content'
     );

      themeDefaultContent.attr('id', id);
      btw = new BTWPlugin();
      btw.init({
        id,
        blogId,
        name,
        qrcode,
        keyword,
      });
    }
  }
</script>

<style lang="scss" scoped>

</style>