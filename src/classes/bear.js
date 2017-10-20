
function Bear(){
  console.log("function " + Bear.name);
  console.log("Bear constructor");

  if (true) {
    console.log("inside if"); }
  else {
    console.log("inside esle"); }

}

Bear.type = "grizzly";

console.log(Bear);
console.log("Bear", Bear);
console.log(Bear, "Bear");
console.log("Bear.type", Bear.type);

console.log("create new Bear");

var myBear = new Bear();

//myBear.type = "polar";

console.log("myBear.type: ", myBear.type);
