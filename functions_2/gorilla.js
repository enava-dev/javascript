
function Gorilla(){
    console.log("inside Gorilla");
    console.log("Gorilla this:", this);
    this.hasBanana = false;
    this.eat = function(numBananas){
        console.log("inside Gorilla.eat");
        console.log("numBananas: ", numBananas);
        console.log("numBananas.this: ", this);
        if(numBananas > 0){
            this.hasBanana = true;
        }
        console.log("hasBanana: ", this.hasBanana);
    };
}


var gorilla = new Gorilla();
gorilla.eat(1);
