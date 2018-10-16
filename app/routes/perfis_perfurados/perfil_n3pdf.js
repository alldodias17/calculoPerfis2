module.exports = function(app){
    app.get('/perfil_n3pdf', function(req,res){
        res.render('perfis_perfurados/perfil_n3pdf');
    });
    

}