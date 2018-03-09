module.exports = function(app){
    app.get('/menu_pisos', function(req,res){
        res.render('menu_pisos/menu_pisos');
    });
}