let hour = 0;
let min = 0;
let sec = 0; 

let clicking = 0;

let timer = false;
let stopval = false;

let trial = document.getElementById("stop");

document.getElementById("reset").addEventListener('click',resetbutton);
document.getElementById("stop").addEventListener('click',stop);
document.getElementById("start").addEventListener('click',start);


function start(){
    timer = true;
    stopwatch();
    stopval = true;
    stoponly();
    clicking = 1
}

function stop(){
    timer = false;
    document.getElementById("start").classList.remove("disabled"); 
}

function resetbutton(){
    timer = false;
    hour = 0;
    min = 0;
    sec = 0;
    document.getElementById("secid").innerHTML = "0" + sec
    document.getElementById("minid").innerHTML = "0" + min + "."
    document.getElementById("hourid").innerHTML = "0"+hour + "."
    trial.classList.add("disabled");
    document.getElementById("start").classList.remove("disabled");
}


function stoponly(){
    if(stopval==true){
        trial.classList.remove("disabled");
    }
}

function stopwatch(){
    if(timer==true){

        document.getElementById("start").classList.add("disabled");

        if(sec==60){
            sec = 0
            min = min + 1
        }

        if(min==60){
            sec = 0
            min = 0
            hour = hour + 1
        }

        sec = sec + 1;

        if(sec>=0 && sec<=9){
            document.getElementById("secid").innerHTML = "0" + sec
        }

        else{
            document.getElementById("secid").innerHTML = sec    
        }

        if(min>=0 && min<=9){
            document.getElementById("minid").innerHTML = "0" + min + "."
        }

        else{
            document.getElementById("minid").innerHTML = sec    
        }

        if(min>=0 && min<=9){
        document.getElementById("hourid").innerHTML = "0"+hour + "."
        }
        else{
            document.getElementById("hourid").innerHTML = hour + "."
        }
    
        setTimeout("stopwatch()",1000)
    }
}