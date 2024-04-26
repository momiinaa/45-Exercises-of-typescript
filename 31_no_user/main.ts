let userNames = ["Momina","Umer","Admin","Bilal","Faaz"];

userNames =[]

if(userNames.length === 0){
    console.log("your array is empty we have to fine some users.")
}else{
    userNames.forEach(oneuser => {
        if(oneuser === "Admin"){
console.log(`Hello ${oneuser}, would you like to see a status report?`)
        }else{
            console.log(`Hello ${oneuser} thankyou for logging in again`)
        }
    })
}