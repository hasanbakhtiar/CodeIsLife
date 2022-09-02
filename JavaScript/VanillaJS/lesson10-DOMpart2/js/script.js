const menuBtn =document.querySelector('#menuBtn');
const header = document.querySelector('header');


// menuBtn.onmouseenter = ()=>{
    // menuBtn.onmouseleave = ()=>{
        // menuBtn.onmouseover = ()=>{
            // menuBtn.onmousedown = ()=>{
//                 menuBtn.onclick = ()=>{
//     // const p = document.querySelector('p')
//     // p.classList.toggle('a');
//     // if (p.className === 'b a') {
//     // p.classList.remove('b');
        
//     // }
//     document.querySelector('p').style.color = "red";
//     document.querySelector('p').style.fontSize = "50px";

// }

// menuBtn.accessKey = 'w';

// const menu = ()=>{
//     if (menuBtn.innerHTML === "X") {
//         header.className = 'hide';
//         menuBtn.innerHTML = ">";
//     }else{
//         header.className = 'show';
//         menuBtn.innerHTML = "X";


//     }
// }
// menuBtn.onclick = menu;
// window.onscroll = ()=>{menu()}

// const menu1 = ()=>{
//     if (menuBtn.innerHTML === "X") {
//                 header.className = 'hide';
//                 menuBtn.innerHTML = ">";
//             }else{
//                 header.className = 'show';
//                 menuBtn.innerHTML = "X";
        
        
//             }
// }

// const menu =()=>{

//     if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
//         header.className = 'hide';
//         menuBtn.innerHTML = ">";
//     }else{
//         header.className = 'show';
//         menuBtn.innerHTML = "X";


//     }
// }
// menuBtn.onclick = menu1;



let btn = document.getElementById('btn');
   
// when the btn is clicked print info in console 
btn.addEventListener('click', ()=>{
  console.log("Btn clicked");
  document.querySelector('p').style.color = 'red';
});

document.addEventListener('keypress', (event)=>{


  // 13 points the enter key
  if(event.keyCode ===13) {
    // call click function of the buttonn 
    btn.click();
  }
    
});