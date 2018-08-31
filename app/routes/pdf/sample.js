var pdf = require ('pdfkit');
var fs = require('fs');


var myDoc = new pdf;

myDoc.pipe(fs.createWriteStream('node.pdf'))



   
myDoc.image('P-01.jpg', 110, 15, { width: 310, height:230})
.text('PerfisCalc', 150, 0)
   

myDoc.fontSize(25)
   .fillColor('blue')
   .text('This is a link!', 20, 0)


width = myDoc.widthOfString('This is a link!')
height = myDoc.currentLineHeight()   


myDoc.underline(20, 0, width, height,)
   .link(20, 0, width, height, 'http://google.com/')
   

   myDoc.moveDown()
   .fillColor('black')
   .highlight(20, myDoc.y, myDoc.widthOfString('This text is highlighted!'), height)
   .text('This text is highlighted!')

  
   myDoc.moveDown()
   .strike(20, myDoc.y, myDoc.widthOfString('STRIKE!'), height)
   .text('STRIKE!')

myDoc.end();




