
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

//A1 = 129
form04.dtam_A.value = (129.00).toFixed(2);
form01.etam_A.value = (129.00).toFixed(2);

//B1 = 54
form04.dtam_B.value = (54.00).toFixed(2);
form02.etam_B.value = (54.00).toFixed(2);

//U = 6.28
form10.ud.value = (6.28).toFixed(2);

//x0 = 6.47
form04.dtam_X.value = (6.47).toFixed(2);

//y0 = 44.29
form06.dtam_Y.value = (44.29).toFixed(2);

//XB = 7.67
form07.dtam_xx.value = (7.67).toFixed(2);

//YB = 45.49
form07.dtam_xx.value = (45.49).toFixed(2);

//KGM = 2.81
form04.d_Peso.value = (2.81).toFixed(2);

//DIST = 44.76
form04.dtam_distancia.value = (44.76).toFixed(2);

//ESPES = 2#
form06.espessura_d.value = (2.00).toFixed(2);
form01.espessura_e.value = (2.00).toFixed(2);

//RDB2 = 3#
form07.raiod.value = (3.00).toFixed(2);

//RN = 4#
form08.raio_neutro.value = (4.00).toFixed(2);

//ALTDB = 5#
form09.alturadobra.value = (5.00).toFixed(2);

//FITA = 179
form10.largura_da.value = (179.00).toFixed(2)

//IX = 432381
form12.ixx.value = 432.381;

//IY = 52500
form12.iyy.value = (52500).toFixed(2);

//iz = 35871
form14.lz.value = 35.871;

//IV = 449009
form15.lv.value = 449.009;

//IP = 950805
form16.ip.value = 950.805;

//ixy = 81199
form17.lxy.value = 81.199;

//WX = 5240
form18.wx.value = (5240).toFixed(2);

//WY = 1158
form12.wy.value = 1.158;

//WT = 157
form14.wt.value = (157).toFixed(2);

//IX1 = 43.11
form16.ixis.value = 43.11;

//IY1 = 15.02
form17.iy.value = 15.02;

//iz1 = 12.41
form18.iz.value = 12.41;

//iv1 = 43.93
form19.iv.value = 43.93;

//J1 = 314
form12.j.value = (341).toFixed(2);

//CGX = 8.67
form14.cgx.value = 8.67;

//CGY = 46.49
form15.cgy.value = 46.49;

//Cw = 394586
form16.cw.value = 394.586;

//TETA_AUX = 11
//TETA_AUX1 = 34
//TETA = TETA_AUX & "," & TETA_AUX1
form18.teta.value = 11.34;

//AREA1 = 358
form19.area_total.value = (358).toFixed(2);

//AREAU = 232

form20.area_util.value = (232).toFixed(2);
  

  }
  
  
  
  
    
    