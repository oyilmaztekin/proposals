const { traverseChildren } = require('./../transformer/traverser');
/**
 * @param {Object} tableRow
 * @returns {Object} - collected header template
 */
function detectHeaders(tableRow) {
  let cellSize = tableRow.align.length;
  let [headerNode] = tableRow.children;
  // create header template here
};

module.exports = detectHeaders;
