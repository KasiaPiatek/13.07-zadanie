var fs = require('fs');
var colors = require('colors');


fs.readdir('./teksty', 'utf-8', function(err, files ) {
    console.log(colors.green('Dane przed zapisem!'));
    console.log(files);

        fs.writeFile('tekst2.txt', files, (err) => {
        if (err) throw err;
            console.log(colors.green('Dane po zapisie'));
            console.log(files);

    })
    })