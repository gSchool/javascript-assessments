# W0002 - Write and Evaluate JavaScript Expressions

## Quiz

### Define each primitive data type in Javascript

What are the 5 primitive datatypes in JavaScript?

> Your answer here....

Name the datatype for each of the following expressions:

1. `5`
1. `5.5`
1. `.3`
1. `null`
1. `undefined`
1. `"Hello World"`
1. `"Good evening, " + "007"`
1. `7 + "00"`

> Your answer here...

What are the 6 falsey values in JavaScript?

> Your answer here....

### Use logical operators

What does `true || false` evaluate to?

> Your answer here...

What does `false || true && true` evaluate to?

> Your answer here...

### Use comparison operators

What will this evaluate to? `5 == '5'`

> Your answer here...

What will this evaluate to? `150 === "15" + '0'`

> Your answer here...

What will this evaluate to? `1 != 'one'`

> Your answer here...

What will this evaluate to? `'37 cats' === 37 + ' cats'`

> Your answer here...

What will this evaluate to? `undefined !== NaN`

> Your answer here...

What will this evaluate to? `500 < "501"`

> Your answer here...

What will this statement evaluate to?

```js
NaN === NaN
```

> Your answer here....

### Perform Math operations with binary operators

What will this evaluate to?

```
true && 3 + 3 === 6 && false;
```

> Your answer here...

What will this evaluate to?

```
false || 11 % 3 === 2 || (5 - 3) * 4 === 12;
```

> Your answer here...

What value will be returned for both x and y?

```js
var x = 3;
var y = 100 % x;
```

> Your answer here....

What value will be returned for both x and y?

```js
var x = 3;
var y = 100 / (x * x * x * x);
```

> Your answer here....

### Prefix / Postfix notation for integers

What value will be returned for both x and y?

```js
var x = 7;
var y = x++;
```

> Your answer here....

What value will be returned for both x and y?

```js
var x = 7;
var y = ++x;
```

> Your answer here....

### Evaluate a statement using language Operator Precedence rules

What will the following statements return?

```
5 + 5 * 3 / 7 * 2
6 * 6 / 3
5 * 6 % 3
5 * 11 % 3
(22 / 2) * 2 / 2 * 11
Math.pow(5 + 37 * 8, 0)
```

### Perform String Concatenation

Given these variables, create an expression that returns `'Hello World, Hello Universe'`.

```
var greeting = "Hello";
var place = "World";
var biggerPlace = "Universe";
```

Given these variables, create an expression that returns `"99 little bugs in the code, 99 little bugs, take one down, patch it around, 106 little bugs in the code"`.

```
var count = 99;
var thing = "little bugs";
var container = "in the code";
var verb = "patch";
```

> Your answer here....

Using the expression from the last question, change the variables so that our output would be `"99 bottles of beer on the wall, 99 bottles of beer, take one down, pass it around, 98 bottles of beer on the wall"`

> Your answer here....


### Dimension Variables with `var`, `let`, `const`

Given this code, should we use `var`, `let` or `const` with the variable `y`

```
var x = 5;
y = m * x + b;
```

> Your answer here...

Given this code, should we use `var`, `let` or `const` with the variable `x`

```
x = 21;
while (x % 20 == 0) {
  x++
}
console.log(x)
```

> Your answer here...


Given this code, should we use `var`, `let` or `const` with the variable `i`

```
for (i=0; i<100; i++) {
  console.log(i);
}

```

> Your answer here...


Given this code, should we use `var`, `let` or `const` with the variable `multiplier`

```
multiplier = 3;
attendees = 60;

var cake = (attendees / 6) * multiplier;
var cupcake = 15 * multiplier;
var plates = attendees * multiplier;
```

> Your answer here...


Given this code, should we use `var`, `let` or `const` with the variable `express`

```
express = require('express')
```

> Your answer here...


### Identify Function, Object, Array and Primitive Literals

What type of literal expression is this:

```
[]
```

> Your answer here...

What type of literal expression is this:

```
{}
```

> Your answer here...

What type of literal expression is this:

```
function () {}
```

> Your answer here...

What type of literal expression is contained within the variable:

```
let colors = ["red", "orange", "blue"]
```

> Your answer here...

What type of literal expression is contained within the variable:

```
let config = {
  semicolons: true,
  commas: true,
  dots: true,
  brackets: false,
  changeDefaults: false
}
```

> Your answer here...

What type of literal expression is contained within the variable:

```
const x = function () {
  if (arguments) {
    return {};
  }
  return ["cats", "tigers", "dogs", "wolves", "parrots", "dinosaurs", "pigs", "hogs", "trees", "ferns"];
}
```

> Your answer here...
