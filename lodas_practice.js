// import package lodah that save in the same working directory
// use underscore for lodash set lodash to a variable

const _ = require('./lodash.js')

let products = [

{code: 101,name: 'macbook_pro', price: 1000 },
{code: 102, name: 'iphone', price: 300 },
{code: 103, name: 'ipad', price: 500 },
{code: 104,name: 'macbook_air', price: 1200, }]

//ORDER PRODUCTS BY PRICE

let order = _.orderBy(products, 'price')
console.log(order)

//EXTRACT UNIQUE BY PRODUCTCODE

let unique = _.uniq(products, 'code', 'desc')

console.log("EXTRACR UNIQUE PRODUCTS BY CODES ", unique, 'desc');

// Add 10 % tax on all products

let add_tax = _.map(products, (e) => {
  return { name: e.name,
           price: e.price + (e.price * .10) }
})

console.log("ADD 10% TAX TO EACH PRODUCT ", add_tax );


//CALCULATE TOTAL PRICE OF ALL PRODUCTS

total = _.sumBy(add_tax,'price' )

console.log("TOTAL PRICE OF ALL PRODUCTS IS $", total);
