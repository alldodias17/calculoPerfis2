module.exports = function(app){
    app.get('/menu_calc_P99_9', function(req,res){
        res.render('calc_vigas/menu_calc_P99_9');
    });
}