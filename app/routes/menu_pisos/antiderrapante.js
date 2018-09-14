module.exports = function(app){
    app.get('/antiderrapante', function(req,res){
        res.render('menu_pisos/antiderrapante');
    });
}