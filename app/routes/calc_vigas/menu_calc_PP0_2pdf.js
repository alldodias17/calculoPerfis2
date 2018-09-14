module.exports = function(app){
    app.get('/menu_calc_PP0_2pdf', function(req,res){
        res.render('calc_vigas/menu_calc_PP0_2pdf');
    });
}