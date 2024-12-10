// Strings

// 1.take two strings with spaces at starting of one string and 
// at the ending of another string remove the spaces and 
// concat the both string and 
// convert the combined string into uppercase string


// var a = "     sai";
// var b = "sathwik     ";
// var c = a.trim().concat(b.trim()).toUpperCase();
// console.log(c);

// 2.Extract Middle Portion of the string and
//  get the last index of char of extracted string and
//  Convert the portion to Lowercase

// var a = "siva";
// var b = a.slice(1,3);
// console.log(b.indexOf(b[b.length - 1]));
// console.log(b.toLowerCase());

// 3.take a single char and concat string to that char and 
// convert the resulted string to uppercase and 
// then extract the last second char 

// var a = "s";
// var b = a.concat("ai");
// console.log(b.toUpperCase());
// console.log(b[b.length - 2]);

// 4.we have 2 string and extract first 3 chars of first string and
//  extra last 3 chars of another string and concat those 2 results together
//  and first char and last char of the resulted concatinated string should as uppercase

// var a = "Sivaram";
// var b = "Harsha";
// var c = a.slice(0,3);
// var d = b.slice(-3);
// var result = c.charAt(0).toUpperCase()+c.slice(1,3)+d.slice(-3,-1)+d.charAt(d.length - 1).toUpperCase();
// console.log(result);

// 5.You are given a string with extra spaces at the beginning and end.
//  You need to trim the string, make the first and last characters uppercase, 
//  extract a specific part of the string, 
//  concatenate it with another string


// / var a = "      sathwik       ";
// var b = a.trim();
// var c = b.charAt(0).toUpperCase()+b.slice(1,b.length-1)+b.charAt(b.length - 1).toUpperCase();
// console.log(c);
// var d = c.slice(1,3)+"hiii"
// console.log(d);

// 6."hello there , how are you " find the index of are word in the sentence

// var a="hello there , how are you ";
// console.log(a.indexOf("are"));

// Objects

// Create an object person with properties firstName, lastName, and age. Then:
// Access and print the firstName property.
// Add a new property city with the value "New York" and print the updated object.

// var person={
//     name:"sai",
//     lastname:"vasa",
//     age:"21",
// }
// console.log(person.name);
// person.city="NewYork";
// console.log(person);

// Create an object product with properties name, price, and inStock. Then:
// Modify the price property to a new value.
// Delete the inStock property from the object and print the updated object.

// var product={
//     name:"Cricketbat",
//     price:"2000",
//     instock:"true",
// }
// console.log(product);
// product.price="2500";
// delete product.instock;
// console.log(product);

// 3.Create an object library with nested objects for different genres. Each genre has a list of books. Then:
// Add a new genre scienceFiction with a list of two books.
// Access and print the first book in the fantasy genre.
// Delete the mystery genre from the object.

// var library = {
//         romance : {
//             books : ["Parugu","Arya2"]
//         },
//         fantasy : {
//             books : ["Harry potter","Bahubali"]
//         },
//         mystery : {
//             books : ["Joker","Us"]
//         }
//     };
//     console.log(library);
//     library.ScienceFiction = {
//         books : ["Dune"]
//     }
//     console.log(library);
//     console.log(library.fantasy.books[0]);
//     delete library.mystery;
//     console.log(library);

// 4.Create an object user with properties username, email, and an address object that contains city, state, and zip. Then:
// Freeze the user object using Object.freeze().
// Try to change the email property and check if the object is frozen using Object.isFrozen().
// Add a new property phone to the user object and observe the result.

// var user = {
//         username : "sai",
//         email : "srikotisaisivaram@gmail.com",
//         address : {
//             city : "New York",
//             state : "NY",
//             zip : "123"
//         }
//     }
//     console.log(user);
//     Object.freeze(user);
//     user.email = "srikotisaisivaram@g.com";
//     console.log(user);
//     console.log(Object.isFrozen(user));
//     user.phone = "1234567890";
//     console.log(user);

// 5.Create an object car with properties make, model, and price. Then:
// Seal the object using Object.seal().
// Try to delete the make property and check if the object is sealed using Object.isSealed().
// Modify the price property, and check if the object is still extensible using Object.isExtensible()
    
// var car = {
//     make : "Lamborghini",
//     model : "sports",
//     price : "6cr"
// }
// console.log(car);
// Object.seal(car);
// delete car.make;
// console.log(car);
// console.log(Object.isSealed(car));
// car.price = "7cr";
// console.log(car);
// console.log(Object.isExtensible(car));