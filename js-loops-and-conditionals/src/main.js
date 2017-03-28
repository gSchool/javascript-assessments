//Use if/else/if else statements to conditionally execute code

  // Given a number "num", test whether it is larger than 10 and smaller than 20.
  // If so, print "right in the sweet spot!"
  // if it's too low, print "out of range, too low"
  // if it's too low, print "out of range, too high"
  function question3(num) {
    // YOUR CODE HERE
    // Remember, you have access to a variable called "num" but you don't know what it is
  }

  // Given a string "name", test whether it starts with a vowel and is longer than 5 characters
  // if it starts with a vowel, print "Your name starts with a vowel"
  // if it's longer than 5 characters print "Your name is longer than 5 characters"
  // if it starts with a vowel and is longer than 5 characters print "Your name starts with a vowel and is longer than 5 characters"
  // if none of those are true, print "Your name doesn't start with a vowel, and isn't longer than 5 characters"
  function question4(name) {
    //YOUR CODE HERE
  }

//Use while loops to conditionally repeat statements

  //given a number and a string, use a while loop to log that string repeated by the given number.
  //
  // Example:
  // Given 8 and "na"
  // print out:
  // "nananananananana"
  function question10(num,str) {
    // YOUR CODE HERE
    // Remember, you have access to a variable called "num" but you don't know what it is
  }

  //given a number, create an array of multiples of that number until you have that number of multiples,
  //  then log the array
  //
  // Example:
  // Given 3
  // print out:
  // [3,6,9]
  // Given 5
  // print out:
  // [5,10,15,20,25]

  function question11(count) {

  }

//Use for loops to iterate to a specific number

  //Write a for loop that prints all the numbers between 1 and 100 that are divisible by 5
  function question5() {
    //YOUR CODE HERE
  }
  //Write a for loop that prints all the numbers between 100 and 1 that are divisible by 3, backwards
  function question6() {
    //YOUR CODE HERE
  }

//Use for..in loops to iterate through objects

  // given an object, print out all it's keys and values like this:
  // key: value
  //
  // Example:
  // anObject = { foo: "bar", baz: "qux" }
  // prints out:
  // foo: bar
  // baz: qux

  function question8(anObject) {
    //YOUR CODE HERE
    // Remember, you have access to a variable called "anObject", but you won't know what is in it until it's already been set.
  }

  //given an object, use a for..in loop to print out
  // a concatenated string with all of the values that are strings
  // a sum of all of the numbers
  //
  // Example:
  // anObject = {text: "some text", notes: "some notes", quantity: 15, quality: 88}
  // prints out:
  // some textsome notes
  // 103

  function question9() {
    //YOUR CODE HERE
    // Remember, you have access to a variable called "anObject", but you won't know what is in it until it's already been set.
  }

// Use for loops to iterate through arrays

  // Write a for loop that will print only even numbers from an array:
  // For example: question0([ 5, 20, 11, 42, 2, 19 ]) >> [ 20, 42, 2 ]

  function question0 (array) {

  }

  // Write a for loop that doubles each number in the following array. If the
  // resulting number is greater than 12, print it to the console:
  // For example: [ 2, 4, 8, 16 ] would print the numbers 16 and 32

  function question1 (array) {

  }

  // Write a for loop to iterate over every element in the following array:
  // [ 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun' ]

  // Using an if statement, do the following:
  // - If the day is on a weekend, print "Yay, it's the weekend!"
  // - If the day is Friday, print "Almost there..."
  // - If the day is Monday, print "I hate Mondays more than Garfield."
  // - Otherwise, print "Everybody's working for the weekend."

  function question2 (array) {

  }

//Leave this line alone, the tests won't work without it!
module.exports = { question0, question1, question2, question3, question4, question5, question6, question8, question9, question10, question11 }
