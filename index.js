function showAbout(){
    $("#About_container").css("display","inherit");
    $("#About_container").addClass("animated slideInLeft");
    setTimeout(function(){
        $("#About_container").removeClass("animated slideInLeft");
    },800);
}
function closeAbout(){
    $("#About_container").addClass("animated slideOutLeft");
    setTimeout(function(){
        $("#About_container").removeClass("animated slideOutLeft");
        $("#About_container").css("display","none");
    },800);
}
function showProjects(){
    $("#Projects_container").css("display","inherit");
    $("#Projects_container").addClass("animated slideInRight");
    setTimeout(function(){
        $("#Projects_container").removeClass("animated slideInRight");
    },800);
}
function closeProjects(){
    $("#Projects_container").addClass("animated slideOutRight");
    setTimeout(function(){
        $("#Projects_container").removeClass("animated slideOutRight");
        $("#Projects_container").css("display","none");
    },800);
}
function showContact(){
    $("#Contact_container").css("display","inherit");
    $("#Contact_container").addClass("animated slideInUp");
    setTimeout(function(){
        $("#Contact_container").removeClass("animated slideInUp");
    },800);
}
function closeContact(){
    $("#Contact_container").addClass("animated slideOutDown");
    setTimeout(function(){
        $("#Contact_container").removeClass("animated slideOutDown");
        $("#Contact_container").css("display","none");
    },800);
}
setTimeout(function(){
    $("#loading").addClass("animated fadeOut");
    setTimeout(function(){
    $("#loading").removeClass("animated fadeOut");
    $("#loading").css("display","none");
    $("#box").css("display","none");
    $("#About").removeClass("animated fadeIn");
    $("#Contact").removeClass("animated fadeIn");
    $("#Projects").removeClass("animated fadeIn");
    },1000);
},1500);
