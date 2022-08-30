// Selectors
// ES5
// document.getElementById('mytext').innerHTML = "bye1";
// document.getElementsByClassName('test-text')[0].innerHTML = 'bye2';
// for(let a = 0; a<4; a++){
//     document.getElementsByTagName('p')[a].innerHTML = "bye";
// }

// document.getElementsByTagName('p')[2].attributes[0].value = 'green';

// ES6

// document.querySelector
// document.querySelectorAll

// document.querySelector('#mytext').innerHTML = 'bye#';
// document.querySelector('.test-text').innerHTML = 'bye.';

// for(let a = 0; a<4; a++){
// document.querySelectorAll('.test-text')[a].innerHTML = 'bye all';
// }



// const info =()=>{
//     document.querySelector('h2').innerHTML = "Bye";
// }

// document.addEventListener(event, function, Capture)
// document.querySelector('button').addEventListener("click",info);
// document.querySelector('button').onclick = info;

// document.querySelector('button').addEventListener('click',()=>{
//     document.querySelector('h2').attributes[0].value = 'green';
// });


// const btn = document.querySelector('button');
// const text = document.querySelector('h2');

// const info=()=>{
//     text.attributes[0].value = 'green';
// }

// btn.addEventListener('click',info)


// multilang start

const az = ["Ana sehife","Haqqimzda","Xidmetlerimiz",'Meqale','Elaqe'];
const en = ["Home","About","Services",'Blog','Contact'];

const langBtn = document.querySelector('.btn');
const langItem = document.querySelectorAll('.nav-link');

const multiLangAction = ()=>{
    if (langBtn.innerHTML == "AZ") {
        for(x in az){
            langItem[x].innerHTML = az[x];
        }
        langBtn.innerHTML = "EN";
    }else{
        for(x in en){
            langItem[x].innerHTML = en[x];
        }
        langBtn.innerHTML = "AZ";
    }
}

langBtn.onclick = multiLangAction;

// console.log(document.anchors.length);

// multilang end


// document.querySelector('#body-items').innerHTML = document.body.innerHTML;
// document.forms
document.title = "A new title";