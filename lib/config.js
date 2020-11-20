window.onload = function (id, blogId, name, qrcode, keyword) {
  themeDefaultContent = $(
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
};
