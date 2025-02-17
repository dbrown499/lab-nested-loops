/// Problem 1: Count Zeroes
/**
 * Counts the number of zeroes in a 2D array.
 * @param {number[][]} matrix - A 2D array of numbers.
 * @returns {number} - The count of zeroes in the matrix.
 * @example
 * // returns 2
*/
let generalArray = [[1, 0, 3], [4, 5, 0], [7, 8, 9]];

function countZeroes(matrix) {
  let count = 0;
    for(let i = 0; i < matrix.length; i++){
      for(let j = 0; j < matrix[i].length; j++){
        if(matrix[i][j] === 0){
          count++;
      }
      }
    }
    return count;
  };


/// Problem 2: Search for an Element
/**
 * Searches for a specific element in a 2D array and returns its position.
 * @param {number[][]} matrix - A 2D array of numbers.
 * @param {number} element - The element to search for.
 * @returns {string} - The position of the element or 'Element not found'.
 * @example
 * // returns 'Element found at row 1, column 1'
*/
findGivenElement = [
[1, 2, 3], 
[4, 5, 6], 
[7, 8, 9], 
5];
function findElement(matrix, element) {
  for(let i = 0; i < matrix.length; i++){
    for(let j = 0; j < matrix[i].length; j++){
      if(matrix[i][j] === element){
        return `Element found at row ${i}, column ${j}`;
      }
    } 
  }
  return "Element not found";
}

/// Problem 3: Grid Coordinate Logger

/**
 * Logs the value and coordinates of each element in a 2D array.
 * @param {any[][]} matrix - A 2D array.
 * @example
 * // logs: 'Element at row 0, column 0 is 1', 'Element at row 0, column 1 is 2', ...
*/
logGriddedCoordinates = [
  [1, 2], 
  [3, 4]
];

function logGridCoordinates(matrix) {
  let string = "";
  for(let i = 0; i < matrix.length; i++){
    for(let j = 0; j < matrix[i].length; j++){
      console.log(`Element at row ${i}, column ${j} is ${matrix[i][j]}`);
    } 
  }
}


/// Problem 4: School Schedule Organizer
/**
 * Organizes a weekly class schedule into a structured format. You will need to import the schedule from data/schedule.js.
 * @param {Object[][]} schedule - A 2D array where each element is an object with class details.
 * @returns {Object} - An object with organized schedule.
 * @example See tests in Jests in index.test.js for examples.
 */

const data = require('./data/schedule.js');
function organizeSchedule(schedule) {
  let mondaySchedule;
  let organizedSchedule = {
"Monday": "",
"Tuesday": [],
  }
  for(let i = 0; i < schedule.length; i++){
    for(let j = 0; j < schedule[i].length; j++){
      if(schedule[i][j].subject === "Math"){
        mondaySchedule = (`"${schedule[i][j].subject} with ${schedule[i][j].teacher}", `);
      } if(schedule[i][j].subject === "History"){
        mondaySchedule += (`"${schedule[i][j].subject} with ${schedule[i][j].teacher}"`);
        organizedSchedule.Monday = [`${mondaySchedule}`];
      }
    }
  }
  return organizedSchedule;
}
console.log(organizeSchedule(data)); 
//console.log(organizeSchedule(data));
// EXPECTED: {
// "Monday": ["Math with Mr. Smith", "History with Mrs. Jones"], 
// "Tuesday": ["Science with Mr. Brown", "English with Ms. Davis"]
// }


/// Problem 5: Grid Function Calculator (Challenging)
/**
 * Calculates the sum of results from a grid of functions. You will need to import the grid from data/gridCalc.js.
 * @param {Object[][]} grid - A 2D array where each element is an object containing a function and its parameters.
 * @returns {number} - The sum of the results of all functions in the grid.
 * @example See tests in Jests in index.test.js for examples.
 */
//const data = require('./data/gridCalc.js');
function calculateGridFunctions(grid) {
  // Function implementation.
}
//console.log(data);


module.exports = {
    countZeroes,
    findElement,
    logGridCoordinates,
    organizeSchedule,
    calculateGridFunctions
}
