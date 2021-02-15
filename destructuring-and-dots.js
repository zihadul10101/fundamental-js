//array destructuring
const numbers=[54,92,100,587,4];
//const x=numbers[0];
//const y=numbers[1];
//const [x,y]=[54,92];
const [x,y]=numbers;
//console.log(x,y);

function boxif(num1){
    return [num1,num1+5];
}
// const boxed=boxif(8);
const [box1,box2]=boxif(8);
console.log(box1,box2);



//object destructuring
const person={id:2,mony:34,name:'Rahim',age:25};
const {name,age,id}=person;
console.log(name,age);
console.log(name,age);
console.log(name,age);


//creat object shortcut
const one=25;
const two=35;
const obj={one,two}
console.log(obj);


//new array using three dots
const newNumbers=[...numbers,56];
console.log(newNumbers);