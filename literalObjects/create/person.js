
var Person = {
    firstName: '',
    lastName: '',
    age: ''
}

Person.getFullName = function(){
    return this.firstName + ' ' + this.lastName
}

Person.getInfo = function(){
    return this.getFullName() + ' is ' + this.age + ' years old'
}


var nava = Object.create(Person);
nava.firstName = 'emmanuel'
nava.lastName = 'nava'
nava.age = 29


console.log(nava.getInfo())


var beltran = Object.create(Person)
beltran.firstName = 'hessell'
beltran.lastName = 'beltran'
beltran.age = 24


console.log(beltran.getInfo())









