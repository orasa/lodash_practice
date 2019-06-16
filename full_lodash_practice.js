// import package lodah that save in the same working directory
// use underscore for lodash
const _ = require('./lodash.js')

// numbers = [ 20,30,40,30,40,10]
//
// //use library *uniq* and sum that come with the package
//
// let unique = _.uniq(numbers)
// console.log('unique numbers', unique);
// /// sum
// let add_sum = _.sum(unique)
// console.log('sum ', add_sum);
//
// //Arrays of objects in Doucumentation of lodas go to collection
//
// //let people =[
//   {
//     name: 'Mae',
//     age: 24
//   },
//
//   {
//     name: "Poony",
//     age: 20
//   },
//  {
//    name: "chang",
//     age: 19
//   }
// ]
//
// let chang = _.find(people, (e) => {
//   return e.name == 'chang'
// })
// console.log("START LOG HERE");
// console.log('chang', chang);
//
// let ordered = _.orderBy(people, 'age', 'desc')
// console.log('ordered', ordered);
//
// console.log('*******USING Map from Lodash ********* ');
//
// //let ages_double = _map.(people, (e) => e.age *= 2)
// let ages_double = _.map(people, (e) => {
//   return {
//     name: e.name,
//     age: e.age * 2 }
//   })
//
// console.log(("Age", ages_double));


let products = [

{code: 101,name: 'macbook_pro', price: 1000 },
{code: 102, name: 'iphone', price: 300 },
{code: 103, name: 'ipad', price: 500 },
{code: 104,name: 'macbook_air', price: 1200, }]

let order = _.orderBy(products, 'price')
console.log(order)

//EXTRACT UNIQUE BY PRODUCTCODE

let unique = _.uniq(products, 'code', 'desc')

console.log("EXTRACR UNIQUE PRODUCTS BY CODES ");
console.log("UNIQUE ", unique, 'desc');

let add_tax = _.map(products, (e) => {
  return { name: e.name,
           price: e.price + (e.price * .10) }
})
console.log("PRICE WITH 10% tax ", add_tax );
//console.log('price with 10 % tax add', add_tax);

//CALCULATE TOTAL
total = _.sumBy(add_tax,'price' )
console.log(products.price);
console.log("#5, Total price of all ", total);
