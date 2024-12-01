/**
 * #6 :: Export JS function "checkCollectionHasElements" to get length of a collection and check whether it is empty or not
 * input: array (collection)
 * output: boolean
 */

/**
 * Get length of a collection and check whether it is empty or not
 * @param {Array} collection 
 * @returns boolean
 */
const checkCollectionHasElements = function(collection) {
    return Array.isArray(collection) && collection.length > 0;
};

export default checkCollectionHasElements;
