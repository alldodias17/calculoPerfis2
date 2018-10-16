module.exports = function(app){
    app.get('/pplapdf', function(req,res){
        res.render('perfis_perfurados/pplapdf');
    });
    

}