//s jquery document ready function button click length validate fadetoggle filter
        $(document).ready(function(e) {
            $('#submitMail').click(function() {
              var sEmail = $('#email').val();
                if ($.trim(sEmail).length == 0) {

          }
                if (validateEmail(sEmail)) {
            $('#submitMail').click(function(){
              $("#valid").fadeToggle("fast");
            });
          }
    else {

            $('#submitMail').click(function(){
              $("#invalid").fadeToggle("fast");
            });

        }
      });
      });

    function validateEmail(sEmail) {
        var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
        if (filter.test(sEmail)) {
            return true;
        }
        else {
            return false;
        }
    }
// jQuery document ready function variable alert
    $(document).ready(function () {
      $("#submitMail").click(function () {
        var phoneText = $("#number").val();
        if ($.trim(phoneText).length == 0) {
          // alert("Please enter Phone Number");
              return false;
            }
        if (validatePhone(phoneText)) {
          // alert('Valid Phone Number');
          $('#submitMail').click(function(){
            $("#validNumber").fadeToggle("fast");
            });
              return true;
            }
            else {
          // alert('Invalid Phone Number');
            $('#submitMail').click(function(){
              $("#invalidNumber").fadeToggle("fast");
            });
              return false;
            }
            });
            });
          function validatePhone(phoneText) {
          var filter = /^[0-9-+]+$/;
            if (filter.test(phoneText)) {
              return true;
            }
          else {
            return false;
            }
            }
// jQuery for smooth scroll button
jQuery(document).ready(function($){
$(window).scroll(function(){
    if ($(this).scrollTop() > 50) {
        $('#backToTop').fadeIn('slow');
    } else {
        $('#backToTop').fadeOut('slow');
    }
});
$('#backToTop').click(function(){
    $("html, body").animate({ scrollTop: 0 }, 2000);
    return false;
});
});
