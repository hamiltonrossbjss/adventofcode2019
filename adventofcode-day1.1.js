const readline = require('readline');
var expect = require('chai').expect;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'mass: '
});

rl.prompt();

rl.on('line', (line) => {
      console.log(calculateFuel(line.trim()));
  rl.prompt();
}).on('close', () => {
  console.log('Have a great day!');
  process.exit(0);
});

function calculateFuel(mass){
  return Math.floor(mass / 3) - 2;
}
describe("Calculate Fuel", function() {
  it("converts 12 mass to fuel units", function() {
    expect(calculateFuel(12)).to.equal(2);
  });

  it("converts 14 mass to fuel units", function() {
    expect(calculateFuel(14)).to.equal(2);
  });

  it("converts 1969 mass to fuel units", function() {
    expect(calculateFuel(1969)).to.equal(654);
  });

  it("converts 100756 mass to fuel units", function() {
    expect(calculateFuel(100756)).to.equal(33583);
  });
});