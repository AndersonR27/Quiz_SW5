const app = require("./app");

async function main() {
  app.listen(8000);
  console.log("Server on port", 8000);
}

main();