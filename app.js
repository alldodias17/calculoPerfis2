var app =  require('./config/server');

var pagina_principal = require('./app/routes/pagina_principal')(app);
var menu_principal_01 = require('./app/routes/menu_principal/menu_principal_01')(app);
var menu_principal_02 = require('./app/routes/menu_principal/menu_principal_02')(app);
var menu_principal_03 = require('./app/routes/menu_principal/menu_principal_03')(app);
var menu_principal_04 = require('./app/routes/menu_principal/menu_principal_04')(app);
var menu_principal_05 = require('./app/routes/menu_principal/menu_principal_05')(app);
var menu_principal_06 = require('./app/routes/menu_principal/menu_principal_06')(app);
var menu_principal_07 = require('./app/routes/menu_principal/menu_principal_07')(app);
var menu_principal_08 = require('./app/routes/menu_principal/menu_principal_08')(app);
var menu_principal_09 = require('./app/routes/menu_principal/menu_principal_09')(app);
var menu_principal_10 = require('./app/routes/menu_principal/menu_principal_10')(app);
var menu_principal_11 = require('./app/routes/menu_principal/menu_principal_11')(app);
var menu_principal_12 = require('./app/routes/menu_principal/menu_principal_12')(app);
var menu_principal_13 = require('./app/routes/menu_principal/menu_principal_13')(app);
var menu_principal_14 = require('./app/routes/menu_principal/menu_principal_14')(app);
var menu_principal_15 = require('./app/routes/menu_principal/menu_principal_15')(app);
var menu_principal_16a = require('./app/routes/menu_principal/menu_principal_16a')(app);
var menu_principal_16b = require('./app/routes/menu_principal/menu_principal_16b')(app);
var menu_principal_17 = require('./app/routes/menu_principal/menu_principal_17')(app);
var menu_principal_17b = require('./app/routes/menu_principal/menu_principal_17b')(app);
var menu_principal_18 = require('./app/routes/menu_principal/menu_principal_18')(app);
var menu_principal_19a = require('./app/routes/menu_principal/menu_principal_19a')(app);
var menu_principal_19b = require('./app/routes/menu_principal/menu_principal_19b')(app);
var menu_principal_20 = require('./app/routes/menu_principal/menu_principal_20')(app);
var menu_principal_21a = require('./app/routes/menu_principal/menu_principal_21a')(app);
var menu_principal_21b = require('./app/routes/menu_principal/menu_principal_21b')(app);
var menu_principal_22 = require('./app/routes/menu_principal/menu_principal_22')(app);
var menu_principal_23a = require('./app/routes/menu_principal/menu_principal_23a')(app);
var menu_principal_23b = require('./app/routes/menu_principal/menu_principal_23b')(app);
var menu_principal_24a = require('./app/routes/menu_principal/menu_principal_24a')(app);
var menu_principal_24b = require('./app/routes/menu_principal/menu_principal_24b')(app);
var menu_principal_25 = require('./app/routes/menu_principal/menu_principal_25')(app);
var menu_principal_26 = require('./app/routes/menu_principal/menu_principal_26')(app);
var menu_principal_27 = require('./app/routes/menu_principal/menu_principal_27')(app);
var menu_principal_28 = require('./app/routes/menu_principal/menu_principal_28')(app);
var menu_principal_29 = require('./app/routes/menu_principal/menu_principal_29')(app);
var menu_principal_30 = require('./app/routes/menu_principal/menu_principal_30')(app);
var menu_principal_31 = require('./app/routes/menu_principal/menu_principal_31')(app);
var menu_principal_32 = require('./app/routes/menu_principal/menu_principal_32')(app);
var menu_principal_33 = require('./app/routes/menu_principal/menu_principal_33')(app);
var menu_principal_34 = require('./app/routes/menu_principal/menu_principal_34')(app);
var menu_principal_35 = require('./app/routes/menu_principal/menu_principal_35')(app);
var menu_principal_36a = require('./app/routes/menu_principal/menu_principal_36a')(app);
var menu_principal_36b = require('./app/routes/menu_principal/menu_principal_36b')(app);
var menu_principal_37 = require('./app/routes/menu_principal/menu_principal_37')(app);
var barras_comprimidas = require('./app/routes/barras_comprimidas/barras_comprimidas')(app);
var calc_vigas = require('./app/routes/calc_vigas/calc_vigas')(app);
var menu_calc_P01 = require('./app/routes/calc_vigas/menu_calc_P01')(app);
var menu_calc_P02 = require('./app/routes/calc_vigas/menu_calc_P02')(app);
var menu_calc_P03 = require('./app/routes/calc_vigas/menu_calc_P03')(app);
var menu_calc_P04 = require('./app/routes/calc_vigas/menu_calc_P04')(app);
var menu_calc_P05 = require('./app/routes/calc_vigas/menu_calc_P05')(app);
var menu_calc_P06 = require('./app/routes/calc_vigas/menu_calc_P06')(app);
var menu_calc_P07 = require('./app/routes/calc_vigas/menu_calc_P07')(app);
var menu_calc_P08 = require('./app/routes/calc_vigas/menu_calc_P08')(app);
var menu_calc_P09 = require('./app/routes/calc_vigas/menu_calc_P09')(app);
var menu_calc_P10 = require('./app/routes/calc_vigas/menu_calc_P10')(app);
var menu_calc_P11 = require('./app/routes/calc_vigas/menu_calc_P11')(app);
var menu_calc_P12 = require('./app/routes/calc_vigas/menu_calc_P12')(app);
var menu_calc_P13 = require('./app/routes/calc_vigas/menu_calc_P13')(app);
var menu_calc_P14 = require('./app/routes/calc_vigas/menu_calc_P14')(app);
var menu_calc_P99_3 = require('./app/routes/calc_vigas/menu_calc_P99_3')(app);
var menu_calc_P99_4 = require('./app/routes/calc_vigas/menu_calc_P99_4')(app);
var menu_calc_P99_5 = require('./app/routes/calc_vigas/menu_calc_P99_5')(app);
var menu_calc_P99_6 = require('./app/routes/calc_vigas/menu_calc_P99_6')(app);
var menu_calc_P99_7 = require('./app/routes/calc_vigas/menu_calc_P99_7')(app);
var menu_calc_P99_8 = require('./app/routes/calc_vigas/menu_calc_P99_8')(app);
var menu_calc_P99_9 = require('./app/routes/calc_vigas/menu_calc_P99_9')(app);
var menu_calc_PP9_2 = require('./app/routes/calc_vigas/menu_calc_PP0_2')(app);
var menu_prateleiras = require('./app/routes/menu_prateleiras/menu_prateleiras')(app);
var menu_prateleiras_Prat0R_0 = require ('./app/routes/menu_prateleiras/menu_prateleiras_Prat0R_0')(app);
var menu_prateleiras_Prat0R_1F = require ('./app/routes/menu_prateleiras/menu_prateleiras_Prat0R_1F')(app);
var menu_prateleiras_Prat0R_1F2L = require ('./app/routes/menu_prateleiras/menu_prateleiras_Prat0R_1F2L')(app);
var menu_prateleiras_Prat0R_1L = require ('./app/routes/menu_prateleiras/menu_prateleiras_Prat0R_1L')(app);
var menu_prateleiras_Prat0R_2F = require ('./app/routes/menu_prateleiras/menu_prateleiras_Prat0R_2F')(app);
var menu_prateleiras_Prat0R_2F2L = require ('./app/routes/menu_prateleiras/menu_prateleiras_Prat0R_2F2L')(app);
var menu_prateleiras_Prat0R_2L = require ('./app/routes/menu_prateleiras/menu_prateleiras_Prat0R_2L')(app);
var menu_prateleiras_portapallets_conj = require ('./app/routes/menu_prateleiras_portapallets_conj/menu_prateleiras_portapallets_conj')(app);
var prateleiras_ind = require ('./app/routes/prateleiras_ind/prateleiras_ind')(app);
var prateleiras_ind_01 = require ('./app/routes/prateleiras_ind/prateleiras_ind_01')(app);
var prateleiras_ind_02 = require ('./app/routes/prateleiras_ind/prateleiras_ind_02')(app);
var menu_pisos = require ('./app/routes/menu_pisos/menu_pisos')(app);
var entrada_laterais = require ('./app/routes/menu_entrada_laterais/entrada_laterais')(app);






app.listen(3000, function(){
    console.log("Servidor ON");
    
})