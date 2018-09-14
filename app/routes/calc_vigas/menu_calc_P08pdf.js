module.exports = function(app){
    app.get('/menu_calc_P08pdf', function(req,res){
        res.render('calc_vigas/menu_calc_P08pdf');
    });
}