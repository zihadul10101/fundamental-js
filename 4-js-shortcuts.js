const money=150;
let food;

if(money>100){
    food='biryani';
}else{
    food='alur vorta';
}
//ternary
// codition ? true value : false value
let food = money>100 ? 'biryani' : 'alur vorta';

let active =true;
if(active ===true){
    cssClass='active';
}else{
    cssClass='inactive';
}
const cssClass2=active ? 'active' :'inactive';
// function call shortcut alternative
active ? displayUser() : hideUser();

//one function callshortcut  
const x=active && 5 ;     //if active=true
const y=active || 5;       // if active=false
//console.log(x);

//string to number
const number= +'45';
console.log(number);

//number to string
const numtext=45 +'';
console.log(numtext);

//default parameter
function add(num1,num2){
    //num2=num2 || 5;
    return num1+num2;
}
add(45,10);

