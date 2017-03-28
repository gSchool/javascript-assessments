// Standard - W0002 - Write and Evaluate JavaScript Expressions

//** Success Criteria - Dimension Variables with `var`, `let`, `const`

//* Challenge 1
// Create a variable called bikes, store the number 20 in bikes

//* Challenge 2
// Create a variable that will not change, called MAX_CONNECTIONS, assign it the number 5.

//* Challenge 3
// Create a variable called i for the purpose of counting loop iterations, that we won't use again after the loop (don't write the loop)

//* Challenge 4
// Create a variable called totalBears, which we'll update any time we create a new bear.


//** Success Criteria - Perform Math operations with binary operators, Evaluate a statement using language Operator Precedence rules
//* Challenge 1
// Your local swamp has wildlife population estimates. We want to know several pieces of information. Feel free to use multiple variables, just make sure all the original variables are filled in.
// Some information about the local ecosystem:
// Birds and Crocs eat fish. Birds eat 1 fish a day, while crocs eat 5.
// Snakes eat Birds, 1 a day.
// If a creature does not eat for a day, it dies.
// For every 2 fish, 10 fish are born every 7 days.
// For every 2 birds, 5 birds are born every 7 days.
// For every 2 snakes, 2 snakes are born every 7 days.
// Crocs take a long time to reproduce so their population remains stable.

var quadrant1Birds = 500;
var quadrant2Birds = 300;
var quadrant3Birds = 600;
var quadrant4Birds = 800;

var quadrant1Fish = 11700;
var quadrant2Fish = 21600;
var quadrant3Fish = 12200;
var quadrant4Fish = 11900;

var quadrant1Crocs = 50;
var quadrant2Crocs = 100;
var quadrant3Crocs = 100;
var quadrant4Crocs = 75;

var quadrant1Snakes = 100;
var quadrant2Snakes = 300;
var quadrant3Snakes = 300;
var quadrant4Snakes = 200;

// How many fish a day does it take to feed each quadrant on the first day?
var quadrant1FishDay1 = undefined;
var quadrant2FishDay1 = undefined;
var quadrant3FishDay1 = undefined;
var quadrant4FishDay1 = undefined;

//How many fish does it take to feed each quadrant on the 8th day?
var quadrant1FishDay8 = undefined;
var quadrant2FishDay8 = undefined;
var quadrant3FishDay8 = undefined;
var quadrant4FishDay8 = undefined;
// How many birds are eaten in a day across the whole swamp for the first 4 weeks?
var dailyBirdLossWeek1 = undefined;
var dailyBirdLossWeek2 = undefined;
var dailyBirdLossWeek3 = undefined;
var dailyBirdLossWeek4 = undefined;
var dailyBirdLossWeek5 = undefined;
var dailyBirdLossWeek6 = undefined;
// How many birds are there in the whole swamp after 6 weeks? You may need extra variables for this.
var week6BirdPopulation = undefined;

//** Success Criteria - Prefix / Postfix notation for integers
//* Challenge 1
// Uncomment the loop and replace the string with the count variable - increment it before logging it using Prefix notation
var x = 30;
var count = 0;

// while (count < x) {
//   console.log("Your answer here")
// }

//* Challenge 2
// Uncomment the loop and replace the string with the count variable - increment it after logging it using Postfix notation
var x = 30;
var count = 0;

// while (count < x) {
//   console.log("Your answer here")
// }

//** Success Criteria - Perform String Concatenation
//* Challenge 1
//Given the following variables, create statements that say:

// Variables
var bean = "pinto";

//These variables should contain a complete song
var theBeanSong = "My dog (replace with variable) loves to roam, the other day he left his home. He came back all nice and clean where or where has (replace with variable) been?";
// should read: My dog pinto loves to roam, the other day he left his home. He came back all nice and clean where or where has pinto been?
var theBeanChorus = "(replace with variable) been (replace with variable) been, where oh where has (replace with variable) been.";
// should read: pinto been, pinto been, where oh where has pinto been?


//* Challenge 2
//Using a single numerical variable and prefix notation, make this classic song:
// On the 1st day of Christmas my true love gave to me, a partridge in a pear tree.
// On the 2nd day of Christmas my true love gave to me, two turtle doves and a partridge in a pear tree.
// On the 3rd day of Christmas my true love gave to me, three french hens, two turtle doves and a partridge in a pear tree.
// On the 4rd day of Christmas my true love gave to me, four calling birds, three french hens, two turtle doves and a partridge in a pear tree.
// On the 5rd day of Christmas my true love gave to me, five golden rings! four calling birds, three french hens, two turtle doves and a partridge in a pear tree.

var day = 0;

var st = "st";
var nd = "nd";
var rd = "rd";
var th = "th";

var dayOfXmas = "day of Christmas my true love gave to me,"
var one = "a partridge in a pear tree"
var two = "two turtle doves and"
var three = "three french hens"
var four = "four calling birds"
var five = "five golden rings"

var day1 = "";
var day2 = "";
var day3 = "";
var day4 = "";
var day5 = "";


//** Success Criteria - Use comparison operators
//* Challenge 1
// Given the following variables, create a comparison statement to see if:
var cars = 50;
var vans = 20;
var riders = 200;
var drivers = 30;
var carCapacity = 5;
var vanCapacity = 8;
var carMPG = 30;
var vanMPG = 20;

// Do we have enough space for all the riders and drivers in cars?
var haveRiderCarCapacity = undefined;

// Do we have enough space for all the riders and drivers in vans?
var haveRiderVanCapacity = undefined;

// Do we have enough space for all the riders if each car has to have one driver?
var haveEnoughCarDrivers = undefined;

// Do we have enough space for all the riders if we used vans instead of cars?
var haveEnoughVanDrivers = undefined;

// If we have to travel 100 miles, will cars use more gas than vans? (assuming we have as many cars or vans as we would need)
var carsOrVans = undefined;

//* Challenge 2
// Given the following variables, create comparison statements to see if:
var sallyAge = 10;
var johnAge = sallyAge * 2;
var onokeAge = johnAge / 3;
var carolAge = sallyAge + johnAge;
var chandraAge = johnAge - sallyAge;
var samAge = onokeAge * sallyAge;
var kenAge = chandraAge + onokeAge;
var jimAge = chandraAge % onokeAge * kenAge - 5;

// is Jim older than Ken?
var jimIsOlderThanKen = undefined;
//  is Carol older than Jim?
var carolIsOlderThanJim = undefined;
// is Onoke older than Sally?
var onokeIsOlderThanSally = undefined;
// is Chandra older than Sam?
var chandraIsOlderThanSam = undefined;

//** Success Criteria - Use logical operators
//* Challenge 1
// You have a global variable for each letter of the alphabet (eg, var a,b,c)
// You also have 5 global variables for each letter of the alphabet that have a number after them (eg, var a1, a2, a3, a4, a5)

var a1 = b1 = c = d1 = i1 = j = k1 = l1 = q1 = r1 = s1 = t1 = y1= true;
var e2 = f2 = g2 = h2 = m2 = n2 = o2 = p2 = u2 = v2 = w2 = x2 = z2 = false;
var e3 = f3 = g3 = h3 = m3 = n3 = o3 = p3 = u3 = v3 = w3 = x3 = z3 = true;
var a3 = b = c1 = d = i = j1 = k2 = l = q3 = r = s = t3 = y5 = true;
var a4 = b4 = c4 = d4 = i4 = j4 = k4 = l4 = q4 = r4 = s4 = t4 = y4 = false;
var e4 = f = g = h = m4 = n4 = o1 = p = u = v = w4 = x = z5 = false;
var e = f4 = g4 = h4 = m = n5 = o4 = p4 = u4 = v4 = w = x4 = z4 = true;
var a5 = b5 = c5 = d5 = i5 = j5 = k5 = l5 = q5 = r5 = s5 = t5 = y = true;
var a = b3 = c3 = d3 = i3 = j3 = k3 = l3 = q = r3 = s3 = t = y3 = true;
var e5 = f5 = g5 = h5 = m5 = n = o5 = p5 = u5 = v5 = w5 = x5 = z = false;
var a2 = b2 = c2 = d2 = i2 = j2 = k = l2 = q2 = r2 = s2 = t2 = y2 = true;
var e1 = f1 = g1 = h1 = m1 = n1 = o = p1 = u1 = v1 = w1 = x1 = z1= false;

//Write a test to see if every variable that starts with a is true
var allAs = undefined;
//Write a test to see if every variable that does not have a number after it is true
var allLettersNoNumbers = undefined;
//Write a test to see if any of the vowels that have a 3 after them are true (include y)
var allVowels3 = undefined;
//Write a test that checks to see if all of the variables that start with c are true, or if all of the vowels without numbers are true (include y)
var allCOrAllVowels = undefined;
//Write a test that checks to see if any of the first five letter variables are true
var anyFirstFive = undefined;
//Write a test that checks if all of the x variables are true or all of the y variables BUT NOT BOTH (google this)
var allXXorAllY = undefined;
