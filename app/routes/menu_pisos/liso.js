module.exports = function(app){
    app.get('/liso', function(req,res){
        res.render('menu_pisos/liso');
    });
}