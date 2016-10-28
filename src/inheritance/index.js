
function Bear(type){
    this.type = type;
}

Bear.prototype.growl = function(){
    console.log('The ' + this.type + 'bear says grr');
};

function Grizzly(){
    Bear.call(this,'grizzly');
}

Grizzly.prototype = Object.create(Bear.prototype);

var grizzly = new Grizzly();
var polar = new Bear('polar');

console.log(grizzly.growl(), polar.growl());
