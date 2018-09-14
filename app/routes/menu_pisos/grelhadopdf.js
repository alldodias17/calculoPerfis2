module.exports = function(app){
    app.get('/grelhadopdf', function(req,res){
        res.render('menu_pisos/grelhadopdf');
    });
}