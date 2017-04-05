var DIVANTE = {};

jQuery(document).ready(function ($) {

    $.extend(window.DIVANTE, {

        init: function (selector) {
            DIVANTE.zad1('body');
            DIVANTE.zad2('body');
            DIVANTE.zad3('body');
            DIVANTE.zad4('body');
            DIVANTE.zad5('body');
            DIVANTE.zad6('body');
            DIVANTE.zad7('body');
            DIVANTE.zad8('body');
            DIVANTE.zad9('body');
        },

        zad1: function (selector) {
        	if (selector) {
            let counter = 0;
            let checkboxes = $('.checkbox input');

            function setCheckboxDisable(target, state) {
              target.attr('disabled', state);
            }

        		$('#button').bind( "click", function(){

              counter++;
              switch(counter) {
                case 1:
                  checkboxes.each( function() {
                    $(this).attr(
                      {'checked': false,
                       'disabled': true});
                  });
                  break;
                case 2:
                  checkboxes.each( function(){
                    setCheckboxDisable($(this), false);
                  });
                  break;
                case 3:
                  checkboxes.each(function(){
                    setCheckboxDisable($(this), true);
                  });
                default:
                    checkboxes.each(function(){
                      if(counter % 2) {
                        setCheckboxDisable($(this), true);
                      } else {
                        setCheckboxDisable($(this), false);
                      }
                    });
                  break;
              }
            });
        	}
        },

        zad2: function (selector) {
        	if (selector) {
        		let elements = $(".well ul li");

            elements.each(function() {
              if ($(this).text() >= 10) {
                $(this).css("color", "red");
              } else {
                //elements text is higher than 10, nothing to do.
              }
            });
        	}
        },

        zad3: function (selector) {
        	if (selector) {
        		console.log(selector);
        	}
        },

        zad4: function (selector) {
        	if (selector) {
        		console.log(selector);
        	}
        },

        zad5: function (selector) {
        	if (selector) {
        		console.log(selector);
        	}
        },

        zad6: function (selector) {
        	if (selector) {
        		console.log(selector);
        	}
        },

        zad7: function (selector) {
        	if (selector) {
        		console.log(selector);
        	}
        },

        zad8: function (selector) {
        	if (selector) {
        		console.log(selector);
        	}
        },

        zad9: function (selector) {
            if (selector) {
                console.log(selector);
            }
        },


});

DIVANTE.init();

});
