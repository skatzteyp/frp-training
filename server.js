const bs = require('browser-sync').create();

bs.init({
  server: './public'
});

bs.reload('*');
