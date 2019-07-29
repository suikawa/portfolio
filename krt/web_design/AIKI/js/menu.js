
    $(function(){
    $(window).on("resize load",function(){
            if($(window).width() > 680) {
                $("nav ul").show("open");
            } else {
                $("nav ul").hide();
            }
        });

    $("nav p").click(function(){
            $("nav ul").stop().slideToggle(700);

            if($(this).hasClass("off")){
                $(this).removeClass("off");
            } else {
                $(this).addClass("off");
            }
        });
        });