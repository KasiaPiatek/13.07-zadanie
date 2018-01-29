var fs = require('fs');
var colors = require('colors');


fs.readdir('./teksty', 'utf-8', function(err, tekst) {
    console.log(colors.green('Dane przed zapisem!'));
    console.log(tekst);

        fs.writeFile('tekst2.txt', 'tekst.txt', (err) => {
        if (err) throw err;
            console.log(colors.green('Dane po zapisie'));
            console.log(tekst);

    })
    })
