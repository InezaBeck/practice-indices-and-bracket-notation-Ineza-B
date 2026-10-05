let seriesLibrary = [
    ["Arrested Development", "Atypical", "Criminal Minds"],
    ["Outer Banks", "Physical 100", "Prison Break"],
    ["Resident Alien", "Suits", "The Blacklist"]
];

console.log("");
console.log("Printed using numbers:");
console.log(seriesLibrary[0][0]);
console.log(seriesLibrary[0][1]);
console.log(seriesLibrary[0][2]);
console.log(seriesLibrary[1][0]);
console.log(seriesLibrary[1][1]);
console.log(seriesLibrary[1][2]);
console.log(seriesLibrary[2][0]);
console.log(seriesLibrary[2][1]);
console.log(seriesLibrary[2][2]);
console.log("");

console.log("Printed using variables:");
for (let row = 0; row < seriesLibrary.length; row++) {
    for (let item = 0; item < seriesLibrary[row].length; item++) {
        console.log(seriesLibrary[row][item]);
    }
}
console.log("");

console.log("The second shelf:");
for (let item = 0; item < seriesLibrary[1].length; item++) {
    console.log(seriesLibrary[1][item]);
}