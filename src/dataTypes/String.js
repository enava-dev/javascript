
var str = "javascript";

console.log("str: " + str);
console.log("str.length: " + str.length);
console.log("str.charAt(0): " + str.charAt(0));
console.log("str[1]: " + str[1]);

str = 'reassign string';
console.log("reassign str: " + str);



console.log("str.toUpperCase: " + str.toUpperCase());
console.log("str.toLowerCase: " + str.toLowerCase());


console.log("str.charAt(0).toUpperCase(): " + str.charAt(0).toUpperCase());
console.log("str: " + str);


var name = "john";
console.log("name: " + name);
var nameUpper = ucFisrt(name);
console.log("nameUpper: " + nameUpper);


function ucFisrt(str){
  var newStr = str.charAt(0).toUpperCase();
  for (var i = 1; i < str.length; i++) {
      newStr += str.charAt(i);
  }
  return newStr;
}



 str = "Widget with id";
 console.log("str.indexOf(\"Widget\"): " + str.indexOf("Widget")); //0
 console.log("str.indexOf(\"id\"): " + str.indexOf("id")); //1
 console.log("str.indexOf(\"id\", 2): " + str.indexOf("id", 2)); // 12
 console.log("str.indexOf(\"Lalalalala\"): " + str.indexOf("Lalalalala")); //-1



 checkSpam('buy ViAgRA now'); // == true
 checkSpam('free xxxxx'); /// == true
 checkSpam("innocent rabbit"); // == false


function checkSpam(str){
  str = str.toLowerCase();
  var res = str.indexOf('viagra') >= 0 || str.indexOf('xxx') >= 0;
  console.log('res: ', res);
}


str = 'stringify';
console.log('str: ', str);
console.log('str.substring(0,1): ', str.substring(0,1));
console.log('str.substring(0,-1): ', str.substring(0,1));
console.log('str.substring(2): ', str.substring(2));
console.log('str.substring(-2): ', str.substring(-2));
console.log('str.substring(2,4):', str.substring(2,4));
console.log('str.substring(2,-4):', str.substring(2,-4));


console.log('str.substr(0,1): ', str.substr(0,1));
console.log('str.substr(0,-1): ', str.substr(0,1));
console.log('str.substr(2): ', str.substr(2));
console.log('str.substr(-2): ', str.substr(-2));
console.log('str.substr(2,4):', str.substr(2,4));
console.log('str.substr(2,-4):', str.substr(2,-4));



console.log('str.slice(0,1): ', str.slice(0,1));
console.log('str.slice(0,-1): ', str.slice(0,1));
console.log('str.slice(2): ', str.slice(2));
console.log('str.slice(-2): ', str.slice(-2));
console.log('str.slice(2,4):', str.slice(2,4));
console.log('str.slice(2,-4):', str.slice(2,-4));
