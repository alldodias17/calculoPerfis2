module.exports = function(app){
    app.get('/N42pdf', function(req,res){
        res.render('perfis_perfurados/N42pdf');
    });
    

}