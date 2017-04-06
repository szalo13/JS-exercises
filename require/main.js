//bootstrap

require.config({
  baseUrl: 'require',
  paths: {
    jquery: 'libs/jquery',
    sidebar: 'modules/sidebar',
    customScrollbar: 'libs/jquery.mCustomScrollbar'
  }
});

require([
  'sidebar'
], function(){
  //initializing app
});
