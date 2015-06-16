$(function() {
    setStar();
    setYear();
    setSemester();
     
    $("#eval form").submit(function(){
        var retVal = confirm("이대로 평가하시겠습니까?");
        $("#eval").css({
            display: 'none'
        });
        if(retVal == true)  return true;
        else  return false;
    });
});

function setStar(){
    $(".grade_star").raty({
        starOff  : "images/star-off.png",
        starOn   : "images/star-on.png",
        hints: ["bad","poor","regular","good","gorgeous"],
        click: function(score, evt) {
          console.log("grade score: "+score);
          $("input[name=grade]").val(score);
        }
    });
    $(".interest_star").raty({
        starOff  : "images/star-off.png",
        starOn   : "images/star-on.png",
        hints: ["bad","poor","regular","good","gorgeous"],
        click: function(score, evt) {
          console.log("interesting score: "+score);
          $("input[name=interesting]").val(score);
        }
    });
    $(".benefit_star").raty({
        starOff  : "images/star-off.png",
        starOn   : "images/star-on.png",
        hints: ["bad","poor","regular","good","gorgeous"],
        click: function(score, evt) {
          console.log("benefit score: "+score);
          $("input[name=benefit]").val(score);
        }
    });
    $(".assign_star").raty({
        starOff  : "images/star-off.png",
        starOn   : "images/star-on.png",
        hints: ["a lot less","less","regular","many","too many"],
        click: function(score, evt) {
          console.log("assignment score: "+score);
          $("input[name=assignment]").val(score);
        }
    });
    $(".teamprj_star").raty({
        starOff  : "images/star-off.png",
        starOn   : "images/star-on.png",
        hints: ["a lot less","less","regular","many","too many"],
        click: function(score, evt) {
          console.log("teamproject score: "+score);
          $("input[name=teamproject]").val(score);
        }
    });
    $(".difficult_star").raty({
        starOff  : "images/star-off.png",
        starOn   : "images/star-on.png",
        hints: ["too easy","easy","regular","difficult","very difficult"],
        click: function(score, evt) {
          console.log("difficulty score: "+score);
          $("input[name=difficulty]").val(score);
        }
    });
}

function setYear(){
    var current = new Date();
    var year = current.getFullYear();

    for(var i=2000; i<=year; i++)
       $(".year").prepend("<option value='"+i+"'>"+i+"</option>");
    $(".year").prepend("<option value=''>연도 선택</option>");
}

function setSemester(){
    $(".semester").append("<option value=''>학기 선택</option>");
    $(".semester").append("<option value=1>1학기</option>");
    $(".semester").append("<option value=2>2학기</option>");
}

function getYear(){
    return $(".year option:selected").val();
}

function getSemester(){
    return $(".semester option:selected").val();
}

function getComment(){
    return $(".comment").val();
}