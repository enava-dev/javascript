
var createBear = require('./bear.js')


var grizzly = createBear({
    type: 'grizzly',
    say: 'grr',
})


console.log(grizzly.growl())


// var polar = new Bear()
// console.log(polar)