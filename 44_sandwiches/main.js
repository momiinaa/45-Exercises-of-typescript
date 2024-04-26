function makesandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("\n Making a sandwich with the following items : \n");
    items.forEach(function (singleItem) { return console.log(singleItem); });
    console.log("\n Now enjoy your sandwich");
}
makesandwich("Chicken", "Cheese", "Mayo", "Egg");
makesandwich("Bread", "Butter");
makesandwich("Bread", "Cheese", "Mayo", "Chicken", "Egg", "Lecttuce", "Tomato");
