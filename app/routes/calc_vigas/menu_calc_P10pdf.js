module.exports = function(app){
    app.get('/menu_calc_P10pdf', function(req,res){
        res.render('calc_vigas/menu_calc_P10pdf');
    });
}