var fs= require('fs')

fs.readFile('2.js','utf8', function(err, data){
    console.log(data)
})

fs.writeFile('4.js','console.log("This is a sample text that is added via node.js")',function(err,){
    console.log("Data Saved")
})

fs.appendFile('4.js','console.log("This is appended content")',function(err,){
    console.log("Data Appended")
})

fs.unlink('4.js',function(err){
    console.log('File deleted')
})