
function Bear(type) {
    this.type = type
}

Bear.prototype.growl = function() {
    console.log('The ' + this.type + ' bear says grr')
}


var grizzly = new Bear('grizzly')
var polar = new Bear('polar')

console.log(grizzly.growl(), polar.growl())







function Grizzly() {
    // </> super()
    Bear.call(this, 'grizzly')
}


// everything to apply to Bear.prototype also apply to Grizzly prototype
Grizzly.prototype = Object.create(Bear.prototype)



var grizzly = new Grizzly()


console.log(grizzly.growl(), polar.growl())



