//JSON
const person={
    name:'Abdul',
    age:25
};
// console.log(JSON.stringify(person))
//JSON convert back and forth
const data=(JSON.stringify(person))
const dataParsed=JSON.parse(data);
console.log(dataParsed.name);


//API fetch
// fetch('url')
// .then(res=>res.json())
// .then(data=>console.log(data));