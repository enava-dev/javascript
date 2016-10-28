

var contact = {};

var Person = {
    firstName: "Steve",
    lastName: "Jobs",
    getFullName: function(){
        return this.firstName + " " + this.lastName;
    }
};

console.log("literal object *****************");
console.log("typeof contact: " + typeof(contact));
console.log("typeof Person: " + typeof(Person));
console.log("firstName: " + Person.firstName);
console.log("lastName: " + Person.lastName);
console.log("fullName: " + Person.getFullName());


console.log("create new Person ***************");
var microsft = Person;
microsft.firstName = "Bill";
microsft.lastName = "Gates";


console.log("firstName: " + microsft.firstName);
console.log("lastName: " + microsft.lastName);
console.log("fullName: " + microsft.getFullName());


console.log("the original person *****************");
console.log("firstName: " + Person.firstName);
console.log("lastName: " + Person.lastName);
console.log("fullName: " + Person.getFullName());


//console.log("create new Person ***************");
//var linux = new Person();
//linux.firstName = "Linus";
//linux.lastName = "Tolvars";


//console.log("firstName: " + microsft.firstName);
//console.log("lastName: " + microsft.lastName);
//console.log("fullName: " + microsft.getFullName());
