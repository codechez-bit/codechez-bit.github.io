$(document).ready(function(){
    // $('#why_us div').inview();

    wow = new WOW({
            boxClass:     'wow', 
            animateClass: 'animated',
            offset:       100
        });

    wow.init();

    var wow = new WOW({

        // selector
        boxClass: 'wow', 
    
        // animate class
        animateClass: 'animated',
    
        // offset in pixels
        offset: 0,
    
        // triggers animations on mobile devices
        mobile: true,
    
        // acts on asynchronously loaded content
        live: true,       
    
        // callback function that will be triggered every time an animation is started
        callback:     function(box) {
    
        },
    
        // scroll container selector
        scrollContainer: null 
        
    });

    $('.imgContain').on('click', function(){
        $('.imgContain').find('div').addClass('not-active');
        $(this).find('div').removeClass('not-active');
        var imgSrc = $(this).find('img').attr('src');
        var imgId = $(this).find('img').attr('data-slide-img-id');
        $('#'+imgId).attr('src', imgSrc);
    });

    var oga_facial = {"24":"N 3,750.00", "48": "N 2,050.00", "36": "N 2,150.00"};
        // var oga_toilet = {"24":"N 3,750.00", "48": "N 2,050.00", "36": "N 2,150.00"};
        // var oga_serviettes = {"24":"N 3,750.00", "48": "N 2,050.00", "36": "N 2,150.00"};
        // var myD_facial = {"12":"N 2,050.00", "48": "N 2,050.00", "36": "N 2,150.00"};
        // var myD_toilet = {"12":"N 2,050.00", "48": "N 2,050.00", "36": "N 2,150.00"};
        // var myD_serviettes = {"12":"N 2,050.00", "48": "N 2,050.00", "36": "N 2,150.00"};
        // var myF_facial = {"12":"N 2,050.00", "48": "N 2,050.00", "36": "N 2,150.00"};
        // var myF_toilet = {"12":"N 2,050.00", "48": "N 2,050.00", "36": "N 2,150.00"};
        // var myF_serviettes = {"12":"N 2,050.00", "48": "N 2,050.00", "36": "N 2,150.00"};
        $('.pack_size_dropdown').on('change', function(){
            // var objectName = $(this).attr('id');
            var value = $(this).val();
            var price = oga_facial[value];
            // switch(objectName){
            //     case 'oga_facial':
            //         price = oga_facial[value];
            //         break;
            //     default:
            //         price = "N 0.00";
            //         break;
            // }
            $(this).parent().next().find('p').html(price);
            // $("#"+objectName+"_price").html(price);
        });

        $("#submit").on("click", function(){
                var name = $("#name").val();
                var email = $("#email").val();
                var phone = $("#phone").val();
                var message = $("#message").val();
                if(name != "" && email != "" && phone != "" && message != ""){
                    $('#submitModal').modal('show');  
                    $("#name").val(""); 
                    $("#email").val(""); 
                    $("#phone").val(""); 
                    $("#message").val("");  
                }else{
                    alert("Please fill all details");
                }
            });
        
});

