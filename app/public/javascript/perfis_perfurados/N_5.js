
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

//A1 = 75
form04.dtam_A.value = (75.00).toFixed(2);
form01.etam_A.value = (75.00).toFixed(2);

//B1 = 54
form04.dtam_B.value = (54.00).toFixed(2);
form02.etam_B.value = (54.00).toFixed(2);

//U = 6.28
form10.ud.value = (6.28).toFixed(2);

//x0 = 9.91
form04.dtam_X.value = (9.91).toFixed(2);

//y0 = 19.97
form06.dtam_Y.value = (19.97).toFixed(2);

//XB = 11.11
form07.dtam_xx.value = (11.11).toFixed(2);

//YB = 21.17
form07.dtam_xx.value = (21.17).toFixed(2);

//KGM = 1.96
form04.d_Peso.value = (1.96).toFixed(2);

//DIST = 22.29
form04.dtam_distancia.value = (22.29).toFixed(2);

//ESPES = 2#
form06.espessura_d.value = (2.00).toFixed(2);
form01.espessura_e.value = (2.00).toFixed(2);

//RDB2 = 3#
form07.raiod.value = (3.00).toFixed(2);

//RN = 4#
form08.raio_neutro.value = (4.00).toFixed(2);

//ALTDB = 5#
form09.alturadobra.value = (5.00).toFixed(2);

//FITA = 125
form10.largura_da.value = (125.00).toFixed(2)

//IX = 103383
form12.ixx.value = 103.383;

//IY = 46331
form12.iyy.value = 46.331;

//iz = 27525
form14.lz.value = 27.525;

//IV = 122188
form15.lv.value = 122.188;

//IP = 229487
form16.ip.value = 229.487;

//ixy = 37769
form17.lxy.value = 37.769;

//WX = 1956
form18.wx.value = 1.956;

//WY = 1106
form12.wy.value = 1.106;

//WT = 109
form14.wt.value = (109).toFixed(2);

//IX1 = 25.37
form16.ixis.value = 25.37;

//IY1 = 16.98
form17.iy.value = 16.98;

//iz1 = 13.09
form18.iz.value = 13.09;

//iv1 = 27.58
form19.iv.value = 27.58;

//J1 = 218
form12.j.value = (218).toFixed(2);

//CGX = 12.11
form14.cgx.value = 12.11

//CGY = 22.17
form15.cgy.value = 22.17;

//Cw = 132510
form16.cw.value = (132510).toFixed(2);

//TETA_AUX = 26
//TETA_AUX1 = 28
//TETA = TETA_AUX & "," & TETA_AUX1
form18.teta.value = 26.28;

//AREA1 = 250
form19.area_total.value = (250).toFixed(2);

//AREAU = 160
form20.area_util.value = (160).toFixed(2);


  

  }
  
  
  
  
    
    