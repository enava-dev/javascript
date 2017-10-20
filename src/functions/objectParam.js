'use strict';

function simpleObject(obj){
    console.log('inside simpleObject');
    console.log('obj: ', obj);
    console.log('param1: ', obj.param1);
}


function declaredObject({param1}){
    console.log('inside declaredObject');
    console.log('param1: ', param1);
}


var myObj = {
    param2: 'param 2 text',
    param1: 'param 1 text'
}


simpleObject(myObj);
declaredObject(myObj);