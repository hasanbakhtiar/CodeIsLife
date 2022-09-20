// var ol  = document.querySelector('ul');
// var countStart = 0;
// var countEnd = 50;
// for(let q = 0; q<5;q++){
//     document.querySelectorAll('button')[q].onclick=()=>{
//         countStart+=50;
//         countEnd+=50;
//         countryList();
//     }
// }
// var countryList =()=>{
//     fetch('https://restcountries.com/v3.1/all')
//     .then((res)=>res.json())
//     .then((data)=>{
//         let li = "";
//         for(let x = countStart; x<countEnd;x++){
//              li+= `<li><span>${x+1}-</span>${data[x].name.common}</li>`
//         }
//         ol.innerHTML = li;
//     })
// }
// countryList();



// ============================================================================
var ol  = document.querySelector('ul');
var countStart = 0;
var countEnd = 50;
var countryList =()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then((res)=>res.json())
    .then((data)=>{
        let li = "";
        for(let x = countStart; x<countEnd;x++){
             li+= `<li><span>${x+1}-</span>${data[x].name.common}</li>`
        }
        ol.innerHTML = li;
    })
}
document.querySelectorAll('button')[0].onclick=()=>{
    countStart=0;
    countEnd=50;
    countryList();
}
document.querySelectorAll('button')[1].onclick=()=>{
    countStart=50;
    countEnd=100;
    countryList();
}
document.querySelectorAll('button')[2].onclick=()=>{
    countStart=100;
    countEnd=150;
    countryList();
}
document.querySelectorAll('button')[3].onclick=()=>{
    countStart=150;
    countEnd=200;
    countryList();
}
document.querySelectorAll('button')[4].onclick=()=>{
    countStart=200;
    countEnd=250;
    countryList();
}
countryList();
