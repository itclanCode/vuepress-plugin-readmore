const { resolve } = require('path');

module.exports = (options = {}, context) => ({
  define() {
    const { config = {} } = context;
    const id = options.id || config.id;
    const blogId = options.blogId || config.blogId;
    const name = options.name || config.name;
    const qrcode = options.qrcode || config.qrcode;
    const keyword = options.keyword || config.qrcode;
    const ID = id || false;
    const BlogID = blogId || false;
    const Name = name || false;
    const Qrcode = qrcode || false;
    const Keywrod = keyword || false;
    return { ID, BlogID, Name, Qrcode, Keywrod };
  },

  enhanceAppFiles: resolve(__dirname, 'enhanceAppFile.js'),
  globalUIComponents: 'readMore',
});
