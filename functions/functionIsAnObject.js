

function bear() {
    return 'grr'
}


bear.type = 'bear'

console.log(bear.type)
console.log(bear())




/*
* example2
*/

function Bear(type) {
    this.type = type
}

Bear.growl = function() {
    return 'The bear says grr'
}


var grizzly = new Bear('grizzly')
var polar = new Bear('polar')

console.log(grizzly, polar)
console.log(grizzly.growl())
