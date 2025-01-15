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
let user2: User;

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

interface Credentials {
	mode: string;
}

creds = {
	user: "Max",
	password: "123",
	email: "wsedrfg",
	mode: "login",
};

class AuthCredentials implements Credentials {
	user: string;
	password: string;
	email: string;
	mode: string;
}

function login(credentials: Credentials) {}

login(new AuthCredentials());

// type Admin = {
// 	permissions: string[];
// };

// type AppUser = {
// 	userName: string;
// };

// type AppAdmin = Admin & AppUser;

// let admin: AppAdmin;
// admin = {
// 	permissions: ["read", "write"],
// 	userName: "Max",
// };

interface Admin {
	permissions: string[];
}

interface AppUser {
	userName: string;
}

interface AppAdmin extends Admin, AppUser {}

let admin: AppAdmin;
admin = {
	permissions: ["read", "write"],
	userName: "Max",
};

type Role = "admin" | "user" | "editor";
let role: "admin" | "user" | "editor"; //'admin' or 'user', 'editor'
role = "admin";
role = "user";
role = "editor";
//role = "abc"; // error

function performAction(action: string | number, role: Role) {
	if (role === "admin" && typeof action === "string") {
		// do something
	}
}

let roles: Array<Role>;
roles = ["admin", "editor"];

type DataStorage<T> = {
	//T is a common placeholder for the type
	storage: T[];
	add: (data: T) => void;
};

const textStorage: DataStorage<string> = {
	//replacing T with string
	storage: [],
	add(data) {
		//data is defined as a string
		this.storage.push(data);
	},
};

const userStorage: DataStorage<User> = {
	storage: [],
	add(user) {
		this.storage.push(user);
	},
};

function merge<T, U>(a: T, b: U) {
	return {
		...a,
		...b,
	};
}

const newUser = merge<{ name: string }, { age: number }>({ name: "Max" }, { age: 30 });
