
function AccessModifiers(){

    var _privateProperty = 'privateProperty';
    this.publicProperty = 'publicProperty';

    function _privateMethod(){
        return 'this is a private method';
    };

    this.publicMethod = function(){
        return 'this is a public method';
    };

}

var ac = new AccessModifiers();

console.log('public property: ' + ac.publicProperty);
console.log('private property: ' + ac._privateProperty);

console.log('public method: ' + ac.publicMethod());
console.log('private method: ' + ac._privateMethod());
