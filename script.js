function print() {
    var clutter = "";
for(var i=0; i<114;i++) {
    var j = Math.floor(Math.random()*10);
     clutter+=`<div class="circle">
                              <h2>${j}</h2>
                   </div>`
}
document.querySelector("#box-circle").innerHTML = clutter;
}
print();


var hit = document.querySelector("#hit_no")
hit.innerHTML = Math.floor(Math.random() * 10)


var box = document.querySelector("#box");
var score = document.querySelector("#score_no");
var win = document.querySelector("#win");
var score1 = 0;


box.addEventListener("click",function (dets) {
    // console.log(dets.target.innerHTML)
    if (dets.target.innerHTML === hit.innerHTML) {
        print();
        hit.innerHTML = Math.floor(Math.random() * 10)
        score1 += 10;
        score.innerHTML = score1;
        if(score1===100)
        {
               win.style.top=0;
               winscore.innerHTML=score1;
        }
        
    }
    
    else {        
        hit.innerHTML = Math.floor(Math.random() * 10)
        print();
    score1 -=10;
    score.innerHTML = score1;
    }  
})


//time
var clear;
function timer() {
    var time = 60;
clear = setInterval(function () {
    if(time<=0){
        time = 60
    }
     document.querySelector("#timer_no").innerHTML = time - 1
        time = time - 1
}, 1000)
}


//start-btn
var startbtn = document.querySelector("#start-btn").addEventListener("click", function () {
    document.querySelector("#start").style.top = "-100%"
    document.querySelector("#start").style.transition = "top 0.8s ease";
    timer();
})




//win
var win = document.querySelector("#win");
var winscore = document.querySelector("#win-score");

//score 
document.querySelector("#start_again").addEventListener("click", function () {
    win.style.top = "-100%";
    clearTimeout(clear);
    timer();
    win.style.transition = "top 2s ease"
})