function create_car(Manufacturer, model, ...options){
    let car = {
        manufacturer : Manufacturer,
        model : model
    };
    options.forEach(option => {
        let [key , value] = option.split(":")
        car [key.trim()] = value.trim()
    });

    return car;
    

}

let my_car = create_car("Toyota","Corolla","Color: Black","sunroof:True");

console.log(my_car)