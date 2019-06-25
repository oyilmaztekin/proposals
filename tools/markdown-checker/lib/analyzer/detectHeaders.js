const traverseChildren = require("./../transformer/traverser").traverseChildren;
/**
 * @param {Object} tableRow
 * @returns {Object} - Header template for table 
 */
module.exports = function detectHeaders(tableRow) {
  let cellSize = tableRow["align"].length;
  let headerNode =  tableRow["children"][0];
  debugger;
  //create header template here
};