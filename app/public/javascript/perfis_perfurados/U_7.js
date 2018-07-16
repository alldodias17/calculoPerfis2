
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
    
//A1 = 79
form04.dtam_A.value = (79.00).toFixed(2);
form01.etam_A.value = (79.00).toFixed(2);

//B1 = 54
form04.dtam_B.value = (54.00).toFixed(2);
form02.etam_B.value = (54.00).toFixed(2);

//U = 6.28
form10.ud.value = (6.28).toFixed(2);

//x0 = -39.38
form04.dtam_X.value = (-39.38).toFixed(2);

//XB = 15.31
form07.dtam_xx.value = (15.31).toFixed(2);

//YB = 38.5
form07.dtam_xx.value = (38.5).toFixed(2);

//KGM = 2.81
form04.d_Peso.value = (2.81).toFixed(2);

//DIST = 39.38
form04.dtam_distancia.value = (39.38).toFixed(2);

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

//IX = 258322
form12.ixx.value = 258.322;

//IY = 77646
form12.iyy.value = 77.646;

//IP = 697486
form16.ip.value = 697.486;

//WX = 6539
form18.wx.value = 6.539;

//WY = 2060
form12.wy.value = (2060).toFixed(2);

//WT = 155
form14.wt.value = (155).toFixed(2);

//IX1 = 33.28
form16.ixis.value = 33.28;

//IY1 = 18.25
form17.iy.value = 18.25;

//J1 = 310
form12.j.value = (310).toFixed(2);

//CGX = 16.31
form14.cgx.value = 16.31;

//CGY = 39.5
form15.cgy.value = 39.5;

//Cw = 34095941
form16.cw.value = (34095941).toFixed(2);

//AREA1 = 359
form19.area_total.value = (359).toFixed(2);

//AREAU = 233
form20.area_util.value = (233).toFixed(2);



  }
  
  
  
  
    
    