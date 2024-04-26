function show_magicians(magicians : string[]){
    magicians.forEach(name => console.log(name));
}


function make_great(magician : string[]){
     return magicians_name.map(name => `The Great ${name}`)
}

let magicians_name =["harry potter","momina","qadir"];

let great_magicians = make_great(magicians_name);

show_magicians(great_magicians)
