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
          function setCheckboxDisable(target, state) {
            target.attr('disabled', state);
          }

        	if (selector) {
            let counter = 0;
            let checkboxes = $('.checkbox input');

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
                  break;
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
        		let elements = $(".well input");

            elements.each(function(){
              let elem = $(this);

              if ($.isNumeric(elem.val())) {
                elem.addClass("border-green");
              } else {
                elem.addClass("border-red");
              }
            });
        	}
        },

        zad4: function (selector) {
          function calculate(row){
            let number1 = Number($('.num1', row).text().trim());
            let number2 = Number($('.num2', row).text().trim());
            let operator = $('.operator', row).text().trim();

            switch(operator){
              case "+":
                return number1 + number2;
              case "-":
                return number1 - number2;
              case "*":
                return number1 * number2;
              default:
                console.log("Nieznany operator - nie wykonamy dzialania");
                break;
            }
          }
        	if (selector) {
            rows = $('.count-row');

            rows.each(function(){
              $(".sum", $(this)).text(calculate($(this)));
            });
        	}
        },

        zad5: function (selector) {
        	if (selector) {
            $("#btn-task5").bind("click", function(){
              let messageBox = confirm("Let's click a button");
              if(messageBox) alert("SUKCES");
            });
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
