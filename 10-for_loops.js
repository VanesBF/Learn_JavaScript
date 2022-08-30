console.log("*************************** fori *******************")


// Print the number from 0 to 10
for (let i=0; i<=10; i++){
    console.log(i);
}

// Loop into an array

let names = [
    "Abdel",
    "Aziz",
    "Kamo",
    "Megna"
];

for (let i=0; i<names.length; i++){
    console.log(names[i]);
}

console.log("*************************** forof *******************")

for (const name of names) {
    console.log(name);
}

console.log("*************************** forEach *******************")

names.forEach(function(name){
    console.log(name);
})