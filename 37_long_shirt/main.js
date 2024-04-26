function make_shirt(size, printmessage) {
    if (size === void 0) { size = "medium"; }
    if (printmessage === void 0) { printmessage = "i love typescript"; }
    console.log("creating a ".concat(size, " size shirt with the ").concat(printmessage, " prints on shirt"));
}
// calling a fucntion now with medium size and default message
make_shirt();
make_shirt("large", "i love javascript");
make_shirt("small");
