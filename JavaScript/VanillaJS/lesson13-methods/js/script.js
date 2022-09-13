li// const info = ['table','book','pen'];
// info.pop();
// info.push('new value')
// info.shift();
// info.unshift('new value');

// const numbInfo = 5.234;
// console.log(numbInfo.toExponential(1));

// const numbInfo = 5.2346;
// console.log(numbInfo.toFixed(10));

// const numbInfo = 5.1234;
// console.log(parseInt(numbInfo));
// console.log(parseFloat(numbInfo));
// console.log(Math.round(numbInfo));
// console.log(Math.ceil(numbInfo));
// console.log(Math.floor(numbInfo));
// console.log(Math.sign(numbInfo));
// console.log(Math.pow(numbInfo,3));
// console.log(Math.sqrt(numbInfo));
// console.log(Math.abs(numbInfo));
// console.log(Math.min(0, 150, 30, 20, -8, -200));
// console.log(Math.floor(Math.random() * 100+1));
// Not a Number
// isNaN

// const h1 = document.querySelector("h1");

// // const txt = '{"name":"Ismayil","age":"21"}';
// // const data = JSON.parse(txt);
// // h1.innerHTML = data.name;

// // const obj = {name: "John", age: 30, city: "New York"};
// // const myJSON = JSON.stringify(obj);
// // h1.innerHTML = myJSON;

// const info = [
//   {
//     brand: "BMW",
//     color: "red",
//   },
//   {
//     brand: "Mercedes",
//     color: "blue",
//   },
// ];

// console.log(info.map((a) => a.color));
// fetch("https://restcountries.com/v3.1/all")
//   .then((res) => res.json())
//   // .then((data)=>console.log(data.map((a)=>(
//   //      a.name.common

//   // ))))
//   .then((data) => {
//     let infodata = data.map((a) => `<p>${a.name.common}</p>`);
//     // for(x of infodata){
//     //     h1.innerHTML = x;
//     // }
//   });


const li = document.createElement('li');
const a = `<li>Hello</li>`;
localStorage.setItem('set',a);
const infoArr = ['table','book','pen'];
const arrJSON = JSON.stringify(infoArr);
localStorage.setItem('arr',arrJSON)
const parJSON = JSON.parse(localStorage.getItem('arr'));
for( x in parJSON){
const b = `<li>${parJSON[x]}</li>`
document.querySelector("ul").innerHTML = b;
}


