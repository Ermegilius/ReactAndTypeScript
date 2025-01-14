let userName: string = "Max";

//userName = 42; // Error: Type '42' is not assignable to type 'string'
userName = "Manu"; // OK

let userAge = 34;
let isValid = true;

let userId: string | number = "abc1";
userId = 123;

//userId = true;

//let user: object;
let user: {
    name: string;
    age: number;
    isAdmin: boolean;
    id: string | number;
};

//user = 'Max';

user = {
    name: "Max",
    age: 34,
    isAdmin: true,
    id: "abc", // 123
};

//user = {};

//let hobbies: Array<string>;
let hobbies: string[]; //same
//{name: string; age: number;}[] //array of objects
hobbies = ["Sports", "Cooking", "Reading"];
//hobbies = [1,2,3]; //error type
