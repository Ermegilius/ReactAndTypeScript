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
