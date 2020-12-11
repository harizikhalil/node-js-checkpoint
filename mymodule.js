const fs =require('fs')
const path =require('path')

module.exports= (dirName,extName,callback)=>{
       fs.readdir(dirName,(err,data)=>{
           if(err){
               return callback(err)
           }
           data=data.filter((el)=>path.extname(el)===`.${extName}`)
           callback(null,data)
       })
       
}