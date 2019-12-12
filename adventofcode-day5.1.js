const fs = require('fs');
var expect = require('chai').expect;

var inputArray = fs.readFileSync('adventofcode-day5-input.txt').toString().split(",");

function printArray(array) {
  for (i = 0; i < array.length; i++) {
    console.log(`Index: ${i} - Value: ${array[i]}`);
  }
}

function processor(array) {
  index = 0
  while (index < array.length) {
    console.log(`index: `, index, `switch: `, array[index])
    switch (array[index]) {
      case 1:
        console.log(`add: `, array[array[index + 1]], array[array[index + 2]], array[index + 3], `val:`, (array[array[index + 1]] + array[array[index + 2]]));
        array[array[index + 3]] = array[array[index + 1]] + array[array[index + 2]];
        index = index + 4
        // console.log(`add: `, array);
        console.log(array);
        break;
      case 2:
        console.log(`mul: `, array[array[index + 1]], array[array[index + 2]], array[index + 3], `val: `, (array[array[index + 1]] * array[array[index + 2]]));
        array[array[index + 3]] = array[array[index + 1]] * array[array[index + 2]];
        index = index + 4
        // console.log(`multiply: `, array);
        console.log(array);
        break;
      case 99:
        index = array.length
        break;
      default:
        index = index+1;
    }
  }
}

// processor(inputArray);
printArray(inputArray);


// describe("Process Operation", function() {
//     it("basic program 1", function() {
//       var testarray = [1, 0, 0, 0, 99];
//       var expectedarray = [2,0,0,0,99];
//       processor(testarray);
//       expect(expectedarray).to.eql(testarray);
//     });

//     it("basic program 2", function() {
//       var testarray = [2, 3, 0, 3, 99];
//       var expectedarray = [2,3,0,6,99];
//       processor(testarray);
//       expect(expectedarray).to.eql(testarray);
//     });

//     it("basic program 3", function() {
//       var testarray = [2, 4, 4, 5, 99, 0];
//       var expectedarray = [2,4,4,5,99,9801];
//       processor(testarray);
//       expect(expectedarray).to.eql(testarray);
//     });

//     it("basic program 4", function() {
//       var testarray = [1, 1, 1, 4, 99, 5, 6, 0, 99];
//       var expectedarray = [30,1,1,4,2,5,6,0,99];
//       processor(testarray);
//       expect(expectedarray).to.eql(testarray);
//     });

//     it("basic program 5", function() {
//       var testarray = [1,9,10,3,2,3,11,0,99,30,40,50];
//       var expectedarray = [3500,9,10,70,2,3,11,0,99,30,40,50];
//       processor(testarray);
//       expect(expectedarray).to.eql(testarray);
//     });
//   });