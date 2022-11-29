// interface IDatabase{
//     add();
//     get();
//     delete();
//     update();
// }
// class MySql implements IDatabase{
//     add() {
//         console.log('MySql add data');
//     }
//     get() {
//         console.log('MySql get data');
//     }
//     delete() {
//         console.log('MySql delete data');
//     }
//     update() {
//         console.log('MySql update data');
//     }
// }
// class Mongo implements IDatabase{
//     add() {
//         console.log('Mongo add data');
//     }
//     get() {
//         console.log('Mongo get data');
//     }
//     delete() {
//         console.log('Mongo delete data');
//     }
//     update() {
//         console.log('Mongo update data');
//     }
// }
// function AddDatabase(dt:IDatabase){
//     dt.add();
// }
// function DeleteDatabase(dt:IDatabase){
//     dt.delete();
// }
// function UpdateDatabase(dt:IDatabase){
//     dt.update();
// }
// function GetDatabase(dt:IDatabase){
//     dt.get();
// }
// GetDatabase(new Mongo);
// GetDatabase(new MySql);
var car = "red";
var colorCar = function (color) {
    car = color;
};
colorCar("grey");
console.log(car);
