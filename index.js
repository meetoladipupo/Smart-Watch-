let blackC = document.getElementById('black')
let redC = document.getElementById('red')
let blueC = document.getElementById('blue')
let purpleC = document.getElementById('purple')
let pinkC = document.getElementById('pink')
let bgim = document.getElementById('bgm');
let clock = document.getElementById('clock')
let clockText = document.getElementById('clocktext');
let heartBeat = document.getElementById('heartbeat');
let heartbtn = document.getElementById('heartrate');
let currentdate = new Date();



blackC.addEventListener('click', function(){
    bgm.src="/images/black.jpg"
    
});

redC.addEventListener('click', function(){
    bgm.src="/images/red.jpg"
    
});

blueC.addEventListener('click', function(){
    bgm.src="/images/blue.jpg"
    
});

purpleC.addEventListener('click', function(){
    bgm.src="/images/purple.jpg"
    
});

pinkC.addEventListener('click', function(){
    bgm.src="/images/pink.jpg"
    
});


clock.addEventListener('click',function myTimer(){
  let currentDate = new Date();
  let displayTime = currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();

  clockText.innerHTML = displayTime;

});

clockText.innerHTML = "<img src = \"images/heartrate.jpg\" width =\"50px\" height = \"50px\" class=\"animated-img hmg\">" +
                       "<div class=\"number-text\">120</div>";

heartbtn.addEventListener("click",function(){
   
    clockText.innerHTML = "<img src = \"images/heartrate.jpg\" width =\"50px\" height = \"50px\" class=\"animated-img\">" +
                       "<div class=\"number-text\">120</div>";
})


