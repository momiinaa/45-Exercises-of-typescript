// making a array of countries and print its orginal order
let CountriesTovisit :string[] = ["Chine","Dennmark","Brazil","Argentina"];

console.log("Orginal order :",CountriesTovisit);

// print the array in alphabetic order with out modifying the actual array list
console.log("Alphabetical Order:",[...CountriesTovisit].sort());

// show that the array is still in its orginal order
console.log("still in orginal order :",CountriesTovisit);

// print the array in reversed order with out modifying the actual array list
console.log("Reverse order :",[...CountriesTovisit].reverse());

// show that the array is still in its orginal order
console.log("still in orginal order :",CountriesTovisit);

// we have changed the orginal array order now 
console.log("Orginal Array Reversed:",CountriesTovisit.reverse())

// print the array to show that its back to its orginal order
console.log("Back to orginal order:",CountriesTovisit.reverse());

// print the array to show that its order has been changed in alphabetic order now
console.log("sorted in alphabetic order :",CountriesTovisit.sort());

// we have changed the orginal order now in reverse order now
console.log("Orginal array reversed agin:",CountriesTovisit.reverse());