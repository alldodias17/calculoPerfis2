module.exports = function(app){
    app.get('/lisopdf', function(req,res){
        res.render('menu_pisos/lisopdf');
    });
}