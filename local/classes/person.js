

// var Person = function(name, lastName){
function Person(name, lastName) {
    this.name = name;
    this.lastName = lastName;
}

Person.prototype.getFullName = function(){
    return this.name + " " + this.lastName;
};


var linux = new Person("Linus", "Tolvars");

linux.age = 40;

console.log("name: " + linux.name);
console.log("last name: " + linux.lastName);
console.log("full name: " + linux.getFullName());
console.log("age: " + linux.age);

linux.getFullName = function(){
    return "Override" + " " + this.name + " " + this.lastName + " " + this.age;
};


console.log("override full name: " + linux.getFullName());

var apple = new Person("Steve" , "Jobs");

console.log("name: " + apple.name);
console.log("last name: " + apple.lastName);
console.log("full name: " + apple.getFullName());
console.log("age: " + apple.age);
