const express = require('express');

const app = express();


const xlsxj = require('xlsx-to-json');
require('dotenv').config();
const filePath =
   xlsxj({
  input: "excel.xlsx",
  output: "output.json"
}, function(err, res){
  if(err){
    console.log("this is error",err);
  } else {
    console.log("this is result", res);
  }
});

// excelFile object.
// const excelFile = xlsxj.readFile('excel.xlsx');
// console.log('excelFile', excelFile);
// array of strings, Each string is the name of the sheet
// const sheetNa = excelFile.Sheets;
// console.log('sheetNa', sheetNa);
// specific spreadsheet from the supplied excel file
// const sheetName = excelFile.SheetNames[0];
// console.log('sheetName', sheetName);
// const sheet = excelFile.Sheets[sheetName];
// console.log('sheet', sheet);


  // sheetNa.forEach(function(y) {
  //   const excelSheet = excelFile.sheet1;
  //   console.log('excelSheet', excelSheet);
  // })



app.set('port', process.env.PORT || 5555);

module.exports = app;
