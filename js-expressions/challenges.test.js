'use strict';
var expect = require('chai').expect;

var jsdom = require("jsdom");
var fs = require("fs");
var encryptor = require('simple-encryptor')("Galvanize-Encryption-Key");

var challenges = fs.readFileSync("./challenges.js", "utf-8");
var challengeAnswers = encryptor.decrypt(fs.readFileSync("./challenge.answers.js", "utf-8"));

describe("Standard - W0002 - Write and Evaluate JavaScript Expressions", function() {

  let env, answerEnv;
  before((done) => {
    jsdom.env("",{
      src: [challengeAnswers],
      done: function(err, window) {
        answerEnv = window;
        done();
      }
    });
  })
  before((done) => {
    jsdom.env("",{
      src: [challenges],
      done: function(err, window) {
        env = window;
        done();
      }
    });
  })
  //** Success Criteria - Dimension Variables with `var`, `let`, `const`

  //* Challenge 1
  // Create a variable called bikes, store the number 20 in bikes
  it("has a variable called bikes with 20", () => {
    expect(env.bikes).to.eq(20);
  })

  //* Challenge 2
  // Create a variable that will not change, called MAX_CONNECTIONS
  it("has a variable called MAX_CONNECTIONS, declared with const", () => {
    expect(challenges).to.contain("const MAX_CONNECTIONS");
  })
  //* Challenge 3
  // Create a variable called i for the purpose of counting loop iterations, that we won't use again after the loop (don't write the loop)
  it("has a variable called i, declared with let", () => {
    expect(challenges).to.contain("let i");
  })
  //* Challenge 4
  // Create a variable called totalBears, which we'll update any time we create a new bear.
  it("has a variable called totalBears, declared with var", () => {
    expect(challenges).to.contain("var totalBears");
  })

  //** Success Criteria - Perform Math operations with binary operators, Evaluate a statement using language Operator Precedence rules
  //* Challenge 1
  // Your local swamp has wildlife population estimates. We want to know several pieces of information.
  // Some information about the local ecosystem:
  // Birds and Crocs eat fish. Birds eat 1 fish a day, while crocs eat 5.
  // Snakes eat Birds, 1 a day.
  // If a creature does not eat for a day, it dies.
  // For every 2 fish that exist on the last day of the week, 10 fish are born.
  // For every 2 birds that exist on the last day of the week, 5 birds are born.
  // For every 2 snakes that exist on the last day of the week, 2 snakes are born.
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
  it("has a variable called quadrantXFishDay1, which has the correct values for each", () => {
    expect(env.quadrant1FishDay1).to.eq(answerEnv.quadrant1FishDay1);
    expect(env.quadrant2FishDay1).to.eq(answerEnv.quadrant2FishDay1);
    expect(env.quadrant3FishDay1).to.eq(answerEnv.quadrant3FishDay1);
    expect(env.quadrant4FishDay1).to.eq(answerEnv.quadrant4FishDay1);
  })
  //How many fish does it take to feed each quadrant on the 8th day?
  it("has a variable called quadrantXFishDay8, which has the correct values for each", () => {
    expect(env.quadrant1FishDay8).to.eq(answerEnv.quadrant1FishDay8);
    expect(env.quadrant2FishDay8).to.eq(answerEnv.quadrant2FishDay8);
    expect(env.quadrant3FishDay8).to.eq(answerEnv.quadrant3FishDay8);
    expect(env.quadrant4FishDay8).to.eq(answerEnv.quadrant4FishDay8);
  })

  // How many birds are eaten in a day across the whole swamp for the first 4 weeks?
  it("has a variable called dailyBirdLossWeekX, which has the correct values for each", () => {
    expect(env.dailyBirdLossWeek1).to.eq(answerEnv.dailyBirdLossWeek1);
    expect(env.dailyBirdLossWeek2).to.eq(answerEnv.dailyBirdLossWeek2);
    expect(env.dailyBirdLossWeek3).to.eq(answerEnv.dailyBirdLossWeek3);
    expect(env.dailyBirdLossWeek4).to.eq(answerEnv.dailyBirdLossWeek4);
  })
  // How many birds are there in the whole swamp after 6 weeks?
  it("has a variable called week6BirdPopulation, which has the correct value", () => {
    expect(env.week6BirdPopulation).to.eq(answerEnv.week6BirdPopulation);
  })

  //** Success Criteria - Prefix / Postfix notation for integers
  //* Challenge 1
  // Replace the string with the count variable - increment it before logging it using Prefix notation
  it("uses prefix notation in a loop", () => {
    expect(challenges).to.contain("++count");
  })

  //* Challenge 2
  // Replace the string with the count variable - increment it after logging it using Postfix notation
  it("uses prefix notation in a loop", () => {
    expect(challenges).to.contain("count++");
  })

  //** Success Criteria - Perform String Concatenation
  //* Challenge 1
  it("uses string concatenation to assemble a song", () => {
    expect(env.theBeanSong).to.eq("My dog pinto loves to roam, the other day he left his home. He came back all nice and clean where or where has pinto been?");
    expect(env.theBeanChorus).to.eq("pinto been, pinto been, where oh where has pinto been?");
    //Make sure they didn't just write the string out
    expect(challenges).to.not.contain('"My dog pinto loves to roam, the other day he left his home. He came back all nice and clean where or where has pinto been?"');
    expect(challenges).to.not.contain('"pinto been, pinto been, where oh where has pinto been?"');
    expect(challenges).to.not.contain("'My dog pinto loves to roam, the other day he left his home. He came back all nice and clean where or where has pinto been?'");
    expect(challenges).to.not.contain("'pinto been, pinto been, where oh where has pinto been?'");
  })
  //* Challenge 2
  it("uses string concatenation and prefix notation to assemble a song", () => {
    expect(env.day1).to.eq("On the 1st day of Christmas my true love gave to me, a partridge in a pear tree.");
    expect(env.day2).to.eq("On the 2nd day of Christmas my true love gave to me, two turtle doves and a partridge in a pear tree.");
    expect(env.day3).to.eq("On the 3rd day of Christmas my true love gave to me, three french hens, two turtle doves and a partridge in a pear tree.");
    expect(env.day4).to.eq("On the 4rd day of Christmas my true love gave to me, four calling birds, three french hens, two turtle doves and a partridge in a pear tree.");
    expect(env.day5).to.eq("On the 5rd day of Christmas my true love gave to me, five golden rings! four calling birds, three french hens, two turtle doves and a partridge in a pear tree.");
  })

  //** Success Criteria - Use comparison operators
  //* Challenge 1
  it("uses comparison operators to determine if there is enough space for all the riders and drivers in cars", () => {
    expect(env.haveRiderCarCapacity).to.eq(answerEnv.haveRiderCarCapacity);
  })

  it("uses comparison operators to determine if there is enough space for all the riders and drivers in vans", () => {
    expect(env.haveRiderVanCapacity).to.eq(answerEnv.haveRiderVanCapacity);
  })

  it("uses comparison operators to determine if there is enough space space for all the riders if each car has to have one driver", () => {
    expect(env.haveEnoughCarDrivers).to.eq(answerEnv.haveEnoughCarDrivers);
  })

  it("uses comparison operators to determine if there is enough space space for all the riders if each if we used vans instead of cars", () => {
    expect(env.haveEnoughVanDrivers).to.eq(answerEnv.haveEnoughVanDrivers);
  })

  it("uses comparison operators to determine if cars will use more gas than vans", () => {
    expect(env.carsOrVans).to.eq(answerEnv.carsOrVans);
  })

  //* Challenge 2
  it("uses comparison operators to determine who is older", () => {
    expect(env.jimIsOlderThanKen).to.eq(answerEnv.jimIsOlderThanKen);
    expect(env.carolIsOlderThanJim).to.eq(answerEnv.carolIsOlderThanJim);
    expect(env.onokeIsOlderThanSally).to.eq(answerEnv.onokeIsOlderThanSally);
    expect(env.chandraIsOlderThanSam).to.eq(answerEnv.chandraIsOlderThanSam);
  })

  it("uses logical operators to determine if a series of variables are true or false", () => {
    expect(env.allAs).to.be.eq(answerEnv.allAs)
    expect(env.allLettersNoNumbers).to.be.eq(answerEnv.allLettersNoNumbers)
    expect(env.allVowels3).to.be.eq(answerEnv.allVowels3)
    expect(env.allCOrAllVowels).to.be.eq(answerEnv.allCOrAllVowels)
    expect(env.anyFirstFive).to.be.eq(answerEnv.anyFirstFive)
    expect(env.allXXorAllY).to.be.eq(answerEnv.allXXorAllY)
  })
})
