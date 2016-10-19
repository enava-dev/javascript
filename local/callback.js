

var doSomething = function( successHandler, failHandler ){
  if (true === true) {
    return (failHandler());
  }
  return (successHandler());
};

var successHandler = function(){
  console.log('success');
};

var failHandler = function(){
  console.log('fail');
};

doSomething( successHandler, failHandler );
