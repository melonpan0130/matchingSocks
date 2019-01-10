window.onload = init;

var canvas;
var ctx;
var myimages = []; //양말 이미지
var thingInMotion; //마우스 다운 대상 -> 드래그 하려고 하는 대상


 
function init() {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");}
    //이미지 겹쳐지면 제거 

    //이미지짝 한번 맞출때마다 10점 카운트

    //이미지 랜덤
    for(var i=0;i<16;i++) {
        //alert(i);
        var j = num[i];
        alert(j);
        ctx.drawImage(r2[i], place[j][0], place[j][1], wi, he);
       // alert(i+1);
    }*   
   
// 양말쨕이 맞아서 카운터에 들어갈떄마다 춤사진 변환 if잘못 겹치면  노래 끝나며 엔딩 사진 

/*function dan(e){
{
var dnaimg = new Array();
dnaimg[0] = "춤1.png";
dnaimg[1] = "춤2.png";
dnaimg[2] = "춤3.png";
dnaimg[3] = "춤4.png";
dnaimg[4] = "춤5.png";
dnaimg[5] = "춤6.png";
dnaimg[6] = "춤7.png";

var ry = Math.floor( Math.random() * (dnaimg.length-1) );
document.write('<img src="' + dnaimg[ry] + '" border=0>');
}

dan();*/

//3분 38초 동안 300넘으면 성공 엔딩 
//마우스 이벤트 드래그

function mos(){
    this.overCheck = function overRect(mx, my) {//마우스이벤트할 예정
          if((this.x <= mx && mx <= this.x+this.width) && (this.y <= my && my <= this.y + this.height)) { //this는 중요하다
              //마우스가 나를 선택함
              return true;
          } else {
              return false;
          }
      }
  
      this.overCheck = function overCircle(mx,my) {
          //(x,y)에서 마우스 지점까지의 거리
  
          var x1 = this.x;
          var y1 = this.y;
          var x2 = mx;
          var y2 = my;
  
          if(((x2-x1)*(x2-x1))+((y2-y1)*(y2-y1)) <= (this.r * this.r)) {
              return true;
          } else {
              return false;
          }
      }
  }//fu
  
  function startDrag(e) {
      mx = e.offsetX;
      my = e.offsetY;
  
      for(var i = 0; i <myimages.length; i++) {
          if(stuff[i].overCheck(mx, my) == true) {
              //일정한 간격 유지 -> 오프셋 저장 (끈끈이 효과)
              diffx = mx-myimages[i].x;
              diffy = my-myimages[i].y;
              //누구를 moveit할지 moveit함수한테 알려줘!
             
              var item = myimages[i];
              thingInMotion = myimages.length-1;
  
              myimages.splice(i,1);
              myimages.push(item);
  
              //mousemove => 따라가기
              canvas.addEventListener("mousemove", moveit, false);
              //mouseup => 도형은 캔버스에 떨어져라!!!!
              canvas.addEventListener("mouseup", dropit, false);
          }
      }
  }
  
  function moveit(e) {
      mx = e.offsetX;
      my = e.offsetY;
  
      myimages[thingInMotion].x = mx - diffx;
      myimages[thingInMotion].y = my - diffy;
  
      drawStuff();
  }
  
  function dropit(e) {
      canvas.removeEventListener("mousemove", moveit, false); //이벤트 제거
      canvas.removeEventListener("mouseup", dropit, false); //이벤트 제거
  }
  
  
  