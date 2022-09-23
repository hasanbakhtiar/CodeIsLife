// ["af", "sq", "ar-SA", "ar-IQ", "ar-EG", "ar-LY", "ar-DZ", "ar-MA", "ar-TN", "ar-OM",
// "ar-YE", "ar-SY", "ar-JO", "ar-LB", "ar-KW", "ar-AE", "ar-BH", "ar-QA", "eu", "bg",
// "be", "ca", "zh-TW", "zh-CN", "zh-HK", "zh-SG", "hr", "cs", "da", "nl", "nl-BE", "en",
// "en-US", "en-EG", "en-AU", "en-GB", "en-CA", "en-NZ", "en-IE", "en-ZA", "en-JM",
// "en-BZ", "en-TT", "et", "fo", "fa", "fi", "fr", "fr-BE", "fr-CA", "fr-CH", "fr-LU",
// "gd", "gd-IE", "de", "de-CH", "de-AT", "de-LU", "de-LI", "el", "he", "hi", "hu", 
// "is", "id", "it", "it-CH", "ja", "ko", "lv", "lt", "mk", "mt", "no", "pl",
// "pt-BR", "pt", "rm", "ro", "ro-MO", "ru", "ru-MI", "sz", "sr", "sk", "sl", "sb",
// "es", "es-AR", "es-GT", "es-CR", "es-PA", "es-DO", "es-MX", "es-VE", "es-CO", 
// "es-PE", "es-EC", "es-CL", "es-UY", "es-PY", "es-BO", "es-SV", "es-HN", "es-NI", 
// "es-PR", "sx", "sv", "sv-FI", "th", "ts", "tn", "tr", "uk", "ur", "ve", "vi", "xh",
// "ji", "zu"];

// document.querySelector('p').innerHTML = navigator.platform;
// document.querySelector('p').innerHTML = navigator.language;
// if (navigator.language == 'en-US') {
//     document.querySelector('h1').innerHTML = "Hello";
// }else{
//     document.querySelector('h1').innerHTML = "Mello";

// }
// window.alert("Hello")
// window.open();

// ================================================================
// 1s = 1000ms
// setTimeout(() => {
// }, timeout);


// setInterval(() => {
// }, interval);



// const info = ()=>{document.write('new value')};
// setTimeout(info,1000);
// setInterval(info,1000);

const info = ()=>{
    document.querySelector('#wrapper').className = 'show';
    document.querySelector('#loading').className = 'hide';
}
setTimeout(info, 500);

const interval = setInterval(() => {
// document.querySelector('h2').innerHTML = new Date().getFullYear();
document.querySelector('h2').innerHTML = new Date().getMilliseconds();
}, 10);

document.querySelector('button').onclick = ()=>{
    clearInterval(interval);
    // clearTimeout();
}