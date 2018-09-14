module.exports = function(app){
    app.get('/entrada_lateraispdf', function(req,res){
        res.render('menu_entrada_laterais/entrada_lateraispdf');
    });
}