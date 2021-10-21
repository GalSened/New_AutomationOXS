


const xlsxFile = require('read-excel-file/node');

module.exports = xlsxFile('./Data.xlsx').then((MyData) => {
    console.table(MyData);


});     