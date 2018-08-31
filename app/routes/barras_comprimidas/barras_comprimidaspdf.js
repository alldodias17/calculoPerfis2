module.exports = function(app){
    app.get('/barras_comprimidaspdf', function(req,res){
        res.render('barras_comprimidas/barras_comprimidaspdf');
    });
}