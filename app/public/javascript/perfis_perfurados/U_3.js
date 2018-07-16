
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

//A1 = 45
form04.dtam_A.value = (45.00).toFixed(2);
form01.etam_A.value = (45.00).toFixed(2);

//B1 = 31
form04.dtam_B.value = (31.00).toFixed(2);
form02.etam_B.value = (31.00).toFixed(2);

//U = 6.28
form10.ud.value = (6.28).toFixed(2);

//x0 = -15.27
form04.dtam_X.value = (-15.27).toFixed(2);

//XB = 8.58
form07.dtam_xx.value = (8.58).toFixed(2);

//YB = 21.5
form07.dtam_xx.value = (21.5).toFixed(2);

//KGM = 1.56
form04.d_Peso.value = (1.56).toFixed(2);

//DIST = 15.27
form04.dtam_distancia.value = (15.27).toFixed(2);

//ESPES = 2#
form06.espessura_d.value = (2.00).toFixed(2);
form01.espessura_e.value = (2.00).toFixed(2);

//RDB2 = 3#
form07.raiod.value = (3.00).toFixed(2);

//RN = 4#
form08.raio_neutro.value = (4.00).toFixed(2);

//ALTDB = 5#
form09.alturadobra.value = (5.00).toFixed(2);

//FITA = 99
form10.largura_da.value = (99.00).toFixed(2)

//IX = 48584
form12.ixx.value = 48.584;

//IY = 16389
form12.iyy.value = 16.389;

//IV = 0
form15.lv.value = (0.00).toFixed(2);

//IP = 98811
form16.ip.value = 98.811;

//WX = 2159
form18.wx.value = (2159).toFixed(2);

//WY = 765
form12.wy.value = (765).toFixed(2);

//WT = 96
form14.wt.value = (96).toFixed(2);

//IX1 = 18.29
form16.ixis.value = 18.29;

//IY1 = 10.62
form17.iy.value = 10.62;

//J1 = 193
form12.j.value = (193).toFixed(2);

//CGX = 9.58
form14.cgx.value = 9.58;

//CGY = 22.5
form15.cgy.value = 22.5;


//Cw = 2813197
form16.cw.value = (2813197).toFixed(2);

//AREA1 = 199
form19.area_total.value = (199).toFixed(2);

//AREAU = 145
form20.area_util.value = (145).toFixed(2);

  }
  
  
  
  
    
    