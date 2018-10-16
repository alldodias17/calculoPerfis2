module.exports = function(app){
    app.get('/ppnapdf', function(req,res){
        res.render('perfis_perfurados/ppnapdf');
    });
    

}