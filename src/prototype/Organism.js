
var Organism = Object.create(null);


Organism.name = "ONU";


console.log("name: " + Organism.name);


Organism.prototype.getName = function(){
    return this.name;
};


console.log("getName: " + Organism.getName());

