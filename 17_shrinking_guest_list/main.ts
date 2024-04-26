// creating a Gueslist array
let Guestlist = ["Momina","Umer","Bilal","Muhammad"];

// Making variable for those Guests who cant come
let dontcome = Guestlist [0];

// print the name of Guest who cant come
console.log(dontcome, "Nahi aa skti");

// add or remove Guest   from Guest list array
Guestlist.splice(0,1 ,"Shazil");

// message print for bigger table
console.log("Good News ! We have found a bigger table for dinner.");

// adding a new Guest  at starting index of  array
Guestlist.unshift("Abdullah");

// adding a new  Guest at ending index of array
Guestlist.push("faaz");

// get a Middlex index of our Guest list array
let Middleindex: number =Math.floor (Guestlist.length / 2);

// adding a new guest to Middle index of array
Guestlist.splice(Middleindex, 0, "Ahmed" );

// print message for updated lists
console.log("Updated lists of our Guests");

// sending a invitation message to our Guest one by one with thier names
Guestlist.forEach(oneguest => console.log(`Salam ${oneguest},Would you like to dinner with me ?`));


// infrom that only two guests are invited on dinner
console.log("unfortunately,the new dinner table wont arrive on time,so i can only invite two Guests to dinner with me");

// using while_loop to remove guests from the array until only two names remain
while(Guestlist.length > 2) {  
    let removedGuest = Guestlist.pop() 
    console.log(`sorry, ${removedGuest} i can invite you to dinner`);                                                                                     
}
// sending a invitation to the last two guests on the list
console.log("Invitation to the last two Guests");

Guestlist.forEach(lasttwo => console.log(`luckily ${lasttwo}you are still invited to dinner`));

// removing last two guests from the list
Guestlist.pop();
Guestlist.pop();