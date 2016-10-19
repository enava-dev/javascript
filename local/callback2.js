

var getBanks = function(callback){
  callback('list of banks');
};

var getUsers = function(callback){
  callback('list of users');
};


var validate = function(){

  getBanks(function(banks){
    getUsers(function(users){
      console.log(banks);
      console.log(users);

      if (false === true) {
        return errorHandler();
      }

      return successHandler();
    });
  });

};

var successHandler = function (){
  console.log('success');
};

var errorHandler = function(){
  console.log('fail');
};


var signup = function(){
  console.log('start flow');
  validate();
  console.log('end flow');

};


signup();
