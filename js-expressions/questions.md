# W0002 - Write and Evaluate JavaScript Expressions

## JavaScript Checkpoint

### Define each primitive data type in Javascript

### !challenge

* type: paragraph
* id: 2ab10545-806b-4075-be8c-14abdfbb8268
* title: five primitive datatypes

##### !question

What are the 5 primitive datatypes in JavaScript?  
_(Don't worry about Symbol for now)_

##### !end-question

##### !placeholder

##### !end-placeholder

### !end-challenge

### !challenge

* type: short-answer
* id: 317aed91-8629-4637-b057-58f31211884b
* title: datatype 1

##### !question

What datatype is:
`5`

##### !end-question

##### !answer

/[Nn]umber/

##### !end-answer

##### !placeholder

##### !end-placeholder

### !end-challenge

### !challenge

* type: short-answer
* id: fbdf8e72-ba17-4a0a-8336-05b012adbdd1
* title: datatype 2

##### !question

What datatype is:
`5.5`

##### !end-question

##### !answer

/[Nn]umber/

##### !end-answer

##### !placeholder

##### !end-placeholder

### !end-challenge


### !challenge

* type: short-answer
* id: e3f45b8d-25d0-4939-a187-259fa448cf14
* title: datatype 1

##### !question

What datatype is:
`.3`

##### !end-question

##### !answer

/[Nn]umber/

##### !end-answer

##### !placeholder

##### !end-placeholder

### !end-challenge


### !challenge

* type: short-answer
* id: 64500a9c-c902-4c58-afe7-d0fb668789c9
* title: datatype 1

##### !question

What datatype is:
`null`

##### !end-question

##### !answer

/[Nn]ull/

##### !end-answer

##### !placeholder

##### !end-placeholder

### !end-challenge

### !challenge

* type: short-answer
* id: 2a611f34-c3f1-4825-95d2-b1f40ae51e4a
* title: datatype 1

##### !question

What datatype is:
`undefined`

##### !end-question

##### !answer

/[uU]ndefined/

##### !end-answer

##### !placeholder

##### !end-placeholder

### !end-challenge

### !challenge

* type: short-answer
* id: 7b5d5faf-a5e2-4091-a46c-4f10c771ff33
* title: datatype 1

##### !question

What datatype is:
`"Hello World"`

##### !end-question

##### !answer

/[sS]tring/

##### !end-answer

##### !placeholder

##### !end-placeholder

### !end-challenge

### !challenge

* type: short-answer
* id: 8513a349-2918-456e-90eb-48b437852bb0
* title: datatype 1

##### !question

What datatype is:
`"Good evening, " + "007"`

##### !end-question

##### !answer

/[sS]tring/

##### !end-answer

##### !placeholder

##### !end-placeholder

### !end-challenge

### !challenge

* type: short-answer
* id: f0d3dd4c-0bca-4413-b7f0-2cf0f028afc5
* title: datatype 1

##### !question

What datatype is:
`7 + "00"`

##### !end-question

##### !answer

/[sS]tring/

##### !end-answer

##### !placeholder

##### !end-placeholder

### !end-challenge

### !challenge

* type: paragraph
* id: 30bcf8b7-8293-4093-a80d-14825883edc7
* title: 6 falsey values

##### !question

What are the 6 falsey values in JavaScript?

##### !end-question

##### !placeholder

##### !end-placeholder

### !end-challenge

### Use logical operators

### !challenge

* type: short-answer
* id: 121f7878-3842-4568-9503-c0d17b9fabda
* title: What does `true || false` evaluate to?

##### !question

What does `true || false` evaluate to?

##### !end-question

##### !answer

true

##### !end-answer

### !end-challenge

### !challenge

* type: short-answer
* id: 22f83abf-c499-418a-8e54-cd9d3b6cbcc8
* title: What does `false || true && true` evaluate to?

##### !question

What does `false || true && true` evaluate to?

##### !end-question

##### !answer

true

##### !end-answer

### !end-challenge

### Use comparison operators

### !challenge

* type: short-answer
* id: 366cadcb-7e65-4541-a206-79316fc7ad46
* title: What will this evaluate to? `5 == '5'`

##### !question

What will this evaluate to? `5 == '5'`

##### !end-question

##### !answer

true

##### !end-answer

### !end-challenge

### !challenge

* type: short-answer
* id: bc7a296c-36bf-430d-86a0-d8f7fa510d64
* title: What will this evaluate to? `150 === "15" + '0'`

##### !question

What will this evaluate to? `150 === "15" + '0'`

##### !end-question

##### !answer

false

##### !end-answer

### !end-challenge

### !challenge

* type: short-answer
* id: 2732df29-3096-4ca4-9b99-8afb7eec875d
* title: What will this evaluate to? `1 != 'one'`

##### !question

What will this evaluate to? `1 != 'one'`

##### !end-question

##### !answer

false

##### !end-answer

### !end-challenge

### !challenge

* type: short-answer
* id: f11fcb85-2624-4928-ae21-228202b5e67c
* title: What will this evaluate to? `'37 cats' === 37 + ' cats'`

##### !question

What will this evaluate to? `'37 cats' === 37 + ' cats'`

##### !end-question

##### !answer

true

##### !end-answer

### !end-challenge

### !challenge

* type: short-answer
* id: 54b68aeb-7fbf-48c0-a24c-c7a7fd26f89a
* title: What will this evaluate to? `undefined !== NaN`

##### !question

What will this evaluate to? `undefined !== NaN`

##### !end-question

##### !answer

false

##### !end-answer

### !end-challenge

### !challenge

* type: short-answer
* id: 48267c3c-39a1-4216-a8f8-293883316974
* title: What will this evaluate to? `500 < "501"`

##### !question

What will this evaluate to? `500 < "501"`

##### !end-question

##### !answer

true

##### !end-answer

### !end-challenge

### !challenge

* type: short-answer
* id: 8e2ff931-bbbf-40bc-9ad6-b109d14d770a
* title: `NaN === NaN`

##### !question

What will this statement evaluate to?

```js
NaN === NaN
```

##### !end-question

##### !answer

false

##### !end-answer

### !end-challenge

### Perform Math operations with binary operators

### !challenge

* type: short-answer
* id: bf14bba3-7e2e-4d57-b1f9-1139ad089fc7
* title: evaluate operations

##### !question

What will this evaluate to?

```
true && 3 + 3 === 6 && false;
```

##### !end-question

##### !answer

false

##### !end-answer

### !end-challenge

### !challenge

* type: short-answer
* id: 32012313-7223-4fe0-bbd7-e99a49dabda4
* title: evaluate operations 2

##### !question

What will this evaluate to?

```
false || 11 % 3 === 2 || (5 - 3) * 4 === 12;
```

##### !end-question

##### !answer

true

##### !end-answer

### !end-challenge

### !challenge

* type: paragraph
* id: 97314011-c1e5-43bd-a0d3-e25406d6a8bd
* title: evaluate operations 3

##### !question

What value will be returned for both x and y?

```js
var x = 3;
var y = 100 % x;
```

##### !end-question

### !end-challenge

### !challenge

* type: paragraph
* id: 1d61ed3b-5647-47fb-b3fe-0b3285a7b63d
* title: evaluate operations 4

##### !question

What value will be returned for both x and y?

```js
var x = 3;
var y = 100 / (x * x * x * x);
```

##### !end-question

### !end-challenge

### Prefix / Postfix notation for integers

### !challenge

* type: paragraph
* id: 7e3f4e85-c978-4087-a5c6-b636016ab17b
* title: postfix

##### !question

What value will be returned for both x and y?

```js
var x = 7;
var y = x++;
```

##### !end-question

### !end-challenge

### !challenge

* type: paragraph
* id: d35cd41d-c6c7-4f77-8a59-dec876717b23
* title: What value will be returned for both x and y?

##### !question

What value will be returned for both x and y?

```js
var x = 7;
var y = ++x;
```

##### !end-question

### !end-challenge

### Evaluate a statement using language Operator Precedence rules

### !challenge

* type: paragraph
* id: fcd48053-3cb1-4ea8-bf5d-5537a78a5fc9
* title: evaluate statements

##### !question

What will the following statements return?

```
5 + 5 * 3 / 7 * 2
6 * 6 / 3
5 * 6 % 3
5 * 11 % 3
(22 / 2) * 2 / 2 * 11
Math.pow(5 + 37 * 8, 0)
```

##### !end-question

##### !placeholder

1.
2.
3.
4.
5.
6.

##### !end-placeholder

### !end-challenge

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
