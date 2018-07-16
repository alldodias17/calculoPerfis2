
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


  
//A1 = 35
form04.dtam_A.value = (35.00).toFixed(2);
form01.etam_A.value = (35.00).toFixed(2);

//B1 = 35
form04.dtam_B.value = (35.00).toFixed(2);
form02.etam_B.value = (35.00).toFixed(2);

//U = 6.28
form10.ud.value = (6.28).toFixed(2);

//x0 = 7.34
form04.dtam_X.value = (7.34).toFixed(2);

//y0 = 7.34
form06.dtam_Y.value = (7.34).toFixed(2);

//XB = 8.54
form07.dtam_xx.value = (8.54).toFixed(2);

//YB = 8.54
form07.dtam_xx.value = (8.54).toFixed(2);

//KGM = 1.04
form04.d_Peso.value = (1.04).toFixed(2);

//DIST = 10.38
form04.dtam_distancia.value = (10.38).toFixed(2);

//ESPES = 2#
form06.espessura_d.value = (2.00).toFixed(2);
form01.espessura_e.value = (2.00).toFixed(2);

//RDB2 = 3#
form07.raiod.value = (3.00).toFixed(2);

//RN = 4#
form08.raio_neutro.value = (4.00).toFixed(2);

//ALTDB = 5#
form09.alturadobra.value = (5.00).toFixed(2);

//FITA = 66
form10.largura_da.value = (66.00).toFixed(2);

//IX = 12866
form12.ixx.value = (12.866);

//IY = 12866
form12.iyy.value = (12.866);

//iz = 5841
form14.lz.value = 5.841;

//IV = 19891
form15.lv.value = 19.891;

//IP = 36154
form16.ip.value = 36.154;

//ixy = 7025
form17.lxy.value = 7.025;

//WX = 505
form18.wx.value = (505).toFixed(2);

//WY = 505
form12.wy.value = (505).toFixed(2);

//WT = 66
form14.wt.value = (66).toFixed(2);

//IX1 = 11.54
form16.ixis.value = 11.54;

//IY1 = 11.54
form17.iy.value = 11.54;

//iz1 = 7.77
form18.iz.value = 7.77;

//iv1 = 14.35
form19.iv.value = 14.35;

//J1 = 132
form12.j.value = (132).toFixed(2);

//CGX = 9.54
form14.cgx.value = 9.54;

//CGY = 9.54
form15.cgy.value = 9.54;

//Cw = 30114
form16.cw.value = 30.114;

//TETA_AUX = 45
form18.teta.value = (45).toFixed(2);

//TETA = TETA_AUX
//AREA1 = 132
form19.area_total.value = (132).toFixed(2);

//AREAU = 96
form20.area_util.value = (96).toFixed(2);
  
  }
  
  
  
  
    
    