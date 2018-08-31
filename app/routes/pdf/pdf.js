module.exports = function(app){
    var fs = require('fs');
        var pdf = require('html-pdf');
        var html = fs.readFileSync('app/views/menu_principal_01.ejs', 'utf8');
        var options = { format: 'Letter' };

        //Para gravar em disco e depois fazer download
        pdf.create(html, options).toFile('public/views/banco.pdf', function(err, res) {
           if (err) return console.log(err);
           console.log(res); // { filename: 'views/banco.pdf' } 
           var stream = fs.createReadStream('public/views/banco.pdf');
           var filename = "banco.pdf"; 
             response.setHeader('Content-disposition', 'inline; filename="' + filename + '"');
           response.setHeader('Content-type', 'application/pdf');
           stream.pipe(response);
        });



    };

