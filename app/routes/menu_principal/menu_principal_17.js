module.exports = function(app){
    app.get('/menu_principal_17', function(req,res){
        res.render('menu_principal/menu_principal_17');
        req.assert('etam_A','Não pode ser vazio').notEmpty();
    });
    

    

}