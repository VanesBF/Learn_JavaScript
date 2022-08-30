let person = {
    firstName: "Jamila",
    age: 21,
    isFemale: true,
    balance: 100.32,
    date: new Date(2022, 0, 11).toLocaleDateString(), // This is how we use a date inside an object

    // nexted object
    address: {
        city: "London",
        postCode: "SW9"
    }
};


console.log(person.firstName)
console.log(person.address.city)

console.log(Object.values(person))
console.log(Object.keys(person))
console.log(JSON.stringify(person))
