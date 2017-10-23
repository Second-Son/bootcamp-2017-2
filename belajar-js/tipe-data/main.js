// tipe data number
var a = 10;
console.log(a + " tipe data dari variable a " + typeof (a));

a = 10 + 20;
b = 30 - 10;
c = 10.5 * 1.0;
d = 10 / 0;

console.log("hasil 10 + 20 = " + a);
console.log("hasil 30 - 10 = " + b);
console.log("hasil 10.5 * 1.0 = " + c);
console.log("hasil 10 / 0 = " + d);

a = 20.5 - 10;
console.log("hasil 10 + 10 = " + a + " tipedata var a  " + typeof (a));

// string with concatenation
a = "10" + 10;
console.log("hasil 10 + 10 = " + a + " tipedata var a  " + typeof (a));

// boolean
a = false;
b = true;
console.log("false and benar = " + (a && b));
a = true
console.log("benar and benar = " + (a && b));
b = false
console.log("benar and salah = " + (a && b));
a = false;
b = false;
console.log("salah and salah = " + (a && b));

a = false;
b = true;
console.log("false or benar = " + (a || b));
a = true
console.log("benar or benar = " + (a || b));
b = false
console.log("benar or salah = " + (a || b));
a = false;
b = false;
console.log("salah or salah = " + (a || b));

a = true;
console.log("negasi dari var a = " + (!a));

// array
a = [1, 2, "3", "Empat"];
for (var i = 0; i > a.length; i++) {
    console.log(a[i] + " tipe data " + typeof (a[i]));
}

a = {
    1: "Dimas Maryanto",
    alamat: "Jl. bukit indah no b8",
    rt: 10,
    rw: 18
}

// cara panggil properti dalam object a
console.log("nilai object a.nama = " + a.alamat);
// cara panggil properti dalam object a dengan id ref
console.log("nilai object a['nama'] = " + a[1]);

b = {
    nama: "Dimas Maryanto",
    person: this.a
}
console.log("nilai object b.person = " + b.person.rw);

b = null;
console.log("tipe data null adalah " + typeof (b));

nama = undefined;

console.log("variable dengan nama is availabled? " + nama);