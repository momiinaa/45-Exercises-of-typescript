// creating a Gueslist array
var Guestlist = ["Momina", "Umer", "Bilal", "Muhammad"];
// Making variable for those Guests who cant come
var dontcome = Guestlist[0];
// print the name of Guest who cant come
console.log(dontcome, "Nahi aa skti");
// add or remove Guest   from Guest list array
Guestlist.splice(0, 1, "Shazil");
// message print for bigger table
console.log("Good News ! We have found a bigger table for dinner.");
// adding a new Guest  at starting index of  array
Guestlist.unshift("Abdullah");
// adding a new  Guest at ending index of array
Guestlist.push("faaz");
// get a Middlex index of our Guest list array
var Middleindex = Math.floor(Guestlist.length / 2);
// adding a new guest to Middle index of array
Guestlist.splice(Middleindex, 0, "Ahmed");
// print message for updated lists
console.log("Updated lists of our Guests");
// sending a invitation message to our Guest one by one with thier names
Guestlist.forEach(function (oneguest) { return console.log("Salam ".concat(oneguest, ",Would you like to dinner with me ?")); });
