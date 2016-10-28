
var Person = {
    firstName: '',
    lastName: '',
    age: '',
}

Person.getFullName = function(){
    return this.firstName + ' ' + this.lastName
}

Person.getInfo = function(){
    return this.getFullName() + 'is ' + this.age + ' years old'
}

var enava = Object.create(Person)
enava.firstName = 'emmanuel'
enava.lastName = 'nava'
enava.age = 29

console.log(enava.getFullName())
console.log(enava.getInfo())