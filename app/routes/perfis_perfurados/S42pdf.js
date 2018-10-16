module.exports = function(app){
    app.get('/S42pdf', function(req,res){
        res.render('perfis_perfurados/S42pdf');
    });
    

}