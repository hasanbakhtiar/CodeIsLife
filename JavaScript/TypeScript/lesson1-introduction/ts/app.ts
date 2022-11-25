// let a:string = "5";
// const infoArr:Array<number> = [3,4,5,6,7];
// const infoArr:any[] = [3,4,5,true,"data",6,7];
// console.log(infoArr);

// const dataArr=(newData: number[])=>{
//    return newData;
// }
// const info = (dataOne:number[],dataTwo?:string):void=>{
//         let comingData = dataOne;
//        console.log(dataArr(comingData));
// }
// info([1,2,3,4,5]);

// type dataType={
//     title:string,
//     color:string,
//     price:number
// }

// var data:dataType = {
//     title:"Book",
//     color:"balck",
//     price:20
// }

// console.log(data);



// class Person {
//     protected iname:string;
//     public isurname:string;
//     public iage:number;
    
//     constructor(name:string,surname:string,age:number){
//         this.iname = name,
//         this.isurname = surname;
//         this.iage = age;
//     }
// }

// const dataPerson = new Person("Arhour","Morgan",40);
// console.log(dataPerson.iname);

fetch('https://fakestoreapi.com/products')
.then((res:any)=>res.json())
.then((data:any)=>console.log(data))

const newElem:any = document.querySelector<HTMLElement>('h1');
newElem.innerHTML = "Data";