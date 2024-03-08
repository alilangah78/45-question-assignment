// 2- Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you liktodaye to learn some Python 

// Store the person's name in a variable
let personName: string = "alikhan";

// Print a message to the person
console.log(`Hello ${personName}, would you like to learn some TypeScript today?`);

//3-  Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

// Store the person's name in a variable
let personName1: string = "alikhan";

// Print the person's name in lowercase
console.log("Lowercase: " + personName1.toLowerCase());

// Print the person's name in uppercase
console.log("Uppercase: " + personName1.toUpperCase());

// Print the person's name in title case
console.log("Titlecase: " + personName1.charAt(0).toUpperCase() + personName.slice(1).toLowerCase());


// 4- Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks
// Store the quote and its author's name in variables
let quote: string = "In the middle of difficulty lies opportunity.";
let author: string = "Albert Einstein";

// Print the quote and its author's name
console.log(`Quote: "${quote}"`);
console.log(`Author: ${author}`);




// 5 -Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message
// Store the famous person's name in a variable
let famous_person: string = "Albert Einstein";

// Store the famous quote in a variable
let quote2: string = "In the middle of difficulty lies opportunity.";

// Compose the message
let message: string = `"${quote2}" - ${famous_person}`;

// Print the message
console.log(message);


// 6- Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces

let personName2:string = `\n\t ALI KHAN\t\n`;
console.log(personName2);
let stripped :string=personName2.trim();
console.log(stripped);
//Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.
// Addition
console.log("Addition: ", 5 + 3);

// Subtraction
console.log("Subtraction: ", 10 - 2);

// Multiplication
console.log("Multiplication: ", 4 * 2);

// Division
console.log("Division: ", 16 / 2);

//Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.
// Store your favorite number in a variable
let favoriteNumber: number = 7;

// Create a message revealing your favorite number
let message3: string = `My favorite number is ${favoriteNumber}.`;

// Print the message
console.log(message3);


//Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.
 
//excercise no #10;
//program 1
// my name is ali khan;
// date 01/03/2024.;
// this program just print simple code"hello world simple program"
console.log("hello world simple program");

//excercise no #10;
// program 2
// my name is ali khan;
// date 01/03/2024.;
// this program is about multiplication;
console.log(5*2);

// 11- Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time

// Store the names of your friends in an array called names
let names: string[] = ["Ali", "Babar", "Chaudry", "Danish"];

// Print each person's name by accessing each element in the list one at a time
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}
//12 - Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name
// Store the names of your friends in an array called names
let names1: string[] = ["Ali", "Babar", "Chaudry", "Danish"];

// Print a personalized message to each person in the array
for (let i = 0; i < names1.length; i++) {
    console.log(`Hello, ${names1[i]}! Have a great day!`);
}
// 13 - Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.
// Store several examples of bicycles in an array
let bicycles: string[] = ["Super bike", "Road bike", "Honda bike", "Electric bike"];

// Print statements about each bicycle in the array
for (let i = 0; i < bicycles.length; i++) {
    console.log(`I would like to own a ${bicycles[i]}.`);
}

// 14- Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner
// Store the names of people I'd like to invite to dinner in an array
let guests1: string[] = ["Saqlain mushtaq", "Shahid afridi", "Shaheen afridi"];

// Print a personalized invitation message to each person in the array
for (let i = 0; i < guests1.length; i++) {
    console.log(`Dear ${guests1[i]},\nI would like to invite you to dinner. It would be an honor to have your presence.\nBest regards,\n[ALI KHAN]`);
}
//15 - Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// Store the names of people I'd like to invite to dinner in an array
let guests2: string[] = ["SIR NADEEM", "NAVEED", "SIR SARWAR"];

// Update the guest list
let canceledGuest2: string = "NAVEED"; // The canceled guest
let newGuest2: string = "MUZAMIL"; // The new guest

// Find the index of the canceled guest in the array
let canceledIndex2: number = guests2.indexOf(canceledGuest2);

// Replace the canceled guest with the new guest
if (canceledIndex2 !== -1) {
    guests2[canceledIndex2] = newGuest2;
}

// Print updated invitation messages to each person in the array
for (let i = 0; i < guests2.length; i++) {
    console.log(`Dear ${guests2[i]},\nI would like to invite you to dinner. It would be an honor to have your presence.\nBest regards,\n[ALI KHAN]`);
}


//  Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

let guests3: string[] = ["CHAUDRY HAMZAH ", "WAHEED", "BAHADUR ALI"];

// Store the name of the guest who can't make it
let canceledGuest3: string = "WAHEED";

// Find the index of the canceled guest in the array
let canceledGuestIndex: number = guests3.indexOf(canceledGuest3);

// Replace the canceled guest with the name of the new person I'm inviting
if (canceledGuestIndex !== -1) {
    guests3[canceledGuestIndex] = "BILAWAL ALI";
}

// Print updated invitation messages to each person in the array
guests3.forEach(guests3 => {
    console.log(`Dear ${guests3},\nI would like to invite you to dinner. It would be an honor to have your presence.\nBest regards,\n[ALI KHAN]`);
});

// Print the name of the guest who can't make it
console.log(`${canceledGuest3} can't make it to dinner.`);

// Print a second set of invitation messages for each person who is still in the list
console.log("\nSecond set of invitation messages:");
guests3.forEach(guest => {
    console.log(`Dear ${guest},\nI wanted to confirm your invitation to dinner. Looking forward to seeing you!\nBest regards,\n[ALI KHAN]`);
});


// 16- More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
//• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

//• Add one new guest to the beginning of your array.

//• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.

// Store the names of people I'd like to invite to dinner in an array
let guests: string[] = ["Hamzah", "Naveed", "Zia Khan", "Qasim"];

// Store the name of the guest who can't make it
let canceledGuest: string = "Qasim";

// Find the index of the canceled guest in the array
let canceledGuestIndex2: number = guests.indexOf(canceledGuest);

// Replace the canceled guest with the name of the new person I'm inviting
if (canceledGuestIndex2 !== -1) {
    guests[canceledGuestIndex2] = "Shoaib Ali";
}

// Inform people that a bigger dinner table is found
console.log("Good news! We found a bigger dinner table!");

// Add new guests to the array
guests.unshift("Bahadur Ali"); // Add Bahadur Ali to the beginning
guests.splice(Math.floor(guests.length / 2), 0, "Bilawal Ali"); // Add Bilawal Ali to the middle
guests.push("Sarwar"); // Add Sarwar to the end

// Print invitation messages for each person in the array
console.log("\nInvitation messages for all guests:");
guests.forEach(guest => {
    console.log(`Dear ${guest},\nYou are invited to the dinner. Looking forward to seeing you!\nBest regards,\n[ALI KHAN]`);
});

//Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
//• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

//• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

//• Print a message to each of the two people still on your list, letting them know they’re still invited.

//• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.


// Store the names of people I'd like to invite to dinner in an array
let guests22: string[] = ["Hamzah", "Naveed", "Zia Khan", "Qasim"];

// Store the name of the guest who can't make it
let canceledGuest22: string = "Qasim";

// Find the index of the canceled guest in the array
let canceledGuestIndex22: number = guests22.indexOf(canceledGuest22);

// Replace the canceled guest with the name of the new person I'm inviting
if (canceledGuestIndex22 !== -1) {
    guests22[canceledGuestIndex22] = "Shoaib Ali";
}

// Inform people that a bigger dinner table is found
console.log("Good news! We found a bigger dinner table!");

// Add new guests to the array
guests22.unshift("Bahadur Ali"); // Add Bahadur Ali to the beginning
guests22.splice(Math.floor(guests22.length / 2), 0, "Bilawal Ali"); // Add Bilawal Ali to the middle
guests22.push("Sarwar"); // Add Sarwar to the end

// Print a message saying that only two people can be invited for dinner
console.log("\nSorry, the new dinner table won’t arrive in time. I can only invite two people for dinner.");

// Remove guests from the list one at a time until only two names remain
while (guests22.length > 2) {
    let removedGuest22 = guests22.pop();
    console.log(`Sorry, ${removedGuest22}, I can't invite you to dinner.`);
}

// Print invitation messages for the two people still on the list
console.log("\nInvitation messages for the remaining guests:");
guests22.forEach(guest22 => {
    console.log(`Dear ${guest22},\nYou are still invited to the dinner. Looking forward to seeing you!\nBest regards,\n[Ali khan]`);
});

// Remove the last two names from the list
guests22.pop();
guests22.pop();

// Store the updated list of guests in an array
let updatedGuestList: string[] = guests22;

// Print the updated list of guests
console.log("\nUpdated list of guests:", updatedGuestList);

//Seeing the World: Think of at least five places in the world you’d like to visit.
//• Store the locations in a array. Make sure the array is not in alphabetical order.

//• Print your array in its original order.

//• Print your array in alphabetical order without modifying the actual list.

//• Show that your array is still in its original order by printing it.

//• Print your array in reverse alphabetical order without changing the order of the original list.

//• Show that your array is still in its original order by printing it again.

//• Reverse the order of your list. Print the array to show that its order has changed.

//• Reverse the order of your list again. Print the list to show it’s back to its original order.

//• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

//• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.

// Store the locations I'd like to visit in an array
let placesToVisit: string[] = ["Karachi", "Lahore", "Hyderabad", "Islamabad"];

// Print the array in its original order
console.log("Original order:");
console.log(placesToVisit);

// Print the array in alphabetical order without modifying the original list
console.log("\nAlphabetical order:");
console.log([...placesToVisit].sort());

// Show that the array is still in its original order
console.log("\nOriginal order (unchanged):");
console.log(placesToVisit);

// Print the array in reverse alphabetical order without changing the order of the original list
console.log("\nReverse alphabetical order:");
console.log([...placesToVisit].sort().reverse());

// Show that the array is still in its original order
console.log("\nOriginal order (unchanged):");
console.log(placesToVisit);

// Reverse the order of the list
placesToVisit.reverse();
console.log("\nReversed order:");
console.log(placesToVisit);

// Reverse the order of the list again to bring it back to its original order
placesToVisit.reverse();
console.log("\nOriginal order (restored):");
console.log(placesToVisit);

// Sort the array so it's stored in alphabetical order
placesToVisit.sort();
console.log("\nSorted in alphabetical order:");
console.log(placesToVisit);

// Sort the array to change it to reverse alphabetical order
placesToVisit.sort((a, b) => b.localeCompare(a));
console.log("\nSorted in reverse alphabetical order:");
console.log(placesToVisit);


//19- Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.

// Store the names of friends in an array called names
let nams: string[] = ["Ali", "Babar", "Chaudry", "Danish", "imran"];

// Print each person's name by accessing each element in the list, one at a time
console.log("Printing each person's name:");

nams.forEach(name => {
    console.log(name);
});

// Print a message indicating the number of people being invited to dinner
console.log(`Number of people being invited to dinner: ${names.length}`);

// 20 Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
// Create an array to store a list of fruits
let fruits: string[] = ["Apple", "Banana", "Orange", "Grapes", "Strawberry"];

// Print the list of fruits
console.log("List of fruits:");
console.log(fruits);

// 21 -They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items

// Define TypeScript objects representing information about cars
let car1: { make: string, model: string, year: number } = {
    make: "Toyota",
    model: "corolla",
    year: 2020
};

let car2: { make: string, model: string, year: number } = {
    make: "Honda",
    model: "Civic",
    year: 2018
};

let car3: { make: string, model: string, year: number } = {
    make: "Ford",
    model: "Mustang",
    year: 2019
};

// Print the information about each car
console.log("Car 1:", car1);
console.log("Car 2:", car2);
console.log("Car 3:", car3);


// 22- Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
// Store the names of friends in an array called names
let namess: string[] = ["Ali khan", "Bahadur ali", "Chaudry sahb", "Dawood", "Emran"];

// Try to access an index that doesn't exist to produce an array index error
console.log(namess[10]);

//23 Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
// Define a series of conditional tests
let x: number = 5;
let y: number = 10;

// Test 1: Check if x is greater than y
console.log("Test 1: Is x greater than y?");
console.log("Prediction: Expected result is false.");
console.log(x > y);

// Test 2: Check if x is less than y
console.log("\nTest 2: Is x less than y?");
console.log("Prediction: Expected result is true.");
console.log(x < y);

//

// Test 3: Check if x is equal to y
console.log("\nTest 3: Is x equal to y?");
console.log("Prediction: Expected result is false.");
console.log(x === y);

// Test 4: Check if x is not equal to y
console.log("\nTest 4: Is x not equal to y?");
console.log("Prediction: Expected result is true.");
console.log(x !== y);

// Test 5: Check if x is greater than or equal to y
console.log("\nTest 5: Is x greater than or equal to y?");
console.log("Prediction: Expected result is false.");
console.log(x >= y);

// Test 6: Check if x is less than or equal to y
console.log("\nTest 6: Is x less than or equal to y?");
console.log("Prediction: Expected result is true.");
console.log(x <= y);

//24- More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
//• Tests for equality and inequality with strings

//• Tests using the lower case function

//• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

//• Tests using "and" and "or" operators

//• Test whether an item is in a array

//• Test whether an item is not in a array;
// Define variables for the tests
let string1: string = 'Hello';
let string2: string = 'hello';
let number1: number = 10;
let number2: number = 20;
let array: number[] = [1, 2, 3, 4, 5];

// Tests for equality and inequality with strings
console.log("Tests for equality and inequality with strings:");
console.log("Is string1 equal to string2? I predict False.");
console.log(string1 === string2);
console.log("Is string1 not equal to string2? I predict True.");
console.log(string1 !== string2);

// Tests using the lower case function
console.log("\nTests using the lower case function:");
console.log("Is string1 lowercase equal to 'hello'? I predict True.");
console.log(string1.toLowerCase() === 'hello');
console.log("Is string2 lowercase equal to 'hello'? I predict True.");
console.log(string2.toLowerCase() === 'hello');

// Numerical tests
console.log("\nNumerical tests:");
console.log("Is number1 equal to number2? I predict False.");
console.log(number1 === number2);
console.log("Is number1 not equal to number2? I predict True.");
console.log(number1 !== number2);

// 25- Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
//• Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.

//• Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)

// Define the variable for alien's color
let alien_color: string = 'green';

// Check if the alien's color is green
if (alien_color === 'green') {
    // Print a message that the player earned 5 points
    console.log("Congratulations! You just earned 5 points!");
}

// Define the variable for alien's color
let alien_color1: string = 'red';

// Check if the alien's color is green
if (alien_color1 === 'green') {
    // Print a message that the player earned 5 points
    console.log("Congratulations! You just earned 5 points!");
}

//26 - Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
//• If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.

//• If the alien’s color isn’t green, print a statement that the player just earned 10 points.

//• Write one version of this program that runs the if block and another that runs the else block;

// Define the variable for alien's color
let alien_color3: string = 'green';

// Check if the alien's color is green
if (alien_color3 === 'green') {
    // Print a message that the player earned 5 points
    console.log("Congratulations! You just earned 5 points for shooting the green alien.");
} else {
    // Print a message that the player earned 10 points
    console.log("Congratulations! You just earned 10 points for shooting the non-green alien.");
}
// Define the variable for alien's color
let alien_color4: string = 'red';

// Check if the alien's color is green
if (alien_color4 === 'green') {
    // Print a message that the player earned 5 points
    console.log("Congratulations! You just earned 5 points for shooting the green alien.");
} else {
    // Print a message that the player earned 10 points
    console.log("Congratulations! You just earned 10 points for shooting the non-green alien.");
}

//27 - Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
//• If the alien is green, print a message that the player earned 5 points.

//• If the alien is yellow, print a message that the player earned 10 points.

//• If the alien is red, print a message that the player earned 15 points.

//• Write three versions of this program, making sure each message is printed for the appropriate color alien.


// Define the variable for alien's color
let alien_color5: string = 'green';

// Check if the alien's color is green
if (alien_color5 === 'green') {
    // Print a message that the player earned 5 points
    console.log("Congratulations! You just earned 5 points for shooting the green alien.");
} else if (alien_color5 === 'yellow') {
    // Print a message that the player earned 10 points
    console.log("Congratulations! You just earned 10 points for shooting the yellow alien.");
} else if (alien_color5 === 'red') {
    // Print a message that the player earned 15 points
    console.log("Congratulations! You just earned 15 points for shooting the red alien.");
}
// Define the variable for alien's color
let alien_color6: string = 'yellow';

// Check if the alien's color is green
if (alien_color6 === 'green') {
    // Print a message that the player earned 5 points
    console.log("Congratulations! You just earned 5 points for shooting the green alien.");
} else if (alien_color6 === 'yellow') {
    // Print a message that the player earned 10 points
    console.log("Congratulations! You just earned 10 points for shooting the yellow alien.");
} else if (alien_color6 === 'red') {
    // Print a message that the player earned 15 points
    console.log("Congratulations! You just earned 15 points for shooting the red alien.");
}
// Define the variable for alien's color
let alien_color7: string = 'red';

// Check if the alien's color is green
if (alien_color7 === 'green') {
    // Print a message that the player earned 5 points
    console.log("Congratulations! You just earned 5 points for shooting the green alien.");
} else if (alien_color7 === 'yellow') {
    // Print a message that the player earned 10 points
    console.log("Congratulations! You just earned 10 points for shooting the yellow alien.");
} else if (alien_color7 === 'red') {
    // Print a message that the player earned 15 points
    console.log("Congratulations! You just earned 15 points for shooting the red alien.");
}

//Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
//• If the person is less than 2 years old, print a message that the person is a baby.

//• If the person is at least 2 years old but less than 4, print a message that the person is a toddler.

//• If the person is at least 4 years old but less than 13, print a message that the person is a kid.

//• If the person is at least 13 years old but less than 20, print a message that the person is a teenager.

//• If the person is at least 20 years old but less than 65, print a message that the person is an adult.

//• If the person is age 65 or older, print a message that the person is an elder

// Set the value for the variable age
let age: number = 30;

// Determine the person's stage of life
if (age < 2) {
    console.log("The person is a baby.");
} else if (age >= 2 && age < 4) {
    console.log("The person is a toddler.");
} else if (age >= 4 && age < 13) {
    console.log("The person is a kid.");
} else if (age >= 13 && age < 20) {
    console.log("The person is a teenager.");
} else if (age >= 20 && age < 65) {
    console.log("The person is an adult.");
} else {
    console.log("The person is an elder.");
}


//29-- Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
//• Make a array of your three favorite fruits and call it favorite_fruits.

//• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas
// Define an array of favorite fruits
let favorite_fruits: string[] = ['apple', 'banana', 'mango'];

// Check if 'apple' is in the array
if (favorite_fruits.includes('apple')) {
    console.log("You really like apples.");
}

// Check if 'banana' is in the array
if (favorite_fruits.includes('banana')) {
    console.log("You really like bananas.");
}

// Check if 'mango' is in the array
if (favorite_fruits.includes('mango')) {
    console.log("You really like mangoes.");
}

// Check if 'strawberry' is in the array
if (favorite_fruits.includes('strawberry')) {
    console.log("You really like strawberries.");
}

// Check if 'kiwi' is in the array
if (favorite_fruits.includes('kiwi')) {
    console.log("You really like kiwis.");
}

//30-- Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
//• If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?

//• Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again,
// Define an array of usernames
let usernames: string[] = ['admin', 'ahsan', 'Ali', 'Babar', 'Junaid'];

// Loop through the array and print greetings
for (let username of usernames) {
    // Check if the username is 'admin'
    if (username === 'admin') {
        console.log("Hello admin, would you like to see a status report?");
    } else {
        console.log(`Hello ${username}, thank you for logging in again.`);
    }
}


//- 31 - No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
//• If the list is empty, print the message We need to find some users!

//• Remove all of the usernames from your array, and make sure the correct message is printed// Define an array of usernames
let usernames1: string[] = [];

// Check if the array is empty
if (usernames.length === 0) {
    console.log("We need to find some users!");
} else {
    // Loop through the array and print greetings
    for (let usernames1 of usernames) {
        // Check if the username is 'admin'
        if (usernames1 === 'admin') {
            console.log("Hello admin, would you like to see a status report?");
        } else {
            console.log(`Hello ${usernames1}, thank you for logging in again.`);
        }
    }
}

//Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
//• Make a list of five or more usernames called current_users.

//• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

//• Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.

//• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.

// Define an array of current usernames
let current_users: string[] = ['junaid', 'ali', 'bahadur', 'khan', 'imran'];

// Define an array of new usernames
let new_users: string[] = ['tariq', 'shoiab', 'sarah', 'Jallel', 'mohammad'];

// Convert all usernames to lowercase for case-insensitive comparison
let current_users_lower: string[] = current_users.map(username => username.toLowerCase());

// Loop through the new_users list to check for uniqueness
for (let new_user of new_users) {
    // Convert the new username to lowercase for case-insensitive comparison
    let new_user_lower: string = new_user.toLowerCase();
    
    // Check if the new username is already in use
    if (current_users_lower.includes(new_user_lower)) {
        console.log(`Sorry, the username '${new_user}' is already taken. Please enter a new username.`);
    } else {
        console.log(`Congratulations! The username '${new_user}' is available.`);
    }
}

//33- Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
//• Store the numbers 1 through 9 in a array.

//• Loop through the array.

//• Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line
// Store the numbers 1 through 9 in an array
let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Loop through the array
for (let number of numbers) {
    // Check the last digit of the number to determine the proper ordinal ending
    if (number === 1) {
        console.log(`${number}st`);
    } else if (number === 2) {
        console.log(`${number}nd`);
    } else if (number === 3) {
        console.log(`${number}rd`);
    } else {
        console.log(`${number}th`);
    }
}

//34- Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
//• Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.

//• Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!

// Store the names of your favorite pizzas in an array
let favorite_pizzas: string[] = ['Pepperoni', 'Margherita', 'BBQ Chicken'];

// Print the name of each pizza using a for loop
for (let pizza of favorite_pizzas) {
    console.log(`I like ${pizza} pizza.`);
}

// Print a sentence stating how much you like pizza
console.log("I really love pizza!");


//35- Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet.
// Store the names of three different animals in an array
let animals: string[] = ['dog', 'cat', 'rabbit'];

// Print a statement about each animal
for (let animal of animals) {
    console.log(`A ${animal} would make a great pet.`);
}

// Print a statement about what these animals have in common
console.log("Any of these animals would make a great pet.");


// 36- T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
// Define the make_shirt function
function make_shirt(size: string, message: string): void {
    console.log(`A ${size} shirt will be printed with the following message: "${message}".`);
}

// Call the make_shirt function
make_shirt('Large', 'Hello, World!');

// //37 - Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message;
// Define the make_shirt function with default parameters
function make_shirt1(size: string = 'Large', message: string = 'I love TypeScript'): void {
    console.log(`A ${size} shirt will be printed with the following message: "${message}".`);
}

// Call the make_shirt function with default parameters
make_shirt1(); // Large shirt with default message
make_shirt1('Medium'); // Medium shirt with default message
make_shirt1('Small', 'Hello, World!'); // Custom shirt with a different message.

//38- Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.
// Define the describe_city function with a default parameter for country
function describe_city(city: string, country: string = 'Pakistan'): void {
    console.log(`${city} is in ${country}.`);
}

// Call the describe_city function for three different cities
describe_city('Karachi'); // Karachi is in Pakistan
describe_city('Lahore'); // Lahore is in Pakistan
describe_city('New York', 'USA'); // New York is in USA


//39- City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this.
// Define the city_country function
function city_country(city: string, country: string): string {
    return `${city}, ${country}`;
}

// Call the city_country function with different cities and countries
console.log(city_country('Karachi', 'Pakistan')); // Output: Karachi, Pakistan
console.log(city_country('Tokyo', 'Japan')); // Output: Tokyo, Japan
console.log(city_country('Paris', 'France')); // Output: Paris, France


//40- Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album,
function makeAlbum(artist: string, title: string, songs?: number): AlbumInfo {

    const albumInfo: AlbumInfo = {  
      artist: artist,
      title: title,
    };
    if (songs) {  
      albumInfo.songs = songs;  
    }
    return albumInfo;  
  }
  
  
  interface AlbumInfo {
    artist: string;
    title: string;
    songs?: number;  
  }
  
  // Let's create some album "boxes"
  const album1 = makeAlbum('Queen', 'A Night at the Opera');
  const album2 = makeAlbum('Nirvana', 'Nevermind', 12);  
  const album3 = makeAlbum('Fleetwood Mac', 'Rumours');
  
//   Print the contents of each "box" (album info)
  console.log(album1);
  console.log(album2);
  console.log(album3);
  

//42- Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array,
// Define the show_magicians function
function show_magicians1(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}

// Create an array of magician's names
let magicians1: string[] = ['Maaz', 'Gazanfar', 'Harry Potter', 'Daniyal'];

// Call the show_magicians function with the array of magician's names
show_magicians1(magicians1);


//42- Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified,
// Define the show_magicians function
function show_magicians2(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}

// Define the make_great function
function make_great1(magicians: string[]): string[] {
    let great_magicians: string[] = [];
    for (let magician of magicians) {
        great_magicians.push(`the Great ${magician}`);
    }
    return great_magicians;
}

// Create an array of magician's names
let magicians: string[] = ['Maaz', 'Gazanfar', 'Harry Potter', 'Daniyal'];

// Call the make_great function to modify the array of magicians
magicians = make_great1(magicians);

// Call the show_magicians function to see the modified list of magicians
show_magicians2(magicians);

//43- Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
// Define the show_magicians function
function show_magicians3(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}

// Define the make_great function
function make_great(magicians: string[]): string[] {
    let great_magicians: string[] = [];
    for (let magician of magicians) {
        great_magicians.push(`the Great ${magician}`);
    }
    return great_magicians;
}

// Create an array of magician's names
let original_magicians: string[] = ['Maaz', 'Gazanfar', 'Harry Potter', 'Daniyal'];

// Create a copy of the original array of magician's names
let copied_magicians: string[] = [...original_magicians];

// Call the make_great function with the copied array to modify it
let great_magicians: string[] = make_great(copied_magicians);

// Call the show_magicians function with the original and modified arrays
console.log("Original Magicians:");
show_magicians3(original_magicians);
console.log("\nGreat Magicians:");
show_magicians3(great_magicians);

//44- Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.

// Define the function to create a sandwich
function make_sandwich(...items: string[]): void {
    console.log("Sandwich Summary:");
    if (items.length === 0) {
        console.log("You ordered an empty sandwich. Please add some items.");
    } else {
        console.log("You ordered a sandwich with the following items:");
        for (let item of items) {
            console.log("- " + item);
        }
    }
    console.log(); 
}

// Call the function three times with different numbers of arguments
make_sandwich('Ham', 'Cheese', 'salad', 'Tomato');
make_sandwich('Peanut Butter', 'Jelly');
make_sandwich();

// 45- Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
// Define the function to store car information


function store_car(manufacturer: string, model: string, ...options: { [key: string]: any }[]): { manufacturer: string, model: string, [key: string]: any } {
    let carInfo :any= { manufacturer: manufacturer, model: model };
    

    for (let option of options) {
        for (let key in option) {
            carInfo[key] = option[key];
        }
    }
    
    return carInfo;
}

let car = store_car('Toyota', 'Corolla', { color: 'Red' }, { year: 2022 });


console.log(car);

