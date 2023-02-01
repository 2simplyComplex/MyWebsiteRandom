let allMoney=0;
let money = 0;
//interval timers
let inter=0;let intervalC=0;let intervalM=0;let intervalK=0;let intervalE=0;
//stuff
let cursors=0;let mouse=0;let keyboard=0;let laptop=0;let rebirth=0;let urebirth=0;
//default cost
const Cost=15;const Cost2=100;const Cost3=1000;const Cost4=10000;const R1=5000000;const R2=10;
//variable cost
let CursorCost=15;let MouseCost=100;let KeyboardCost=1000;let LaptopCost=10000;let RebirthCost=5000000;let UrebirthCost=10;
//upgrade stuff
const ucost1=100;const ucost2=1000;const ucost3=11000;const ucost4=50000;const ucost5=10000;
let upgrade1=1;let upgrade2=1;let upgrade3=1;let upgrade4=1;let upgrade5=1;
let U1Cost=100;let U2Cost=1000;let U3Cost=11000;let U4Cost=50000;let U5Cost=800;
//click per second values
let cps=0;let partcps1=0;let partcps2=0;let partcps3=0;let partcps4=0;

let colorNum=0;
//change price
const AddPrice=6;
function autoEarn(Add,typebuild){
if(typebuild=="cursor"){
Add*=upgrade1;
}
if(typebuild=="mouse"){
Add*=upgrade2;
}
if(typebuild=="keyboard"){
Add*=upgrade3;
}
if(typebuild=="laptop"){
Add*=upgrade4;
}
money+=Add;
allMoney+=Add;
updateMoney(money);
}
function clickEarn(){
//allColor();
let someMoney=1;
if(upgrade5!==1){
someMoney=someMoney+(cps*(upgrade5-1));
}
someMoney*=(rebirth+1);
docTextchange("clickMoney",someMoney , true, false);
money+=someMoney;
allMoney+=someMoney;
updateMoney(money);
}

function updateMoney(mooney){
partcps1 =(cursors*((rebirth/10)+1)/10);
partcps2 =mouse*((rebirth/10)+1);
partcps3 =keyboard*15*((rebirth/10)+1);
partcps4 =laptop*200*((rebirth/10)+1);
partcps1*=upgrade1;
partcps2*=upgrade2;
partcps3*=upgrade3;
partcps4*=upgrade4;
cps=(partcps1)+(partcps2)+(partcps3)+(partcps4);
docTextchange("moneyDisplay", mooney, true, true);
docTextchange("allMoneyDisplay",allMoney,true,false);
docTextchange("CPS",cps, true);
}

//building section
function cursorAdd(){
if(money>=(CursorCost)*buyam){
money-=(CursorCost)*buyam;
cursors+=1*buyam;
CursorCost+=(cursors*AddPrice);
clearInterval(intervalC);
intervalC = setInterval(autoEarn,1000,cursors*((rebirth/10)+1)/10,"cursor"); 
}
docTextchange("cursorCost",CursorCost*buyam,true,true);
docTextchange("cursorCount",cursors,false,false);
docTextchange("moneyDisplay",money,false);
}

function mouseAdd(){
if(money>=MouseCost*buyam){
money-=(MouseCost)*buyam;
mouse+=1*buyam;
MouseCost+=(mouse*(AddPrice*2));
clearInterval(intervalM);
intervalM = setInterval(autoEarn,1000,mouse*((rebirth/10)+1),"mouse"); 
}
docTextchange("mouseCost",MouseCost*buyam,true,true);
docTextchange("mouseCount",mouse,false,false);
docTextchange("moneyDisplay",money,false);
}

function keyboardAdd(){
if(money>=(KeyboardCost)*buyam){
money-=KeyboardCost*buyam;
keyboard+=1*buyam;
KeyboardCost+=(keyboard*(AddPrice*3));
clearInterval(intervalK);
intervalK = setInterval(autoEarn,1000,keyboard*8*((rebirth/10)+1),"keyboard"); 
}
docTextchange("keyboardCost",KeyboardCost*buyam,true,true);
docTextchange("keyboardCount",keyboard,false,false);
docTextchange("moneyDisplay",money,false);
}

function laptopAdd(){
if(money>=(LaptopCost*buyam)){
money-=LaptopCost*buyam;
laptop+=1*buyam;
LaptopCost+=(laptop*(AddPrice*4))
clearInterval(intervalE);
intervalE = setInterval(autoEarn,1000,laptop*200*((rebirth/10)+1),"laptop"); 
}
docTextchange("laptopCost",LaptopCost*buyam,true,true);
docTextchange("laptopCount",laptop,true,false);
docTextchange("moneyDisplay",money,false);
}


//rebirth section
function rebirthAdd(){
if(money>=RebirthCost*buyam){
money-=RebirthCost*buyam;
rebirth+=1*(urebirth+1)*buyam; 
resets();
}
document.getElementById("rebirthCost").innerText=RebirthCost*buyam;
document.getElementById("rebirthCount").innerText=rebirth;
docTextchange("moneyDisplay",money,false);
}

function urebirthAdd(){
if(rebirth>=UrebirthCost*buyam){
urebirth+=1;
rebirth=0; 
resets();
}
document.getElementById("urebirthCost").innerText=UrebirthCost*buyam;
document.getElementById("urebirthCount").innerText=urebirth;
docTextchange("moneyDisplay",money,false);
}

//reset section
function ultrareset(){
let resetText="are you sure you want to reset all your progress?";
if(confirm(resetText)===true){
rebirth=0;urebirth=0;resets();
}}


function resets(){
clearInterval(intervalM);clearInterval(intervalC);clearInterval(intervalK);clearInterval(intervalE);
mouse=0;cursors=0;keyboard=0;laptop=0;
CursorCost=Cost;MouseCost=Cost2;KeyboardCost=Cost3;LaptopCost=Cost4;
upgrade1=1;upgrade2=1;upgrade3=1;upgrade4=1;upgrade5=1;
U1Cost=ucost1;U2Cost=ucost2;U3Cost=ucost3;U4Cost=ucost4;U5Cost=ucost5;
money=0;
docTextchange("cursorCost",CursorCost*buyam,true,true);docTextchange("cursorCount",cursor,false,false);docTextchange("mouseCost",MouseCost*buyam,true,true);docTextchange("mouseCount",mouse,false,false);docTextchange("keyboardCost",KeyboardCost*buyam,true,true);docTextchange("keyboardCount",keyboard,false,false);docTextchange("laptopCost",LaptopCost*buyam,true,true);docTextchange("laptopCount",laptop,true,false);
console.log("stopped");
}

//upgrades section

function U1buy(){if(money>=U1Cost){money-=U1Cost;upgrade1*=2;U1Cost*=10;}docTextchange("U1Cost",U1Cost,true,true);docTextchange("moneyDisplay",money,false);}
function U2buy(){if(money>=U2Cost){money-=U2Cost;upgrade2*=2;U2Cost*=4;}docTextchange("U2Cost",U2Cost,true,true);docTextchange("moneyDisplay",money,false);}
function U3buy(){if(money>=U3Cost){money-=U3Cost;upgrade3*=2;U3Cost*=3;}docTextchange("U3Cost",U3Cost,true,true);docTextchange("moneyDisplay",money,false);}
function U4buy(){if(money>=U4Cost){money-=U4Cost;upgrade4*=2;U4Cost*=2.1;}docTextchange("U4Cost",U4Cost,true,true);docTextchange("moneyDisplay",money,false);}
function U5buy(){if(money>=U5Cost){money-=U5Cost;upgrade5+=0.00001;U5Cost*=1.05;}docTextchange("U5Cost",U5Cost,true,true);docTextchange("moneyDisplay",money,false);}

//color changer
/*
function allColor(){
let colorNum=Math.floor((100000000-allMoney)/10000);
let colorText=Math.floor((allMoney)/100000);
document.body.style.backgroundColor = "#"+(colorNum).toString(16)+(colorNum).toString(16)+(colorNum).toString(16);
document.body.style.color = "#"+(colorText).toString(16)+(colorText).toString(16)+(colorText).toString(16);
}
*/
function docTextchange(theId, theValue, theRounder,theDollar){if(theRounder===true){theValue=Math.floor(theValue*100)/100;}if(theDollar===true){document.getElementById(theId).innerText="$"+theValue;} else {document.getElementById(theId).innerText=theValue;}}


let buyam=1;const buyall=[1,5,10,50]; 
function buyAmount(){
switch(buyam){case(1):buyam=buyall[1];break;case(5):buyam=buyall[2];break;case(10):buyam=buyall[3];break;case(50):buyam=buyall[0];break;default:break;}
docTextchange('buying' ,buyam, false, false);docTextchange("urebirthCost",UrebirthCost*buyam,false,false);docTextchange("rebirthCost",RebirthCost*buyam,false,false);docTextchange("laptopCost",LaptopCost*buyam,true,true);docTextchange("keyboardCost",KeyboardCost*buyam,true,true);docTextchange("mouseCost",MouseCost*buyam,true,true);docTextchange("cursorCost",CursorCost*buyam,true,true);
}

