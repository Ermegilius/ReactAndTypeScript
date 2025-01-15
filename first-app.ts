let userName: string = "Max";
const API_KEY = "abc";

//userName = 42; // Error: Type '42' is not assignable to type 'string'
userName = "Manu"; // OK

let userAge = 34;
let isValid = true;

type StringOrNumber = string | number;
let userId: StringOrNumber = "abc1";
userId = 123;

//userId = true;

//let user: object;

type User = {
	name: string;
	age: number;
	isAdmin: boolean;
	id: StringOrNumber;
};

let user: User;

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

function add(a: number, b: number): void {
	// void for a function with no return value
	const result = a + b;
	console.log(result);
}

function add2(a: number, b: number): number {
	// and here we return number
	const result = a + b;
	return result;
}

type AddFn = (a: number, b: number) => number;

function calculate(a: number, b: number, calcFn: AddFn) {
	calcFn(a, b);
	console.log(calcFn(a, b));
}

calculate(2, 5, add2);

interface Credentials {
	user: string;
	password: string;
	email: string;
}

let creds: Credentials;

creds = {
	user: "Max",
	password: "123",
	email: "wsedrfg",
};
