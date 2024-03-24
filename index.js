//receivesAFunction
function sayHello() {
    return "Hello, ";
  }
  function greeting(helloMessage, name) {
    console.log(helloMessage() + name);
  }
  
  greeting(sayHello, "Catherine!");


//returnsANamedFunction
function sayHello() {
    return () => {
      console.log("Hello!");
    };
  }
  
 //returnsAnAnonymousFunction
 greeting(()=>console.log("Hello!"));