// let cards="https://fakestoreapi.com/products"
// async function data() {
//     let products =await fetch(cards)
//     let allproducts=await products.json()
//     console.log(allproducts)
//     let local=localStorage.setItem("items",JSON.stringify(allproducts))
    
// }
// data()

let data="https://fakestoreapi.com/products"
async function cards() {
let products=await fetch(data) 
let product=await products.json()
console.log(product);
let local=localStorage.setItem("item",JSON.stringify(product))



}
cards()