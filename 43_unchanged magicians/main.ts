function show_magicians(magicians : string[]){
    magicians.forEach(name => console.log(name));
}


function make_great(magician : string[]){
     return magicians_name.map(name => `The Great ${name}`)
}

let magicians_name =["harry potter","momina","qadir"];

let copy_magician_names = magicians_name.slice()

let copy_great_magicians = make_great(copy_magician_names)

show_magicians(magicians_name)

show_magicians(copy_great_magicians)
