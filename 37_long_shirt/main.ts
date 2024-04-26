function make_shirt (size : string = "medium",printmessage : string = "i love typescript"){
    console.log(`creating a ${size} size shirt with the ${printmessage} prints on shirt`)
}

// calling a fucntion now with medium size and default message
make_shirt();

make_shirt("large","i love javascript")

make_shirt("small")