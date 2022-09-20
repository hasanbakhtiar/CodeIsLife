var infoEl = document.createElement('p');
var btnEl = document.createElement('button');
// var infoTx = document.createTextNode(`${screen.width}px`);
// var infoTx = document.createTextNode(`${screen.height}px`);
// var infoTx = document.createTextNode(`${screen.availHeight}px`);
// var infoTx = document.createTextNode(`${screen.availWidth}px`);
// var infoTx = document.createTextNode(`${screen.colorDepth}bit`);
// var infoTx = document.createTextNode(`${screen.pixelDepth}`);
// var infoTx = document.createTextNode(`${window.location.href}`);
// var infoTx = document.createTextNode(`${window.location.pathname}`);
// var infoTx = document.createTextNode(`${window.location.hostname}`);
var infoTx = document.createTextNode(`${window.location.port}`);
// var infoTx = document.createTextNode(`${window.location.assign("https:google.com")}`);x
var btnTx = document.createTextNode(`action`);
// window.print();

infoEl.appendChild(infoTx);
btnEl.appendChild(btnTx);
document.body.appendChild(infoEl);
document.body.appendChild(btnEl);
let a;
btnEl.onclick = ()=>{
//   a =    window.open('https://google.com',"_blank","toolbar=yes,scrollbars=no,resizable=no,top=500,left=1500,width=400,height=400")
  a =    window.open('',"","width=400,height=400")
}
document.querySelector('.close').onclick=()=>{
    // a.close();
    // a.moveTo(500, 100);
    // a.resizeTo(1000, 1000)
    history.forward();
}