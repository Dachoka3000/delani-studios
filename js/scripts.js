$(document).ready(function(){
    $("#container").css({textAlign:'center',});
    $("h").css({
        fontWeight:'bold',
        fontSize:'larger',
        textAlign:'center',
    })
    $(".iconDesign").click(function(){
        $("#designDescription").toggle();
        $(".iconDesign").hide();
    })
    $("#designDescription").click(function(){
        $(".iconDesign").toggle();
        $("#designDescription").hide();
    })
    $(".iconDevelopment").click(function(){
        $("#developmentDescription").toggle();
        $(".iconDevelopment").hide();
    })
    $("#developmentDescription").click(function(){
        $(".iconDevelopment").toggle();
        $("#developmentDescription").hide();
    })
    $(".iconManagement").click(function(){
        $("#managementDescription").toggle();
        $(".iconManagement").hide();
    })
    $("#managementDescription").click(function(){
        $(".iconManagement").toggle();
        $("#managementDescription").hide();
    })
    $("#work1").hover(function(){
        $("#workname1").show();
    }, function(){
        $("#workname1").hide();
    })
    $("#work2").hover(function(){
        $("#workname2").show();
    }, function(){
        $("#workname2").hide();
    })
    $("#work3").hover(function(){
        $("#workname3").show();
    }, function(){
        $("#workname3").hide();
    })
    $("#work4").hover(function(){
        $("#workname4").show();
    }, function(){
        $("#workname4").hide();
    })
    $("#work5").hover(function(){
        $("#workname5").show();
    }, function(){
        $("#workname5").hide();
    })
    $("#work6").hover(function(){
        $("#workname6").show();
    }, function(){
        $("#workname6").hide();
    })
    $("#work7").hover(function(){
        $("#workname7").show();
    }, function(){
        $("#workname7").hide();
    })
    $("#work8").hover(function(){
        $("#workname8").show();
    }, function(){
        $("#workname8").hide();
    })
        
});

var myFunction= function(){
    var username= document.getElementById("name");
    var email=document.getElementById("email");
    var message=document.getElementById("message");

    if(username.value==="" || username.value===null) {
        return false;
    } else if (email.value==="" || email.value===null){
        return false;
    } else if (message.value==="" || message.value===null){
        return false;
    } else {
        alert("Your message has been received. Thank you for visiting us "+ username.value);
    };

};