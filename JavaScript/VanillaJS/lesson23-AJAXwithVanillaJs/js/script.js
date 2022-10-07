// document.querySelector('button').addEventListener('click',function() {
//     const xhttp = new XMLHttpRequest();
//     xhttp.onload = function() {
//       document.querySelector('h1').innerHTML = this.responseText;
//     }
//     xhttp.open("GET", "../data/mydata.txt");
//     xhttp.send();
//   }
// ) 

document.querySelector('button').addEventListener('click',function() {
const xhttp = new XMLHttpRequest();
xhttp.onload = function() {
  const xmlDoc = this.responseXML;
  const x = xmlDoc.getElementsByTagName("name");
  let txt = "";
  for (let i = 0; i < x.length; i++) {
    txt = txt + x[i].childNodes[0].nodeValue + "<br>";
  }
  document.getElementById("demo").innerHTML = txt;
}
xhttp.open("GET", "../data/mydata.xml");
xhttp.send();
})