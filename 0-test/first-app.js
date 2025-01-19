var userName = "Max";
var API_KEY = "abc";
//userName = 42; // Error: Type '42' is not assignable to type 'string'
userName = "Manu"; // OK
var userAge = 34;
var isValid = true;
var userId = "abc1";
userId = 123;
//userId = true;
//let user: object;
var user;
//user = 'Max';
user = {
    name: "Max",
    age: 34,
    isAdmin: true,
    id: "abc", // 123
};
//user = {};
//let hobbies: Array<string>;
var hobbies; //same
//{name: string; age: number;}[] //array of objects
hobbies = ["Sports", "Cooking", "Reading"];
//hobbies = [1,2,3]; //error type
function add(a, b) {
    // void for a function with no return value
    var result = a + b;
    console.log(result);
}
function add2(a, b) {
    // and here we return number
    var result = a + b;
    return result;
}
function calculate(a, b, calcFn) {
    calcFn(a, b);
    console.log(calcFn(a, b));
}
calculate(2, 5, add2);
