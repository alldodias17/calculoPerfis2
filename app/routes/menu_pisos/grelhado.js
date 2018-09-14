module.exports = function(app){
    app.get('/grelhado', function(req,res){
        res.render('menu_pisos/grelhado');
    });
}