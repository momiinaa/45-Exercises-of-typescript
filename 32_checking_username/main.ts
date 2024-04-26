let current_users = ["Momina","Umer","Bila","Faaz","Ahmed"];

let new_users = ["Hamza","Momina","Umer","Qaswa","Muhammad"];

new_users.forEach(new_one_user => {
    let our_condition =current_users.some(current_one_user => current_one_user.toLowerCase() === new_one_user.toLowerCase())

    if(our_condition){
        console.log(`sorry ${new_one_user} is already taken!`)
    }else{
        console.log(`this username ${new_one_user} is avaliable`)
    }
})

