let card=document.getElementById("img");
card.onmouseenter=function(){
    card.src="https://cdn.britannica.com/25/222725-050-170F622A/Indian-cricketer-Mahendra-Singh-Dhoni-2011.jpg"
}
card.onmouseout=function(){
    card.src="https://www.hindustantimes.com/static-content/1y/cricket-logos/players/virat-kohli.png"
}

let card1=document.querySelector("input")
card1.onkeydown=function(){
document.body.style.backgroundColor="blue"
}
card1.onkeyup=function(){
    document.body.style.backgroundColor="green"
}
card1.onkeypress=function(){
    document.body.style.backgroundColor="yellow"
}