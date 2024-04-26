function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
function make_great(magician) {
    return magicians_name.map(function (name) { return "The Great ".concat(name); });
}
var magicians_name = ["harry potter", "momina", "qadir"];
var copy_magician_names = magicians_name.slice();
var copy_great_magicians = make_great(copy_magician_names);
show_magicians(magicians_name);
show_magicians(copy_great_magicians);
