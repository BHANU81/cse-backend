const fs = require("fs");
//const data = fs.readFileSync("./data.txt");
//console.log(data)
//fs.writeFileSync("./data.txt","hello ABES","utf-8");
//fs.appendFileSync("./data.txt","hello ABES","utf-8");
fs.renameSync("./data1.txt","data2.txt");
fs.unlinkSync("./data.txt");
const data = fs.readFileSync("./data.txt","utf-8");
console.log(data)
if (data.match("H")) {
    console.log("file contains 'H'","ABES");
    fs.writerFileSync("./data.txt", newdata,"utf-8");
}
