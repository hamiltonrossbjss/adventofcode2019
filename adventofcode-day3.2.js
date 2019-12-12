var expect = require("chai").expect;
const fs = require("fs");
const readline = require("readline");
var wire = [];
var wire1 = [];
var wire2 = [];

function printToConsole(array) {
  for (i = 0; i < array.length; i++) {
    console.log(`Index: ${i} - Value: ${array[i]}`);
  }
}

async function processLineByLine() {
  const fileStream = fs.createReadStream("inputfileday3.txt");
  var linecount = 0;

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });

  for await (const line of rl) {
    wire[linecount] = line.split(",");
    linecount++;
  }

  wire1 = wire[0];
  wire2 = wire[1];
  pathfinder();
}

function Position(X, Y) {
  this.X = X;
  this.Y = Y;
}

function newPosition(position) {
  var clone ={};
  for( var key in position ){
      if(position.hasOwnProperty(key)) //ensure not adding inherited props
          clone[key]=position[key];
  }
  return clone;
}

processLineByLine();

function pathfinder() {
  var wirepath1 = [];
  var wirepath2 = [];

  var wire1direction = [];
  var wire1distance = [];
  var wire2direction = [];
  var wire2distance = [];

  var X = 0;
  var Y = 0;

  for (var instruction = 0; instruction < wire1.length; instruction++) {
    var direction = wire1[instruction].substring(0, 1);
    var distance = wire1[instruction].substring(1, wire1[instruction].length);
    wire1direction.push(direction);
    wire1distance.push(distance);
  }

  for (var instruction = 0; instruction < wire2.length; instruction++) {
    var direction = wire2[instruction].substring(0, 1);
    var distance = wire2[instruction].substring(1, wire2[instruction].length);
    wire2direction.push(direction);
    wire2distance.push(distance);

  }

  function objectsAreSame(a, b) {
    var objectsAreSame = false;
    console.log(a, b)
    if(a.X == b.X && a.Y == b.Y) {
          objectsAreSame = true;
    }
    console.log(objectsAreSame);
    return objectsAreSame;
 }

  currentPosition = new Position(0, 0);
  for (index = 0; index < wire1direction.length ; index++) {
    switch (wire1direction[index]) {
      case "L":
        for (path = 0; path < wire1distance.length; path++) {
          currentPosition.X = currentPosition.X - 1;
          wirepath1.push(newPosition(currentPosition));
        }
        break;
      case "R":
        for (path = 0; path < wire1distance[index]; path++) {
          currentPosition.X = currentPosition.X + 1;
          wirepath1.push(newPosition(currentPosition));
        }
        break;
      case "U":
        for (path = 0; path < wire1distance[index]; path++) {
          currentPosition.Y = currentPosition.Y + 1;
          wirepath1.push(newPosition(currentPosition));
        }
        break;
      case "D":
        for (path = 0; path < wire1distance[index]; path++) {
          currentPosition.Y = currentPosition.Y - 1;
          wirepath1.push(newPosition(currentPosition));
        }
        break;
      default:
        console.log(`default`);
    }
    
  }

  currentPosition.X = 0;
  currentPosition.Y = 0;
  for (index = 0; index < wire2direction.length; index++) {
    switch (wire2direction[index]) {
      case "L":
        for (path = 0; path < wire2distance[index]; path++) {
          currentPosition.X = currentPosition.X - 1;
          wirepath2.push(newPosition(currentPosition));
        }
        break;
      case "R":
        for (path = 0; path < wire2distance[index]; path++) {
          currentPosition.X = currentPosition.X + 1;
          wirepath2.push(newPosition(currentPosition));
        }
        break;
      case "U":
        for (path = 0; path < wire2distance[index]; path++) {
          currentPosition.Y = currentPosition.Y + 1;
          wirepath2.push(newPosition(currentPosition));
        }
        break;
      case "D":
        for (path = 0; path < wire2distance[index]; path++) {
          currentPosition.Y = currentPosition.Y - 1;
          wirepath2.push(newPosition(currentPosition));
        }
        break;
      default:
        console.log(`default`);
    }
  }
    
  // console.log(`wirepath1: `, wirepath1);
  // console.log(`wirepath2: `, wirepath2);

      // var examplewire1 = ["R75","D30","R83","U83","L12","D49","R71","U7","L72"];
      // var examplewire2 = ["U62","R66","U55","R34","D71","R55","D58","R83"];

      // var examplewire1 = [[0,1],[0,2],[1,2]];
      // var examplewire2 = [[0,1],[1,1],[1,2]];
      // var examplewire1 = [1,3,5];
      // var examplewire2 = [2,3,4];

  // const intersection = wirepath1.filter(element => wirepath2.forEach(element2 => objectsAreSame(element, element2)));

  const intersection = wirepath1.filter(element => wirepath2.filter(element2 => objectsAreSame(element, element2)));

  // const intersection = wirepath1.filter(element => console.log(element));

  // const intersection = examplewire1.filter(element => console.log(element));
  // const intersection = examplewire1.includes([0,1]);

  // console.log(`intersection: `, examplewire1.reduce(function(a,b) { return a.concat(b);  }));
  
  // arr.reduce(function(a,b) { return a.concat(b);  })
  //  .filter(function(obj) { return obj.id == ID; });

  // const intersection = examplewire1.filter(element => examplewire2.includes(element));

  // const intersection = examplewire1.reduce(function(a,b) { return a.concat(b);  })
  //   .filter(element => examplewire1.reduce(function(a,b) { return a.concat(b);  })
  //   .includes(element));

  console.log(`intersection: `, intersection);
}

// describe("Path finder", function() {
//     it("Example 1", function() {
//       var examplewire1 = [R75,D30,R83,U83,L12,D49,R71,U7,L72];
//       var examplewire2 = [U62,R66,U55,R34,D71,R55,D58,R83];
//       var expecteddistance = 159;
//       calculateddistance = pathfinder(examplewire1, examplewire2)
//       expect(calculateddistance).to.eql(expecteddistance);
//     });

//     it("Example 2", function() {
//       var examplewire1 = [R98,U47,R26,D63,R33,U87,L62,D20,R33,U53,R51];
//       var examplewire2 = [U98,R91,D20,R16,D67,R40,U7,R15,U6,R7];
//       var expecteddistance = 135;
//       calculateddistance = pathfinder(examplewire1, examplewire2)
//       expect(calculateddistance).to.eql(expecteddistance);
//     });

//     it("Example 3", function() {
//       var examplewire1 = [R8,U5,L5,D3];
//       var examplewire2 = [U7,R6,D4,L4];
//       var expecteddistance = 6;
//       calculateddistance = pathfinder(examplewire1, examplewire2)
//       expect(calculateddistance).to.eql(expecteddistance);
//     });

// });
