// let fromlocal=JSON.parse(localStorage.getItem("items"))
// fromlocal.forEach(ele => {
//     let cards=document.createElement("div")
//     console.log(ele);
//     cards.innerHTML=`

//     <img src="${ele.image}"/>a
    
    
    
//     `
//     document.body.append(cards)
    
// });


let fromlocal=JSON.parse(localStorage.getItem("item"))
fromlocal.forEach(ele => {
let cards=document.createElement("div")
cards.style.display="flex";
cards.style.flexirection="column"
cards.style.gap="30px";
cards.innerHTML=`
<img src="${ele.image}" width="200px heigth="400px"/>



`
document.body.append(cards)
});