
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
 
//A1 = 80
form04.dtam_A.value = (80.00).toFixed(2);
form01.etam_A.value = (80.00).toFixed(2);

//B1 = 47
form04.dtam_B.value = (47.00).toFixed(2);
form02.etam_B.value = (47.00).toFixed(2);

//C1 = 20
form06.dtam_C.value = (20.00).toFixed(2);

//U = 6.28
form10.ud.value = (6.28).toFixed(2);

//x0 = 34.67
form04.dtam_X.value = (34.67).toFixed(2);

//DIST = 34.67
form04.dtam_distancia.value = (34.67).toFixed(2);

//XB = 17.63
form07.dtam_xx.value = (17.63).toFixed(2);

//YB = 39
form07.dtam_xx.value = (39).toFixed(2);

//KGM = 3.12
form04.d_Peso.value = (3.12).toFixed(2);

//ESPES = 2#
form06.espessura_d.value = (2.00).toFixed(2);
form01.espessura_e.value = (2.00).toFixed(2);

//RDB2 = 3#
form07.raiod.value = (3.00).toFixed(2);

//RN = 4#
form08.raio_neutro.value = (4.00).toFixed(2);

//ALTDB = 5#
form09.alturadobra.value = (5.00).toFixed(2);

//FITA = 199
form10.largura_da.value = (190).toFixed(2)

//IX = 319534
form12.ixx.value = 319.534;

//IY = 108578
form12.iyy.value = 108.578;

//IP = 793522
form16.ip.value = 793.522;

//WX = 7988
form18.wx.value = 7.988;

//WY = 3827
form12.wy.value = (3827).toFixed(2);

//WT = 202
form14.wt.value = (202).toFixed(2);

//IX1 = 32.42
form16.ixis.value = 32.42;

//IY1 = 18.89
form17.iy.value = 18.89;

//J1 = 405
form12.j.value = (405).toFixed(2);

//CGX = 18.63
form14.cgx.value = 18.63;

//CGY = 40
form15.cgy.value = (40).toFixed(2);

//Cw = 137417455
form16.cw.value = (137417455).toFixed(2);

//AREA1 = 398
form19.area_total.value = (398).toFixed(2);

//AREAU = 304
form20.area_util.value = (304).toFixed(2);




  }
  
  
  
  
    
    