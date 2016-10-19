
function bear(type, says) {
    console.log(arguments[0])
    console.log(arguments[1])
    //console.log(this)
    return 'The ' + type + ' bear says: ' + says
}



console.log(bear('grizzly', 'grr'))


function dog(type, says) {
    console.log(arguments[0])
    console.log(arguments[1])
    console.log(this)
    return 'The ' + type + ' dog says: ' + says
}


// console.log(dog('golden retriever', 'wof'))


var context = {
    type: 'bull dog'
}


// fisrt way to change the context
console.log(dog.call(context, 'golden retriever', 'wof'))
// second way to change the context
console.log(dog.apply(context, ['golden retriever', 'wof']))
// third way to change the context
dog = dog.bind(context)
console.log(dog('golden retriever', 'wof'))


