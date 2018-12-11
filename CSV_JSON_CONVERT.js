const csvFilePath='customer-data.csv'
const csv=require('csvtojson')
const fs=require('fs')
csv()
.fromFile(csvFilePath)
.then((jsonObj)=>{
    fs.writeFile('customer-data.json', JSON.stringify(jsonObj), function (err, file) {
        if (err) console.log(err);
        console.log('Great Success');
      })
    });
