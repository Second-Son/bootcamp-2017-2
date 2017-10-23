var a = "halo";
var b = "Halo";

if (a == b) {
    console.log("perbandingan sama")
} else if (a == "hello") {
    console.log("perbandingan else if")
} else {
    console.log("perbandingan tidak ada yang sama");
}

a = 10;
b = "10";

if (a === b) {
    console.log("perbandingan sama")
} else if (a == "hello") {
    console.log("perbandingan else if")
} else {
    console.log("perbandingan tidak ada yang sama");
}

a = "10";
b = "10";

if (a === b) {
    console.log("perbandingan sama")
} else if (a === b) {
    console.log("perbandingan else if")
} else {
    console.log("perbandingan tidak ada yang sama");
}

switch (a) {
    case b :
        console.log("sama dengan b");
        break;
    default :
        console.log("tidak sama");
}

switch (a) {
    case "01" :
        console.log("sama dangan 01");
    case b :
        console.log("sama dengan b");
        break;
    default :
        console.log("tidak sama");
}

// perulangan
for (i = 0; i < 10; i++) {
    // console.log("data ke - " + i);
}

i = 0;
do {
    // console.log("data ke - " + i);
    i++;
} while (i < 10);

i = 0;
while (i < 10) {
    i++;
    // console.log("data ke - " + i);
}

list = ["Dimas", "Adip", "rega", "zaka", "yusuf", "hadi"];

for (var person in list) {
    console.log("nilai dari index ke " + person + " adalah " + list[person]);
}

// list.forEach((p) => {
//     console.log(p);
// })