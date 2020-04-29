var Greet = /** @class */(function () {
    function Greet(message){
        this.greeting=message;
    }
    Greet.prototype.greet=function(){
        return "Hello, "+this.greeting;
    };
    return Greet;
})();
var greet=new Greet("World");
console.log(greet)