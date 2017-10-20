

var len = 13;

function processArray(myArray){
    console.log('inside processArray');
    console.log('fisrt len: ' + len);
    var len = myArray.length;
    console.log('second len: ' + len);
}



processArray([1,2,3]);

console.log('outside processArray');
console.log('final len: ' + len);