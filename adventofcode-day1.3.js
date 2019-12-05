const readline = require('readline');
var expect = require('chai').expect;

const fs = require('fs');

var totalFuel = 0;

async function processLineByLine() {
  const fileStream = fs.createReadStream('input.txt');

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });
  // Note: we use the crlfDelay option to recognize all instances of CR LF
  // ('\r\n') in input.txt as a single line break.

  for await (const line of rl) {
    // Each line in input.txt will be successively available here as `line`.
    var fuel = calculateFuelFuel(line);
    totalFuel = totalFuel + fuel;
    console.log(`Mass: ${line} - Fuel: ${fuel} - TotalFuel: ${totalFuel}`);
  }
}

processLineByLine();

function calculateFuel(mass){
  return Math.floor(mass / 3) - 2;
};

function calculateFuelFuel(mass){
  var fuelFuel = 0;
  while (mass > 0) {
    mass = Math.max(0, Math.floor((mass / 3) - 2));
    fuelFuel = fuelFuel + mass;
    console.log(`Mass: ${mass} - fuelFuel: ${fuelFuel}`);
  }
return fuelFuel
};

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

describe("Calculate FuelFuel", function() {
  it("converts 12 mass to fuel units", function() {
    expect(calculateFuelFuel(12)).to.equal(2);
  });

  it("converts 1969 mass to fuel units", function() {
    expect(calculateFuelFuel(1969)).to.equal(966);
  });

  it("converts 100756 mass to fuel units", function() {
    expect(calculateFuelFuel(100756)).to.equal(50346);
  });
});

