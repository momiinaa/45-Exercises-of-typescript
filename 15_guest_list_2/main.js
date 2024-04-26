var GuestList = ["Momina", "Umer", "Bilal", "Muhammad"];
var DontCome = GuestList[0];
console.log(DontCome, "Nahi A Skti");
GuestList.splice(0, 1, "Shazil");
GuestList.forEach(function (guest) { return console.log("salam ".concat(guest, ", would you like to dinner with me?")); });
