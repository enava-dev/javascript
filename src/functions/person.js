
function Person(){
  this.getFullName = function () {
    console.log(this.name + ' ' + this.lastName);
  };
}


var per = new Person();
per.name = 'Emmanuel';
per.lastName = 'Nava';

per.getFullName();
