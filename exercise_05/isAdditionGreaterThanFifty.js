/**
 * #5 :: Export JS function "isAdditionGreaterThanFifty" to check a pair of numbers and return true if their sum is 50 or greater than 50
 * input: number (summand1)
 * input: number (summand2)
 * output: boolean
 */

/**
 * Check a pair of numbers and return true if their sum is 50 or greater than 50
 * @param {number} summand1 
 * @param {number} summand2 
 * @returns boolean
 */
const isAdditionGreaterThanFifty = function(summand1, summand2) {
    return (summand1 + summand2) >= 50;
};

export default isAdditionGreaterThanFifty;
