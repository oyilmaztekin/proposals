/**
 * @param {Object} node - Parsed markdown file an AST Object
 * @returns {Object} - detected table node of the AST   
 */
module.exports = function detectTables(node) {
  for (let i = 0; i < node.children.length; i++) {
    const currentNode = node.children[i];
    if (currentNode["type"] && currentNode["type"] === "table") {
      return currentNode;
    }
    
  }
};
