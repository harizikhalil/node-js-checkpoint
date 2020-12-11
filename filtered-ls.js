const fs = require('fs')
const path=require('path')

fs.readdir(process.argv[2],(err,data)=>{
    if (err) throw err;
   filtredarr=data.filter((el)=>path.extname(el)===`.${process.argv[3]}`)
   filtredarr.map(el=>console.log(el))
   
})