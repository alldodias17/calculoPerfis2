module.exports = function(app){
    app.get('/antiderrapantepdf', function(req,res){
        res.render('menu_pisos/antiderrapantepdf');
    });
}