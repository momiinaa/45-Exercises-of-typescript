function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
function make_great(magician) {
    return magicians_name.map(function (name) { return "The Great ".concat(name); });
}
var magicians_name = ["harry potter", "momina", "qadir"];
var great_magicians = make_great(magicians_name);
show_magicians(great_magicians);
