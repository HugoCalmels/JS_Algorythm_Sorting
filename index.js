const fs = require('fs');
const sort = require("./script_2")

const fileName = process.argv[2];

fs.readFile(fileName, 'utf8', function (err, data) {
  const content = data;
  console.log(content);
  const strArr = data.split(' ');
  const dataArr = strArr.map(x => Number.parseInt(x, 10));
  console.log(dataArr); // TEST Start
  const sorter = new sort(dataArr);
  console.log(dataArr); // TEST End
  console.log(`This algorithm sorted our array using ${sorter.count} comparisons.`);
});