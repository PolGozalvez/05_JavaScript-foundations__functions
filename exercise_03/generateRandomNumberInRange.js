/**
 * #3 :: Export JS function "generateRandomNumberInRange" to generate a rounded random number depending on a limit
 * input: number (limit)
 * output: number
 */

/**
 * Generate a rounded random number depending on a limit
 * @param {number} limit 
 * @returns number
 */
const generateRandomNumberInRange = function(limit) {
    return Math.floor(Math.random() * (limit + 1));
};

export default generateRandomNumberInRange;
