// every()

// let a= ["sai","siva","ram",true]
// let b=a.every(z=>z===true);
// console.log(b)

let userEmail= prompt("enter the mail here");
let userpassword=prompt("emter the password here");
let users=[{email:"sai@gmail.com",password:"sai@123"},{email:"vamsi@gmail.com",password:"vamsi@123"}]
let user=users.find(users=>user.email === useremail && user.paasword === userpassword)
if(user){
    console.log("logged suuccesfully")
}else{
    console.log("no user found");
}