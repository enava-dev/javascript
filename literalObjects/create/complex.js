var Person = {
    firstName: '',
    lastName: '',
    age: '',
    address: '',
}

Person.getFullName = function(){
    return this.firstName + ' ' + this.lastName
}

Person.getInfo = function(){
    return this.getFullName() + ' is ' + this.age + ' years old'
}


var enava = Object.create(Person);
enava.firstName = 'emmanuel'
enava.lastName = 'nava'
enava.age = 29

console.log(enava.getFullName())
console.log(enava.getInfo())



var Address = {
    country: '',
    state: '',
    street: '',
    number: '',
}

Address.getCountry = function(){
    return this.country + ' ' + this.state
}

Address.getStreet = function(){
    return this.street + ' ' + this.number
}

Address.getAddress = function(){
    return this.getCountry() + ' ' + this.getStreet()
}

var addr = Object.create(Address)
addr.country = 'México'
addr.state = 'D.F.'
addr.street = 'Insurgetnes'
addr.number = 1800

enava.address = addr

// console.log(addr.getAddress())
console.log(enava.address.getAddress())