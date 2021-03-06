var expect = require("chai").expect;

var rangeMin = 256310;
var rangeMax = 732736;

// six-digit number
// within the range
// Two adjacent digits are the same
// the digits never decrease
//
// Target: How many different valid passwords in range?
//
// Tests:
// 111111 meets these criteria (double 11, never decreases).
// 223450 does not meet these criteria (decreasing pair of digits 50).
// 123789 does not meet these criteria (no double).

var rawPasswords = [];

for (password = rangeMin; password < rangeMax; password++){
  rawPasswords.push(password)
}

console.log(`Total Passwords: `,rawPasswords.length)

var twoDigitsPassword = rawPasswords.filter(password => exactlyTwoDigitsPasswordFilter(password));
console.log(`Two Digit Passwords: `,twoDigitsPassword.length)

var increasingPassword = twoDigitsPassword.filter(password => increasingPasswordFilter(password));
console.log(`Increasing Passwords: `,increasingPassword.length)

// var lessThanThreeDigitPassword = increasingPassword.filter(password => lessThanThreeDigitPassword(password));
// console.log(`Less Than Three consequtive Passwords: `, lessThanThreeDigitPassword.length)

function twoDigitsPasswordFilter(password){
var twoDigits = false;
var currentChar;
var previousChar;
  for (char = 0; char < password.toString().length; char++){
    currentChar = password.toString().charAt(char);
    // console.log(`current`, currentChar, `previous`,previousChar);
    if (currentChar == previousChar){
      twoDigits =  true
    // console.log(`two digit: `, password, currentChar, previousChar);
    }
    previousChar = currentChar
  }
return twoDigits;
}

function exactlyTwoDigitsPasswordFilter(password){
  var exactlyTwoDigits = false;
  var passwordChars = [];
    for (char = 0; char < password.toString().length; char++){
      passwordChars.push(password.toString().charAt(char));
    }
    for (char = 0; char < passwordChars.length; char++){
      if(passwordChars[char] == passwordChars[char-1] 
      && passwordChars[char] != passwordChars[char-2] 
      && passwordChars[char] != passwordChars[char+1]){
        exactlyTwoDigits = true;
      }
    }
  return exactlyTwoDigits;
  }

function increasingPasswordFilter(password){
  var increasingPassword = true;
  var currentChar;
  var previousChar;
  for (char = 0; char < password.toString().length; char++){
    currentChar = password.toString().charAt(char);
    if (+currentChar < +previousChar){
      increasingPassword = false;
      // console.log(`increasing: `, password)
      break;
    }
    previousChar = currentChar
  }
  return increasingPassword;
}

describe("Two Digit checker", function() {

  it("First two digits", function() {
    expect(twoDigitsPasswordFilter(112345)).to.be.true;
  });

  it("middle two digits", function() {
    expect(twoDigitsPasswordFilter(123345)).to.be.true;
  });

  it("last 2 digits", function() {
    expect(twoDigitsPasswordFilter(123455)).to.be.true;
  });

  it("no digits", function() {
    expect(twoDigitsPasswordFilter(123456)).to.be.false;
  });
});

describe("Increasing Password checker", function() {

  it("Increasing", function() {
    expect(increasingPasswordFilter(123456)).to.be.true;
  });

  it("Stay same", function() {
    expect(increasingPasswordFilter(654321)).to.be.false;
  });

  it("decreasing", function() {
    expect(increasingPasswordFilter(111111)).to.be.true;
  });

  it("mix", function() {
    expect(increasingPasswordFilter(111234)).to.be.true;
  });
});

describe("exactly 2 digits Password checker", function() {
  
  it("1 digit", function() {
    expect(exactlyTwoDigitsPasswordFilter(123456)).to.be.false;
  });

  it("2 digits", function() {
    expect(exactlyTwoDigitsPasswordFilter(122456)).to.be.true;
  });

  it("3 digits", function() {
    expect(exactlyTwoDigitsPasswordFilter(123334)).to.be.false;
  });

  it("4 digits", function() {
    expect(exactlyTwoDigitsPasswordFilter(123333)).to.be.false;
  });

  it("5 digits", function() {
    expect(exactlyTwoDigitsPasswordFilter(111112)).to.be.false;
  });

  it("2+4 digits", function() {
    expect(exactlyTwoDigitsPasswordFilter(111122)).to.be.true;
  });
});