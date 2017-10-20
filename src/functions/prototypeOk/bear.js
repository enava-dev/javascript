function Bear(options) {
    if (!(this instanceof Bear)) {
        return new Bear(options)
    }
    options = options || {}
    this.type = options.type || 'bear'
    this.say = options.say || 'nothing'
}
module.exports = Bear

Bear.prototype.growl = function() {
    console.log('The ' + this.type + ' bear says ' + this.say)
}


