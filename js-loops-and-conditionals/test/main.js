const chai = require('chai')
const assert = chai.assert
const main = require('../src/main')

// Listen for console.log statements
require('mocha-sinon')
function stubFn () { this.sinon.stub(console, 'log') }

describe('main', () => {

  beforeEach(stubFn)

  it('question0', () => {
    var input = [ 5, 20, 11, 42, 2, 19 ]
    var expected = [ 20, 42, 2 ]
    main.question0(input)

    assert.equal(console.log.callCount, expected.length)
    expected.forEach(num => assert.isTrue(console.log.calledWith(num)))
  })

  it('question1', () => {
    const input = [ 2, 4, 8, 16 ]
    const expected = [ 16, 32 ]
    main.question1(input)

    assert.equal(console.log.callCount, expected.length)
    expected.forEach(num => assert.isTrue(console.log.calledWith(num)))
  })

  it('question2', () => {
    const input = [ 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun' ]
    main.question2(input)

    assert.equal(console.log.callCount, input.length)
    assert.isTrue(console.log.calledWith('I hate Mondays more than Garfield.'))
    assert.isTrue(console.log.calledWith('Everybody\'s working for the weekend.'))
    assert.isTrue(console.log.calledWith('Almost there...'))
    assert.isTrue(console.log.calledWith('Yay, it\'s the weekend!'))
  })

  it('question3', () => {
    main.question3(3)
    assert.isTrue(console.log.calledWith("out of range, too low"))
    main.question3(29)
    assert.isTrue(console.log.calledWith("out of range, too high"))
    main.question3(14)
    assert.isTrue(console.log.calledWith("right in the sweet spot!"))
  })

  it('question4', () => {
    main.question4("Otto")
    assert.isTrue(console.log.calledWith("Your name starts with a vowel"))
    main.question4("Madeline")
    assert.isTrue(console.log.calledWith("Your name is longer than 5 characters"))
    main.question4("Ophelia")
    assert.isTrue(console.log.calledWith("Your name starts with a vowel and is longer than 5 characters"))
    main.question4("Bob")
    assert.isTrue(console.log.calledWith("Your name doesn't start with a vowel, and isn't longer than 5 characters"))
  })

  it('question5', () => {
    main.question5()
    let i=0;
    while (i<=100) {
      i += 5;
      assert.isTrue(console.log.calledWith(i))
    }
  })

  it('question6', () => {
    main.question6()
    let i=100;
    while (i>0) {
      i -= 3;
      assert.isTrue(console.log.calledWith(i))
    }
  })

  it('question8', () => {
    main.question8({
      name: "McGuy",
      address: "123 main street",
      occupation: "Pirate in training"
    })

    assert.isTrue(console.log.calledWith("name: McGuy"))
    assert.isTrue(console.log.calledWith("address: 123 main street"))
    assert.isTrue(console.log.calledWith("occupation: Pirate in training"))

  })

  it('question9', () => {
    main.question9({
      page1: "it was a dark and stormy night... ",
      page2: "The hero was on a journey ",
      page3: "The hero wins in the end!",
      pokemonCaptured: 5,
      stepstaken: 500
    })

    assert.isTrue(console.log.calledWith("it was a dark and stormy night... The hero was on a journey The hero wins in the end!"))
    assert.isTrue(console.log.calledWith("505"))
  })

  it('question10', () => {
    main.question10(5, "ha")
    assert.isTrue(console.log.calledWith("hahahahaha"))
    main.question10(6, "rofl")
    assert.isTrue(console.log.calledWith("roflroflroflroflroflrofl"))
  })

  it('question11', () => {
    main.question11(3)
    assert.isTrue(console.log.calledWith("[3,6,9]"))
    main.question11(5)
    assert.isTrue(console.log.calledWith("[5,10,15,20,25]"))
  })
})
