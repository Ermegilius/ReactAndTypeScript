# ReactAndTypeScript

TS is invented and is being implemented to control types.

## How to use TS

If YS was installed globaly, you can compile ts file to js file by running the following command:

```shell
tsc <filename>.ts
```

## Basic types:

-   string;
-   number;
-   boolean.

## Combined types

```ts
let userId: string | number = "abc1";
```

## Array types

### Array of strings

```ts
let hobbies: Array<string>;
hobbies = ["Sports", "Cooking", "Reading"];
```

## Function types

```ts
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
```

## Callback types

```ts
function calculate(a: number, b: number, calcFn: (a: number, b: number) => number) {
	calcFn(a, b);
}

calculate(2, 5, add2); //call it with add2 function
```

## Custom types

```ts
type StringOrNumber = string | number;
let userId: StringOrNumber = "abc1";
userId = 123;
```

```ts
type User = {
	name: string;
	age: number;
	isAdmin: boolean;
	id: StringOrNumber;
};
let user: User;
```

## Interface

Usially is used to define object types.

```ts
interface Credentials {
	user: string;
	pass: string;
}
```

It's easelly extendeble (declaration merging). Other devs can extend your interface for their projects.

```ts
interface Credentials {
	user: string;
	password: string;
	email: string;
}
let creds: Credentials;
interface Credentials {
	mode: string;
}
```

Useful for projects where **classes** are used.

```ts
class AuthCredentials implements Credentials {
	user: string;
	password: string;
	email: string;
}
function login(credentials: Credentials) {}
```

## Merging types

We can combine several types into one.

```ts
type Admin = {
	permissions: string[];
};
type AppUser = {
	userName: string;
};
type AppAdmin = Admin & AppUser;
```

## Merge interfaces

```ts
interface Admin {
	permissions: string[];
}
interface AppUser {
	userName: string;
}
interface AppAdmin extends Admin, AppUser {}
```

## Literal types

```ts
let role: "admin" | "user" | "editor"; //'admin' or 'user', 'editor'
role = "admin";
role = "user";
role = "editor";
//role = "abc"; // error
```

## Type guards

```ts
type Role = "admin" | "user" | "editor";

function performAction(action: string | number, role: Role) {
	if (role === "admin" && typeof action === "string") {
		// do something
	}
}
```
