
//Pobieram odpowiednie bibioteki
require([
  'sidebar',
  'customScrollbar'
], function() {

  //Custom Sidebar
  let sidebar = $('.sidebar');
  let lists = sidebar.children('div');
  let height = $(window).height() / lists.length;
  let listPercentHeight = 100 / lists.length + "%";

  lists.each(function(){
    let list = $(this);

    list.addClass('list');
    list.mCustomScrollbar({
      setHeight: listPercentHeight,
      axis: 'x',
      theme: 'dark',
      advanced: {
        updateOnContentResize: true,
        updateOnSelectorChange:true
      }
    });
  });
});
