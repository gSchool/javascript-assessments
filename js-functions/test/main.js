const chai = require('chai')
const assert = chai.assert
const expect = chai.expect
const main = require('../src/main')

// Listen for console.log statements
require('mocha-sinon')
function stubFn () { this.sinon.stub(console, 'log');}


describe('main', () => {

  beforeEach(stubFn)

  it('question0 is a function that logs and doesn\'t return', () => {
    main.question0()

    console.log(console.log.calledWith('Hello JavaScript'));
    assert.isTrue(console.log.calledWith('Hello JavaScript'))
  })

  it('question1 is a function that returns and doesn\'t log', () => {
    const actual = main.question1()
    const expected = 'Hello JavaScript'

    assert.equal(actual, expected)
  })

  it('question2 is a function that with one parameter', () => {
    main.question2('my value')
    main.question2(10)

    assert.equal(console.log.callCount, 2)
    assert.isTrue(console.log.calledWith('Inputted value: my value'))
    assert.isTrue(console.log.calledWith('Inputted value: 10'))
  })

  it('question3 is a function that with two parameters', () => {
    const actual1 = main.question3(10, 21)
    const expected1 = 31
    assert.equal(actual1, expected1)

    const actual2 = main.question3('Hello', 'JavaScript')
    const expected2 = 'HelloJavaScript'
    assert.equal(actual2, expected2)
  })

  it('question4 is a function that calls another function', () => {
    const stringified = main.question4.toString()
    const reg = /question2/
    assert.isOk(stringified.match(reg))

    main.question4()
    const expectedStr = 'Inputted value: functions in functions'
    const expected = console.log.calledWith(expectedStr)
    assert.isTrue(expected)
  })

  it('question5 is a short function composed of other short functions', () => {
    const stringified = main.question5.toString()
    const daysAsParameterReg = /\(days,/
    const switchReg = /switch/
    const forReg = /for/

    assert.isOk(stringified.match(daysAsParameterReg))
    assert.isNotOk(stringified.match(switchReg))
    assert.isOk(stringified.match(forReg))

    const days = ['Mon', 'Sat']
    main.question5(days, 'go hiking')

    assert.equal(console.log.callCount, 2)
    assert.isTrue(console.log.calledWith(`Hooray! I can\'t wait to go hiking`))
    assert.isTrue(console.log.calledWith(`Better get back to work!`))
  })

  it('question6 is a function that can concatenate any number of arguments', () => {
    expect(main.question6("a","b","c")).to.eq("abc")
    expect(main.question6("d")).to.eq("d")
    expect(main.question6("a","b","c","d","e")).to.eq("abcde")

    expect(main.question6(5,0,0,0)).to.eq("5000")
  })

  it('question7 is a function that can output data about the function call', function () {
    main.question7("a", "b");

    const expectedStr = "You input 2 arguments, and together they make the string: ab";
    const expected = console.log.calledWith(expectedStr);
    assert.isTrue(expected);
  })

  it('question8 is a function that returns a string with the first two letters removed', function () {
    expect(main.question8("Hannah")).to.eq("nnah");
  })

  it('question9 is a function that returns the name game!', function () {
    expect(main.question9("Hannah")).to.eq("Hannah Hannah fo fannah, me my mo mannah, Hannah!");
    expect(main.question9.toString()).to.contain("question8");
  })

  it('question10 is a function that sorts an array of objects by a given key', function () {
    var musketeers = [{name: "Athos", year: 1615}, {name: "Porthos", year: 1617}, {name: "Aramis", year: 1620}]

    main.question10(musketeers, "name");
    expect(musketeers[0].name).to.eq("Aramis");
    expect(musketeers[1].name).to.eq("Athos");
    expect(musketeers[2].name).to.eq("Porthos");
    main.question10(musketeers, "year");
    expect(musketeers[0].name).to.eq("Athos");
    expect(musketeers[1].name).to.eq("Porthos");
    expect(musketeers[2].name).to.eq("Aramis");
  })

  it('question11 is a function that validates the existance of certain properties on an object', function () {
    expect(main.question11({hasCats: true})).to.have.property('name', "");
    expect(main.question11({hasCats: true})).to.have.property('age', 0);
    expect(main.question11({hasCats: true})).to.have.property('hometown', "");
    expect(main.question11({hasCats: true})).to.have.property('hasDogs', false);
    expect(main.question11({hasCats: true})).to.have.property('hasCats', true);
  })

  it('postOffice is a function that calculates the shipping of a package, given a customs configuration', function() {
    expect(main.postOffice({weight: 1, destination: "New York, NY, USA"}, main.customs)).to.eq(0.39);
    expect(main.postOffice({weight: 1, destination: "Mexico City, MEX, MX"}, main.customs)).to.eq(1.45);
  })

  it('question12 is a function that can filter arrays', () => {
    expect(main.question12([1,2,3,4,5,6], function (element) { return element % 2 == 0})).to.contain(2,4,6);
  })

  it('question13 is a function that returns another function that can increment a counter', () => {
    let incrementer = main.question13(0,10);

    expect(incrementer()).to.eq(10);
    expect(incrementer()).to.eq(20);
    expect(incrementer()).to.eq(30);

    let decrementer = main.question13(0,-10);

    expect(decrementer()).to.eq(-10);
    expect(decrementer()).to.eq(-20);
    expect(decrementer()).to.eq(-30);
  })

  it('mystery should be called with a callback function that produces a specific value', () => {
    expect(main.cubeResult).to.eq(15);
    expect(main.numResult).to.eq(50000);
    expect(main.lettersResult).to.eq('aeiou');
  })

})
