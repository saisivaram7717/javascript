// Question 1: Manage a Guest List
// You are managing a guest list for an event.
// Start with an array: ["Alice", "Bob", "Charlie", "David"].
// Add a new guest at the beginning of the list.
// Remove the last guest from the list.
// Check if "Bob" is still in the list after modifications.
// What does the final list look like?


// var a=["Alice", "Bob", "Charlie", "David"]
// a.unshift("Perry");
// a.pop();
// console.log(a.includes("Bob"));
// console.log(a);


// Given a string: "Learn,Practice,Improve",
// Convert the string into an array of words.
// Reverse the order of the words.
// Join the reversed array into a single string with spaces between words.
// What is the final output?

// var a = "Learn,Practice,Improve";
// console.log(a.split(",").reverse().join(" "));


// Question 3: Create a Playlist
// You have two arrays of songs:
// ["Song1", "Song2", "Song3"] and ["Song4", "Song5"].
// Combine these two arrays into one playlist.
// Remove the first song from the playlist.
// Add a new song, "Song6", to the end of the playlist.
// What does the final playlist look like?


// var a=["Song1", "Song2", "Song3"];
// var b=["Song4", "Song5"];
// var c=a.concat(b);
// c.shift();
// c.push("Song6");
// console.log(c);


// Question 5: Extract Favorite Movies
// You have a list of movies:
// ["Inception", "Titanic", "Avatar", "Interstellar", "Gladiator"].
// Extract the middle three movies into a new array.
// Combine this new array with another array: ["The Matrix", "The Godfather"].
// Reverse the order of the combined list.
// What is the final list?

// var a = ["Inception", "Titanic", "Avatar", "Interstellar", "Gladiator"];
// var b = a.splice(1,3);
// var c = ["The Matrix", "The Godfather"];
// var d = b.concat(c);
// d.reverse();
// console.log(d);

// Question 7: String Operations on Names
// Given a string: "John,Doe,Jane,Smith",
// Split the string into an array.
// Check if the array includes "Jane".
// Reverse the array and join the names with a space.
// What is the final output?

// var a="John,Doe,Jane,Smith";
// var b= a.split(",");
// console.log(b.includes("jane"));
// console.log(b.reverse().join(" "));
// console.log(b);

// Question 8: Length-Based Manipulation
// You have an array of numbers: [1, 2, 3, 4, 5].
// Remove the first element from the array.
// Add the numbers 6 and 7 to the end.
// Calculate the final length of the array.
// What are the final array and its length?


// var a=[1, 2, 3, 4, 5];
// a.shift();
// a.push(6,7);
// console.log(a.length);
// console.log(a)

// Question 9: Shopping Cart Operations
// You have a shopping cart array:
// ["Milk", "Bread", "Eggs", "Butter"].
// Check if "Eggs" are in the cart.
// Remove "Butter" from the cart.
// Add "Cheese" and "Juice" to the end of the cart.
// What does the final shopping cart look like?

// var a=["Milk", "Bread", "Eggs", "Butter"];
// console.log(a.includes("eggs"));
// a.pop();
// a.push("Cheese","juice");
// console.log(a);

// Question 10: Rearrange and Combine Names
// You have two arrays of names:
// ["Alice", "Bob", "Charlie"] and ["David", "Eve"].
// Reverse the first array.
// Combine the reversed array with the second array.
// Add "Frank" to the beginning of the combined list.
// What is the final list?

// var a=["Alice", "Bob", "Charlie"];
// var b=["David", "Eve"];
// a.reverse();
// var c=a.concat(b);
// c.unshift("Frank");
// console.log(c);

// Question 11: Shopping Cart Operations
// You have a shopping cart:
// ["Milk", "Bread", "Eggs", "Butter"].
// Find the index of "Eggs" in the cart.
// Remove "Eggs" and replace it with "Cheese"
// Add "Juice" to the beginning of the cart.
// What does the final shopping cart look like?

// var a=["Milk", "Bread", "Eggs", "Butter"];
// var b= a.indexOf("Eggs");
// a[b] = "Cheese";
// a.unshift("Juice");
// console.log(a);