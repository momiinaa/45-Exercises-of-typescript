let GuestList = ["Momina","Umer","Bilal","Muhammad"];

let DontCome = GuestList[0];

console.log(DontCome,"Nahi A Skti");

GuestList.splice(0,1, "Shazil");

GuestList.forEach(guest => console.log(`salam ${guest}, would you like to dinner with me?`));