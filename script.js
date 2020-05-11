$(".yes-button").click(function() {
    $(".Part-Two-Yes").show();
    $(".openingImages").hide();
    $(".button").hide();
    $(".opening").hide();
    $(".Part-Two-No").hide();
    $(".ClimaxYes").hide();
    $(".ClimaxNo").hide();
    $(".Story-Ending-No").hide();
    $(".Story-Ending-Yes").hide();
});
$(".LebronBlock").dblclick(function() {
    $(".Part-Two-Yes").fadeOut();
    $(".openingImages").hide();
    $(".button").hide();
    $(".opening").hide();
    $(".Part-Two-No").hide();
    $(".ClimaxYes").show();
    $(".ClimaxNo").hide();
    $(".Story-Ending-No").hide();
    $(".Story-Ending-Yes").hide();
});

$(".circleRim1").click(function() {
    $(".Part-Two-Yes").hide();
    $(".openingImages").hide();
    $(".button").hide();
    $(".opening").hide();
    $(".Part-Two-No").hide();
    $(".ClimaxYes").slideUp();
    $(".ClimaxNo").hide();
    $(".Story-Ending-No").hide();
    $(".Story-Ending-Yes").fadeIn();
});


$(".no-button").click(function() {
    $(".openingImages").hide();
    $(".button").hide();
    $(".opening").hide();
    $(".Part-Two-No").show();
});

$(".LebronShot").hover(function() {
    $(".Part-Two-No").fadeOut();
    $(".openingImages").hide();
    $(".button").hide();
    $(".opening").hide();
    $(".ClimaxNo").show();
});

$(".circleRim2").dblclick(function() {
    $(".Part-Two-Yes").fadeOut();
    $(".openingImages").hide();
    $(".button").hide();
    $(".opening").hide();
    $(".ClimaxNo").hide();
    $(".Story-Ending-No").show();
});