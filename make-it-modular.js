const mymodule = require('./mymodule')
const callback=(err,data)=>{
    if (err) throw err;
    data.forEach(el => {
        console.log(el)
    });
}
mymodule(process.argv[2],process.argv[3],callback)