module.exports = function(app){
    app.get('/calc_vigas', function(req,res){
        res.render('calc_vigas/calc_vigas');
    });
}