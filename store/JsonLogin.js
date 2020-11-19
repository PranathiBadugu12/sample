'use strict';
const excelToJson = require('convert-excel-to-json');
 
const results = excelToJson({
    sourceFile: 'src/store/Customers.xlsx',
    columnToKey: {
        A: 'CustomerId'
    }
});
const fs = require('fs');
fs.writeFile('src/store/db.json', JSON.stringify(results), (err) => {
    if (err) {
        throw err;
    }
    console.log("JSON data is saved.");
});
