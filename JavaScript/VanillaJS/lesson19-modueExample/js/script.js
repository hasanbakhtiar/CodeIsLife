import * as data from './data.js'

document.querySelector('button').onclick=()=>{
    if (document.querySelector('button').innerHTML === 'AZ') {
        for(let x in data.lang.az){
            document.querySelectorAll('a')[x].innerHTML = data.lang.az[x]
        }
    }
}