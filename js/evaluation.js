$(function() {
  setStar();
  setYear();
  setSemester();
});

function setStar(){
  $('.grade_star').raty({
      starOff  : '../images/star-off.png',
      starOn   : '../images/star-on.png',
      hints: ['bad','poor','regular','good','gorgeous'],
      click: function(score, evt) {
        console.log('grade score: '+score);
      }
    });
    $('.interest_star').raty({
      starOff  : '../images/star-off.png',
      starOn   : '../images/star-on.png',
      hints: ['bad','poor','regular','good','gorgeous'],
      click: function(score, evt) {
        console.log('interesting score: '+score);
      }
    });
    $('.benefit_star').raty({
      starOff  : '../images/star-off.png',
      starOn   : '../images/star-on.png',
      hints: ['bad','poor','regular','good','gorgeous'],
      click: function(score, evt) {
        console.log('benefit score: '+score);
      }
    });
    $('.assign_star').raty({
      starOff  : '../images/star-off.png',
      starOn   : '../images/star-on.png',
      hints: ['a lot less','less','regular','many','too many'],
      click: function(score, evt) {
        console.log('assigment score: '+score);
      }
    });
    $('.teamprj_star').raty({
      starOff  : '../images/star-off.png',
      starOn   : '../images/star-on.png',
      hints: ['a lot less','less','regular','many','too many'],
      click: function(score, evt) {
        console.log('teamproject score: '+score);
      }
    });
    $('.difficult_star').raty({
      starOff  : '../images/star-off.png',
      starOn   : '../images/star-on.png',
      hints: ['too easy','easy','regular','difficult','very difficult'],
      click: function(score, evt) {
        console.log('difficulty score: '+score);
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

// 코멘트 가져오기
function getComment(){

}