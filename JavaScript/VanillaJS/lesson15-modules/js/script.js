// import {info,allCars} from './utils.js'
import * as utilsData from "./utils.js";
const ol = document.querySelector('ol');
let li = "";
utilsData.allCars.map((a,i) => {
  return (li += `<li id="list-${i}"><span>Model:</span>${a.model}<br/><span>color:</span>${a.color}</li>`);
  // return console.log(a);
});
ol.innerHTML = li;
console.log(utilsData.info);
