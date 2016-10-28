
function Person(){
    this.name = "Person";
    this.lastName = "Person";
    this.getFullName = function() {
        return "Person__ " + this.name + " " + this.lastName;
    };
    this.setName = function(name) {
        this.name = name;
    };
    this.setLastName = function(lastName) {
        this.lastName = lastName;
    };
}



function Developer(){
    var language = "javascript";
    var name = "Developer";
    var lastName = "Developer";
    this.getFullName = function() {
        return "Developer__ " + name + " " + lastName;
    };
    this.getLanguage = function(){
        return language;
    };
    this.setName = setName;
    this.setLastName = setLastName;
}


var setName = function(name) {
    this.name = name;
};

var setLastName = function(lastName) {
    this.lastName = lastName;
};



var musician = new Person();

musician.age = 50;


console.log("name: " + musician.name);
console.log("lastName: " + musician.lastName);
console.log("ege: " + musician.age);
console.log("fullName: " + musician.getFullName());
console.log("setName, setLastName ***********");
//console.log("getName: " + musician.getName());
musician.setName("James");
musician.setLastName("Hetfield");
console.log("name: " + musician.name);
console.log("lastName: " + musician.lastName);
console.log("ege: " + musician.age);
console.log("fullName: " + musician.getFullName());






var developer  = new Developer();

console.log("name: " + developer.name);
console.log("lastName: " + developer.lastName);
console.log("ege: " + developer.age);
console.log("language: " + developer.getLanguage());
console.log("fullName: " + developer.getFullName());
console.log("setName, setLastName ***********");
developer.setName("Linus");
developer.setLastName("Torvalds");
console.log("name: " + developer.name);
console.log("lastName: " + developer.lastName);
console.log("ege: " + developer.age);
console.log("language: " + developer.getLanguage());
console.log("fullName: " + developer.getFullName());
