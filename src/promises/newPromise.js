'use strict';

const f = require('fs');

// function wrapPromise(arg) {
//   console.log('wrapPromise');
//   return new Promise(function(resolve, reject){

//     if (!arg) {
//       return reject('no arg');
//     }

//     return resolve(arg);
//   });
// }

function wrapPromise(arg) {
  return new Promise((resolve, reject) => {
    if (!arg) {
      return reject('no arg');
    }
    return resolve(arg);
  });
}


console.log('before call wrapPromise');
wrapPromise()
.then(
  function(response){
    console.log('wrapPromise resolve');
    console.log('### resolve');
    console.log('#### response');
    console.log(response);
  },
  function(err){
    console.log('wrapPromise reject');
    console.log('#### reject');
    console.log('#### error');
    console.log(err);
    return Promise.reject(err);
})
.catch(function(err){
  console.log('#### wrapPromise catch');
  console.log('#### err');
  console.log(err);
});
console.log('after call wrapPromise');