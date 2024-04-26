function makesandwich (...items : string[]){
    console.log("\n Making a sandwich with the following items : \n");
    items.forEach(singleItem => console.log(singleItem));
    console.log("\n Now enjoy your sandwich")
}

makesandwich("Chicken","Cheese","Mayo","Egg")

makesandwich("Bread","Butter")

makesandwich("Bread","Cheese","Mayo","Chicken","Egg","Lecttuce","Tomato")