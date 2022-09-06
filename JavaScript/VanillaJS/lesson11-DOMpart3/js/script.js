const nav  = document.querySelector('nav');
const modeBtn = document.querySelector('#mode');

modeBtn.onclick =()=>{
    if (nav.className === "navbar navbar-expand-lg bg-light navbar-light") {
        const dark = "navbar navbar-expand-lg bg-dark navbar-dark";
        localStorage.setItem('mode',dark);
        nav.className = localStorage.getItem('mode');

        localStorage.setItem('modeBtn','Light')
        modeBtn.innerHTML = localStorage.getItem('modeBtn');

    }else{
        const light = "navbar navbar-expand-lg bg-light navbar-light";
        localStorage.setItem('mode',light);
        nav.className = localStorage.getItem('mode');
        localStorage.setItem('modeBtn','Dark')
        modeBtn.innerHTML = localStorage.getItem('modeBtn');

    }
}

nav.className = localStorage.getItem('mode');
modeBtn.innerHTML = localStorage.getItem('modeBtn');

// =====================================================
// lang

const langItem = document.querySelectorAll('.nav-link');
const langBtn = document.querySelector('#lang');

const langText = {
    az: ['Ana Sehife', 'Haqqimizda','Xidmetlerimiz','Meqale', 'Elaqe'],
    en: ['Home','About','Services','Blog','Contact']
}


langBtn.onclick = ()=>{
    if (langBtn.innerHTML === 'AZ') {
        localStorage.setItem('lang',langText.az);

        for( x in langText.az){
            langItem[x].innerHTML = langText.az[x];
        }

        localStorage.setItem('langBtn','EN');
        langBtn.innerHTML=localStorage.getItem('langBtn');
    }else{
        localStorage.setItem('lang',langText.en);

        for( x in langText.en){
            langItem[x].innerHTML = langText.en[x];
        }

        localStorage.setItem('langBtn','AZ');
        langBtn.innerHTML=localStorage.getItem('langBtn');

    }
}


for( x in langText.en){
    langItem[x].innerHTML = localStorage.getItem('lang').split(',')[x];
}
langBtn.innerHTML=localStorage.getItem('langBtn');




// localStorage.setItem('textOne',"Hello-1");
// localStorage.setItem('textTwo',"Hello-2");
// localStorage.clear();
// localStorage.removeItem('textTwo')
// document.querySelector('h1').innerHTML = localStorage.getItem('textTwo');


// document.title = 'Hello';
// document.body.classList.add('a');
const text =document.querySelector('h1');
// document.querySelector('p').innerHTML = text.nodeName;
// document.querySelector('p').innerHTML = text.firstChild.nodeType;
// document.querySelector('p').innerHTML = text.attributes[0].nodeType;
