module.exports = function(app){
    app.get('/prateleiras_ind', function(req,res){
        res.render('prateleiras_ind/prateleiras_ind',);
    });
}