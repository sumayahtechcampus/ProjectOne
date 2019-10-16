function playAgin() {
    $(".container .game div div").children("img").remove();
    $(" .game div div").css("cursor", "pointer");
    $(" .container ").css("cursor", "unset");

}

$(function() {
    var player = "x";

$(".game div div ").click(function(){
    
    {
        if ($(".container").css("cursor")==="not-allowed"){

            alert("The game is Over ");
        } else {
            if ($(this).children('img').length === 0)
    
if (player === "x"){

    $(this).append("<img class ='x' src='xx.png' width='"+$(this).css("width")+"' height='"+$(this).css("height")+"' >");
    player = "o";

    if( $(".game div div.top-left, .game div div.top-center, .game div div.top-right").children(".x").length === 3){
        alert("player x won !!");
        $(".container, .game div div").css("cursor", "not-allowed");


    } else if( $(".game div div.second-left, .game div div.second-center, .game div div.second-right").children(".x").length === 3){
        alert("player x won !!");
        $(".container, .game div div").css("cursor", "not-allowed");


    } else if( $(".game div div.third-left, .game div div.third-center, .game div div.third-right").children(".x").length === 3){
        alert("player x won !!");
        $(".container, .game div div").css("cursor", "not-allowed");


    }else if( $(".game div div.top-left, .game div div.second-left, .game div div.third-left").children(".x").length === 3){
        alert("player x won !!");
        $(".container, .game div div").css("cursor", "not-allowed");


    } else if( $(".game div div.top-center, .game div div.second-center, .game div div.third-center").children(".x").length === 3){
        alert("player x won !!");
        $(".container, .game div div").css("cursor", "not-allowed");


    } else if( $(".game div div.top-right, .game div div.second-right, .game div div.third-right").children(".x").length === 3){
        alert("player x won !!");
        $(".container, .game div div").css("cursor", "not-allowed");

    } 
    else if( $(".game div div.top-left, .game div div.second-center, .game div div.third-right").children(".x").length === 3){
        alert("player x won !!");
        $(".container, .game div div").css("cursor", "not-allowed");

    }
    else if( $(".game div div.top-right, .game div div.second-center, .game div div.third-left").children(".x").length === 3){
        alert("player x won !!");
        $(".container, .game div div").css("cursor", "not-allowed");

    }


} else{
    $(this).append("<img class='o' src='o.png' width='"+$(this).css("width")+"' height='"+$(this).css("height")+"'>");
    player = "x";

    if( $(".game div div.top-left, .game div div.top-center, .game div div.top-right").children(".o").length === 3){
        alert("player o won !!");
        $(".container, .game div div").css("cursor", "not-allowed");

    } else if( $(".game div div.second-left, .game div div.second-center, .game div div.second-right").children(".o").length === 3){
        alert("player o won !!");
        $(".container, .game div div").css("cursor", "not-allowed");

    } else if( $(".game div div.third-left, .game div div.third-center, .game div div.third-right").children(".o").length === 3){
        alert("player o won !!");
        $(".container, .game div div").css("cursor", "not-allowed");

    }else if( $(".game div div.top-left, .game div div.second-left, .game div div.third-left").children(".o").length === 3){
        alert("player o won !!");
        $(".container, .game div div").css("cursor", "not-allowed");

    } else if( $(".game div div.top-center, .game div div.second-center, .game div div.third-center").children(".o").length === 3){
        alert("player o won !!");
        $(".container, .game div div").css("cursor", "not-allowed");

    } else if( $(".game div div.top-right, .game div div.second-right, .game div div.third-right").children(".o").length === 3){
        alert("player o won !!");
        $(".container, .game div div").css("cursor", "not-allowed");

    } 
    else if( $(".game div div.top-left, .game div div.second-center, .game div div.third-right").children(".o").length === 3){
        alert("player o won !!");
        $(".container, .game div div").css("cursor", "not-allowed");

    } 
    else if( $(".game div div.top-right, .game div div.second-center, .game div div.third-left").children(".o").length === 3){
        alert("player o  won !!");
        $(".container, .game div div").css("cursor", "not-allowed");
    }

}
}


}
  
});
$(".pAgin").click(function(){

    playAgin();

});


});
