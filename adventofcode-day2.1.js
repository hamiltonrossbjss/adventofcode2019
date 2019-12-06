const readline = require("readline");
var expect = require("chai").expect;

const fs = require("fs");

var challangearray = [1,12,2,3,1,1,2,3,1,3,4,3,1,5,0,3,2,10,1,19,1,19,9,23,1,23,13,27,1,10,27,31,2,31,13,35,1,10,35,39,2,9,39,43,2,43,9,47,1,6,47,51,1,10,51,55,2,55,13,59,1,59,10,63,2,63,13,67,2,67,9,71,1,6,71,75,2,75,9,79,1,79,5,83,2,83,13,87,1,9,87,91,1,13,91,95,1,2,95,99,1,99,6,0,99,2,14,0,0];

function printToConsole(array) {
  for (i = 0; i < array.length; i++) {
    console.log(`Index: ${i} - Value: ${array[i]}`);
  }
}

function processor2(array) {
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

// function processor(numbers, index) {
//   console.log(`opcode: ${numbers[index]}`);
//   let operator = numbers[index];

//   do {
//     switch (operator) {
//       case 1:
//         console.log(numbers);
//         value1 = numbers[numbers[index + 1]];
//         console.log(`location1: ${index + 1} - value1: ${value1}`);
//         value2 = numbers[numbers[index + 2]];
//         console.log(`location2: ${index + 2} - value2: ${value2}`);
//         store = numbers[index + 3];
//         console.log(`location3: ${index + 3} - store location: ${store}`);
//         numbers[store] = value1 + value2;
//         console.log(`new store value: ${numbers[store]}`);
//         index = index + 4;
//         break;
//       case 2:
//         console.log(numbers);
//         value1 = numbers[numbers[index + 1]];
//         console.log(`location1: ${index + 1} - value1: ${value1}`);
//         value2 = numbers[numbers[index + 2]];
//         console.log(`location2: ${index + 2} - value2: ${value2}`);
//         store = numbers[index + 3];
//         console.log(`location3: ${index + 3} - store location: ${store}`);
//         numbers[store] = value1 * value2;
//         console.log(`new store value: ${numbers[store]}`);
//         index = index + 4;
//         break;
//       case 99:
//         console.log(`99 Red Ballons))`);
//         break;
//       default:
//         // console.log(`Default`);
//         break;
//     }
//     operator = numbers[index];
//   } while (operator != 99);
//   console.log(index);
// }

processor2(challangearray);
printToConsole(challangearray);

// describe("Process Operation", function() {
//     it("basic program 1", function() {
//       var testarray = [1, 0, 0, 0, 99];
//       var expectedarray = [2,0,0,0,99];
//       processor2(testarray);
//       expect(expectedarray).to.eql(testarray);
//     });

//     it("basic program 2", function() {
//       var testarray = [2, 3, 0, 3, 99];
//       var expectedarray = [2,3,0,6,99];
//       processor2(testarray);
//       expect(expectedarray).to.eql(testarray);
//     });

//     it("basic program 3", function() {
//       var testarray = [2, 4, 4, 5, 99, 0];
//       var expectedarray = [2,4,4,5,99,9801];
//       processor2(testarray);
//       expect(expectedarray).to.eql(testarray);
//     });

  //   it("basic program 4", function() {
  //     var testarray = [1, 1, 1, 4, 99, 5, 6, 0, 99];
  //     var expectedarray = [30,1,1,4,2,5,6,0,99];
  //     processor2(testarray);
  //     expect(expectedarray).to.eql(testarray);
  //   });

  //   it("basic program 5", function() {
  //     var testarray = [1,9,10,3,2,3,11,0,99,30,40,50];
  //     var expectedarray = [3500,9,10,70,2,3,11,0,99,30,40,50];
  //     processor2(testarray);
  //     expect(expectedarray).to.eql(testarray);
  //   });
    
  // });