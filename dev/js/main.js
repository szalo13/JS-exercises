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
            let rows = $('.count-row');
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
          function addPointerAt(string, atPosition){

            return string.slice(0, atPosition) + "." + string.slice(atPosition);
          }

          function formatNumbers(number){
            let repeats = (number.length / 3 - 1);
            let finalNumber;

            for(let i = 0; i <= repeats; i++) {
              if(i==0){
                finalNumber = number;
              } else {
                if(finalNumber.indexOf(".") > 0) {
                  finalNumber = addPointerAt(finalNumber, finalNumber.indexOf(".") - 3)
                } else {
                  finalNumber = addPointerAt(finalNumber, finalNumber.length - 3)
                };
              }
            }

            return finalNumber;
          }

          let formated = false;

        	if (selector) {
            $(".formNumbersBtn").bind("click", function(){
              if(!formated){
                $(".formatNumbers").each(function(){
                  $(this).text(formatNumbers($(this).text()));
                });
              }
              formated = true;
            });
        	}
        },

        zad7: function (selector) {
        	if (selector) {
        		console.log(selector);
        	}
        },

        zad8: function (selector) {
        	if (selector) {
            let wind = $(window);
            let header = $('.sticky-header');
            let hWidth = header.width();
            let hOffsetTop;

            if(header[0]) hOffsetTop = header[0].offsetTop;

            $(window).scroll(function(){
              if(wind.scrollTop() > hOffsetTop) {
                header.css({
                  "position": "fixed",
                  "top": "0",
                  "width": hWidth
                });
              } else {
                header.css({
                  "position": "static"
                });
              }
            });
        	}
        },

        zad9: function (selector) {
            if (selector) {
              let module = $(".module");
              let detached = module.detach();

              detached.addClass("module__right");
              $('.container__right').append(detached);
            }
        },


});

DIVANTE.init();

});
