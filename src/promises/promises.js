'use strict';

const fetch = require('node-fetch');
const request = require('request');




// request.get('http://httpbin.org/get', (error, response, body) => {
//   if (error) {
//     console.error('Oh shoot. Something went wrong:');
//     console.error(error.message);
//     return;
//   }
 
//   console.log('Request done. Response status code: %d', response.statusCode);
// });



// request.get('http://httpbin.org/get', function(error, response, body){
//   if (error) {
//     console.error('Oh shoot. Something went wrong:');
//     console.error(error.message);
//     return;
//   }
 
//   console.log('Request done. Response status code: %d', response.statusCode);
//   console.log('resonse:', response);
//   console.log('body:', body);
// });





// fetch('http://httpbin.org/get')
// .then(response => {
//   console.log('Request using Promises done. Response status code: %d', response.status);
// })
// .catch(error => {
//   console.error('Oh shoot. Something went wrong with the promise code:');
//   console.error(error.message);
// });




function extractStatusCode(response) {
  console.log('extractStatusCode');
  // console.log('### response.status');
  // console.log('response.status');
  // console.log('#### response');
  // console.log(response);

  response = undefined;

  console.log('#### response.url');
  console.log(response.url);
  console.log('#### response.status');
  console.log(response.status);
  console.log('#### response.statusText');
  console.log(response.statusText);
  console.log('#### response.ok');
  console.log(response.ok);


  return response.status;
}


// console.log('before fetch');
// fetch('https://github.com/')
// .then(function(response){
//   console.log('first then');
//   console.log('#### response');
//   console.log(response);
//   extractStatusCode(response);
// })
// .then(function(statusCode){
//   console.log('second then');
//   console.log('#### statusCode');
//   console.log(statusCode);
// })
// .catch(function(error){
//   console.log('fetch');
//   console.log('catch');
//   console.log('#### error');
//   console.log(error);
// });
// console.log('after fetch');



// console.log('before fetch');
// fetch('http://github.com/')
// .then(response => {
//   console.log('fetch');
//   console.log('then');
//   // console.log('#### response');
//   // console.log(response);
//   console.log('#### response.url');
//   console.log(response.url);
//   console.log('#### response.status');
//   console.log(response.status);
//   console.log('#### response.statusText');
//   console.log(response.statusText);
//   console.log('#### response.ok');
//   console.log(response.ok);
// })
// .catch(error => {
//   console.log('fetch');
//   console.log('catch');
//   console.log('#### error');
//   console.log(error);
// });
// console.log('after fetch');



fetch('http://github.com/')
.then(
  function(response){
    console.log('first then');
    console.log('resolve');
    console.log('#### response');
    // console.log(response);
    console.log(response.status);
    extractStatusCode(response);
  },
  function(error){
    console.log('first then');
    console.log('reject');
    console.log('#### error');
    console.log(error);
    console.error('An error occurred in the fetch call.');
    console.error(error.message);
    // return null as response code since no request has been performed
    // return null;
    // throw new Error('my custom error');
    return Promise.reject(error);
})
.then(function(response){
  console.log('second then');
  console.log('resolve');
  console.log('#### response');
  console.log(response);
  response.n;
})
.catch(function(error){
  console.log('catch');
  console.log('#### error');
  console.log(error);
});