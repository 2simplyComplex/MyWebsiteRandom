let Ccell = "E";
let Dcell;
let Ecell = 0;
let binrow = 0;
let bincol = 0;
let bingoWin = true;
let bingoThing = 0;
let currentPhrase="Hello world!";
let bingoBalls = [0];
let bingoCells = [["B1",'B2','B3','B4','B5'],['I1','I2','I3','I4','I5'],['N1','N2','N3','N4','N5'],['G1','G2','G3','G4','G5'],['O1','O2','O3','O4','O5']]
let bingoGrid = [[1,1,1,1,1],[1,1,1,1,1],[1,1,1,1,1],[1,1,1,1,1],[1,1,1,1,1]];
let winner = [0,0,0,0,0];
let winnerr = [0,0,0,0,0];
let bingoCounter=null;

function setBingoBoard(){
let bingoNumber=3;
console.log(bingoCells[1].length);
for(let bin=0;bin<5;bin++){
for(let binn=0;binn<5;binn++){
let setBin = true;
bingoNumber=Math.floor((Math.random()*15+15*bin))+1;
console.log(bingoNumber);

for(let binCheck=0;binCheck<binn;binCheck++){
if(bingoGrid[bin][binCheck]===bingoNumber){
console.log("redo");
binn-=1;
setBin=false;
break;
}
}

if(setBin === true){
document.getElementById(bingoCells[bin][binn]).innerText=bingoNumber;
bingoGrid[bin][binn]=bingoNumber;
}
}
}
}
const cool=21;

function bingostart(){

if(bingoWin===true){

bingoWin=false;
for(let ccc = 0;ccc<=4;ccc++){
for(let bbb = 0;bbb<=4;bbb++){
let bth=bingoCells[ccc][bbb];
document.getElementById(bth).className='e';
}
}
document.getElementById("mememe").innerText=0;
setBingoBoard();
bingoBalls=[0];
winner = [0,0,0,0,0];
winnerr = [0,0,0,0,0];
document.getElementById("wintag").style.visibility="hidden";
bingoCounter=setInterval(numberChooser, 3500);
}
}

function numberChooser(){
let goodd = false;
if(bingoBalls.length===76){
goodd = true;
}
while(goodd ===false){
let newNumber = Math.floor(Math.random()*75);
console.log(newNumber);
if(bingoBalls.includes(newNumber)!==true){
bingoBalls.push(newNumber);
goodd=true;
}
document.getElementById("mememe").innerText=bingoBalls;
}
let bango=bingoBalls.length;
if(bango>5){
let bingoBa=bango-5;
let binga=[bingoBalls[bingoBa],bingoBalls[bingoBa+1],bingoBalls[bingoBa+2],bingoBalls[bingoBa+3],bingoBalls[bango-1]];
console.log(binga);
document.getElementById("mememe").innerText=binga;
}
console.log(cool);
}

function checkBingo(Bcell) {
Ccell = Bcell.id.charAt(0);
switch(Ccell){
case("B"):
console.log("It is B");
binrow = 0;
break;
case("I"):
console.log("It is I");
binrow = 1;
break;
case("N"):
console.log("It is N");
binrow = 2;
break;
case("G"):
console.log("It is G");
binrow = 3;
break;
case("O"):
console.log("It is O");
binrow = 4;
break;
default:
console.log('invalid');
break;	
}
Dcell = Bcell.id.charAt(1);
Ecell = Number.parseFloat(Dcell);
switch(Ecell){
case(1):
console.log("It is 1");
bincol = 0;
break;
case(2):
console.log("It is 2");
bincol = 1;
break;
case(3):
console.log("It is 3");
bincol = 2;
break;
case(4):
console.log("It is 4");
bincol = 3;
break;
case(5):
console.log("It is 5");
bincol = 4;
break;
default:
console.log('invalid');
break;	
}
console.log(binrow);
console.log(bincol);
console.log(bingoGrid[binrow][bincol]);
bingoThing = bingoGrid[binrow][bincol];
let result = bingoBalls.includes(bingoThing);
console.log(result);
if(result===true){
Bcell.className='circle';
bingoGrid[binrow][bincol] = 0;
}
console.log(Bcell.innerText);
console.log(bingoGrid);
}

function checkWin(){
console.log("snakes");
let brain=0;
let mind=0;
for(brain=0;brain<5;brain++){
for(mind=0;mind<5;mind++){
console.log("wow");
if(bingoGrid[brain][mind]===0){
winner[brain]+=1;
winnerr[mind]+=1;
console.log("win");
}
}
}
console.log(winner);
console.log(winnerr);
if(winner.includes(5)===true){
bingoWin=true;
}else if(winnerr.includes(5)===true){
bingoWin=true;
}else{
bingoWin=false;
console.log('no');
winner=[0,0,0,0,0];
winnerr=[0,0,0,0,0];
}
if(bingoWin===true){
console.log('yes');
document.getElementById("wintag").style.visibility="visible";
clearInterval(bingoCounter);
}
}
