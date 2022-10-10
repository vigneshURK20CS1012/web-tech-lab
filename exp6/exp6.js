var timer= null

function change(color)
{
    var bg=document.getElementById('bgcolor').value;
    document.getElementById('resultbox').style.backgroundColor=bg;
    var tc=document.getElementById('tcolor').value;
    document.getElementById('resultbox').style.color=tc;
    var ts=document.getElementById('tsize').value;
    document.getElementById('resultbox').style.fontSize=ts+'px';
    var bw=document.getElementById('bwidth').value;
    document.getElementById('resultbox').style.width=bw+'px';
    var bh=document.getElementById('bheight').value;
    document.getElementById('resultbox').style.height=bh+'px';
    var rad=document.getElementById('radius').value;
    document.getElementById('resultbox').style.borderRadius=rad+'%';
}

var car =null;
var timer=null;
function init(){
    car=document.getElementById('car');
    car.style.position='relative';
    car.style.left='2px';
    clearTimeout(timer);
    document.getElementById("Dangerbox").innerHTML='';
    

}
function move(){
    car.style.left=parseInt(car.style.left)+100+"px";
    timer=setTimeout(move,300);
    if( parseInt(car.style.left) >= 1300 )
    {
        stop();
        document.getElementById("Dangerbox").innerHTML='<div id ="danger" style="border:1px solid red; background-color: red; color: white ; position: absolute; right: 100px; bottom: 500px; width: 150px; height: 100px;" >DANGER</div>'
    }
}
function stop(){
    clearTimeout(timer);

}

