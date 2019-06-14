const readMarkdown = require("./lib/readMarkdown");
const parseToAST = require("./lib/parseToAst");
const collectLinkDefinitions = require("./lib/collectLinkDefinitions");
const generateTable = require("./lib/createTable")
  .generateTable;
const config = require("./config.json");

function processStage3({ stage3 } = config) {
  const markdownStage3 = readMarkdown.markdownFile(
    stage3
  );
  const parsedFile = parseToAST(markdownStage3);
  const collectedLinkDefinitions = collectLinkDefinitions(
    parsedFile
  );
  const tableStage1 = generateTable(
    parsedFile,
    collectedLinkDefinitions
  );
  debugger;
}

processStage3();
// const tableStage1 = generateTable(
//   hash["Stage_1"],
//   "stage1",
//   collectedLinkDefinitions
// );
// create a json file based on the constructed object
