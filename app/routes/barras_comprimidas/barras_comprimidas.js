module.exports = function(app){
    app.get('/barras_comprimidas', function(req,res){
        res.render('barras_comprimidas/barras_comprimidas');
    });
}