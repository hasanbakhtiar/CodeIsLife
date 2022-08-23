// ES5
// function Car(model,color,year){
//     this.modelname = model;
//     this.colorname = color;
//     this.time = year;
// }
// Car.prototype.doortype = 4;

// const myCar = new Car('bmw ','black ',1995);
// console.log(myCar.modelname);
// console.log(myCar.doortype);

// ES6
// class
// class Car {
//   constructor(model, color, year) {
//     this.modelname = model;
//     this.colorname = color;
//     this.time = year;
//   }
//    calculateAge(){
//     return `my ${this.modelname},is ${new Date().getFullYear()-this.time  }`
//    }

// }

// class Moto extends Car{
//     constructor(model, color, year, newtransport){
//         super(model, color, year);
//         this.cecktransport = newtransport;
//     }
//     sayHi(motoname){
//         return `${motoname}, hello`;
//     }
// }

// class Airplane extends Moto{
//     constructor(model,weight){
//         super(model);
//         this.weight = weight;
//     }
// }

// const myAirplane = new Airplane('boing',1000);
// console.log(myAirplane.modelname);
// console.log(myAirplane.weight);

// const myMoto = new Moto('yamaha', 'red', 2000,true);
// console.log(myMoto.calculateAge());
// console.log(myMoto.cecktransport);

// const myCar = new Car("bmw ", "black ", 1995);
// console.log(myCar.modelname);
// console.log(myCar.calculateAge());
// ()=>{}


// Aparatlar stilan dukan
// don tiken cihaz = 200$
// ayaqqabi hazirlayan cihaz = 170$
// koynek tiken cihaz = 100$
// slavar tiken cihaz = 150$

// 1slavar = 15$
// 1koynek = 10$
// 1ayaqqabi = 20$
// 1don = 30$
// 1papaq = 7$
// 1elcek = 9$

// 1-ci zavod
// default olaraq papaq tiken cihaz var

// 2-ci zavod
// default olaraq elcek tiken cihaz var




let factoryMoney =50;
class don {
    donlar(){
        return factoryMoney+30;
    }
}



if (factoryMoney>10) {
    class FactorySt extends don{
        cal(){
           return factoryMoney+100;
        }
    } 
    const myFst = new FactorySt();
    console.log(myFst.cal());
}


// factory 1st
class FactorySt{

}

class FactoryNd{
    
}
// factory 2nd
