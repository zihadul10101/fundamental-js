//01. variable:let,const
let money=20;     //change able
money=10;
const name='Zihad'; //fixed

let isConfident=false;

const person={
    name:'Zihad',
    age:22,
    city:'Dhaka'
}

const statement =`
this person ${name} with age${age}
`

//02.condition
if(money>0 && age>=45){

}
else{

}

//03.Array

const numbers=[34,23,65];
const friend=['jashim','eto','sayed'];
const products=[{name:'laptop',price:'500'},{name:'monil',price:300},{name:'watch',price:100}];

//04.loop: for loop
for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];    
}
//05.function: regular ,,,,arrow
//a:regular
function add (num1,num2){
    return num1+num2;
}
const result=add(45,50);

//b.arrow
const add2=(num1,num2)=>num1+num2;

const fiveTimes=num=>num*5;

const doMath=(x,y)=>{
const sum=x+y;
return sum*2;
}
