var a = prompt("enter the digit");
count=0;
for(i=0;i<=a;i++){
    if(a%i==0){
        count++
    }
}
if(count==2){
    console.log(a,"is the prime number");
}else{
    console.log(a,"is not a prime number");
}

