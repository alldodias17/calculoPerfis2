module.exports = function(app){
    app.get('/entrada_laterais', function(req,res){
        res.render('menu_entrada_laterais/entrada_laterais');
    });
}