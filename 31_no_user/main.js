var userNames = ["Momina", "Umer", "Admin", "Bilal", "Faaz"];
//userNames =[]
if (userNames.length === 0) {
    console.log("your array is empty we have to fine some users.");
}
else {
    userNames.forEach(function (oneuser) {
        if (oneuser === "Admin") {
            console.log("Hello ".concat(oneuser, ", would you like to see a status report?"));
        }
        else {
            console.log("Hello ".concat(oneuser, " thankyou for logging in again"));
        }
    });
}
