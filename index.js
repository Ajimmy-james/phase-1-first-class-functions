function receivesAFunction(callback){
    callback();
  }  
  function returnsANamedFunction(){
    const func = function(){};
    return func;
  }
  function returnsAnAnonymousFunction(){
    return function(){};
  }