module.exports = function(app){
    app.get('/menu_prateleiras', function(req,res){
        res.render('menu_prateleiras/menu_prateleiras',);
    });
}