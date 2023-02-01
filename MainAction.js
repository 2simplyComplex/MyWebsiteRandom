let phrases = ['hello world?','hELLO wORLD','HeLlO wOrLd','hi world','say hi back','goodbye world','hello','hi','not again','EEEEEE','memes','isn\'t this great','hiii','click 5 times','this','is','not','a','word','This is a story about a guy named Stanley'];
let Pnum = 1;
let currentPhrase="Hello world!";
let Mode=false;
function changeMod(){
if(Mode===false){
document.body.style.backgroundColor = "#444444";
document.head.style.backgroundColor = "#444444";
document.body.style.color = "white";
Mode=true;
}else if(Mode===true){
document.body.style.backgroundColor = "#cccccc";
document.head.style.backgroundColor = "#cccccc";
document.body.style.color = "black";
Mode=false;
}
}

function switchPhrase() {
Pnum = Math.floor(Math.random()*phrases.length);
console.log(Pnum);
currentPhrase=phrases[Pnum];
document.getElementById("hello1").innerText=currentPhrase;
}

function goingplaces() {
Pnum = Math.floor(Math.random()*10);
document.getElementById("anyplace").style.height=Pnum;
}




let shapeChange=true;
function change(){
if(shapeChange===true){
	document.getElementById('circ').className="square";
	shapeChange=false;
}else {
	document.getElementById('circ').className="circle";
	shapeChange=true;
}
}
let turn=0;

function movingText(){
let swidth=Math.floor(Math.random()*1250);
let sheight=Math.floor(Math.random()*550);
document.getElementById("moveText").style.top=sheight;
document.getElementById("moveText").style.right=swidth;
turn+=1;
document.getElementById("moveText").style.transform+="rotate(" + turn + "deg)";
}

function playaudio(musicId){
document.getElementById('dont').play=true;
console.log("playing music");
//document.body.style.visibility="hidden";
//document.header.style.visibility="hidden";
}
