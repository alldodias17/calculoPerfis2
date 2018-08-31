module.exports = function(app){
    app.get('/prateleiras_ind_01', function(req,res){
        res.render('prateleiras_ind/prateleiras_ind_01');
    });
}