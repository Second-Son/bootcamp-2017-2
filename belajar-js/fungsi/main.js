function sayHalo(nama = "Dimas", umur = 20) {
    console.log("Halo nama saya " + nama + " umurnya " + umur);
}

sayHalo();
sayHalo("Hadi");

var pertambahan = function hitung(a, b) {
    return a + b;
}

console.log("a + b = " + pertambahan(10, 20));

var a = function (bil1, bil2) {
    return bil1 + bil2;
}

console.log("a = " + a(10, 25) + " tipedata var a " + typeof (a));

document.write("say halo " +
    a(
        parseInt(prompt("input bilangan ke 1")),
        parseInt(prompt("input bilangan ke 2"))
    )
);


