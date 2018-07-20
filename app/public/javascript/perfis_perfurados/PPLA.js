
window.onload = function () {
    document.getElementById("etam_A").focus();
  };
  $(document).ready(function () {
    $("#etam_A").focus(function () {
      $(this).css("background-color", "#F0F8FF");
    });
    $("#etam_B").blur(function () {
      $(this).css("background-color", "#F0F8FF");
    });
    $("#etam_C").blur(function () {
      $(this).css("background-color", "#F0F8FF");
    });
    $("#espessura_e").blur(function () {
      $(this).css("background-color", "#F0F8FF");
    });
    $("#raioe").blur(function () {
      $(this).css("background-color", "#F0F8FF");
    });
  });
    
  
    
  function calcular(){
 
//A1 = 70
form04.dtam_A.value = (70.00).toFixed(2);
form01.etam_A.value = (70.00).toFixed(2);

//B1 = 39
form04.dtam_B.value = (39.00).toFixed(2);
form02.etam_B.value = (39.00).toFixed(2);

//C1 = 21
form06.dtam_C.value = (21.00).toFixed(2);

//U = 6.28
form10.ud.value = (6.28).toFixed(2);

//U2 = 4.18
form10.u2.value = (4.18).toFixed(2); 

//x0 = 26.84
form04.dtam_X.value = (26.84).toFixed(2);

//DIST = 26.84
form04.dtam_distancia.value = (26.84).toFixed(2);

//XB = 18.24
form07.dtam_xx.value = (18.24).toFixed(2);

//YB = 34
form07.dtam_xx.value = (34).toFixed(2);

//KGM = 2.99
form04.d_Peso.value = (2.99).toFixed(2);

//ESPES = 2#
form06.espessura_d.value = (2.00).toFixed(2);
form01.espessura_e.value = (2.00).toFixed(2);

//RDB2 = 3#
form07.raiod.value = (3.00).toFixed(2);

//RN = 4#
form08.raio_neutro.value = (4.00).toFixed(2);

//ALTDB = 5#
form09.alturadobra.value = (5.00).toFixed(2);

//FITA = 190
form10.largura_da.value = (190).toFixed(2)

//IX = 220963
form12.ixx.value = 220.963;

//IY = 92879
form12.iyy.value = 92.879;

//IP = 505349
form16.ip.value = 505.349;

//WX = 6313
form18.wx.value = 6.313;

//WY = 2754
form12.wy.value = (2754).toFixed(2);

//WT = 177
form14.wt.value = (177).toFixed(2);

//IX1 = 28.83
form16.ixis.value = 28.83;

//IY1 = 18.69
form17.iy.value = 18.69;

//J1 = 354
form12.j.value = (354).toFixed(2);

//CGX = 19.24
form14.cgx.value = 19.24;

//CGY = 35
form15.cgy.value = (35).toFixed(2);

//Cw = 138343193
form16.cw.value = (138343193).toFixed(2);

//ALFA_AUX = 120
//alfa = 120
form17.alfa.value = (120).toFixed(2);

//AREA1 = 381
form19.area_total.value = (381).toFixed(2);

//AREAU = 265
form20.area_util.value = (265).toFixed(2);
  }
  
  
  
  
    
    