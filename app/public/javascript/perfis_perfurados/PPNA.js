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

function validar() {
  var form01 = document.getElementById("form01");
  var etam_A = form01.etam_A;
  var re_etam_A = /^([0-9]{0,3})([0-9]{0,3})$/;
  if (re_etam_A.test(etam_A.value)) {
    etam_A.value = etam_A.value.replace(re_etam_A, "$1$2,00");
  }
  var form02 = document.getElementById("form02");
  var etam_B = form02.etam_B;
  var re_etam_B = /^([0-9]{0,3})([0-9]{0,3})$/;
  if (re_etam_B.test(etam_B.value)) {
  etam_B.value = etam_B.value.replace(re_etam_B, "$1$2,00");

  }
  var form03 = document.getElementById("form03");
  var etam_C = form03.etam_C;
  var re_etam_C = /^([0-9]{0,3})([0-9]{0,3})$/;
  if (re_etam_C.test(etam_C.value)) {
  etam_C.value = etam_C.value.replace(re_etam_C, "$1$2,00");
 
      
  }
  var form01 = document.getElementById("form01");
  var espessura_e = form01.espessura_e;
  var re_espessura_e = /^([0-9]{0,3})([0-9]{0,3})$/;
  if (re_espessura_e.test(espessura_e.value)) {
    espessura_e.value = espessura_e.value.replace(re_espessura_e, "$1$2,00");
  }


  var str = document.getElementById("etam_A").value;
  var res = str.replace(",", ".");
  document.getElementById("etam_A").value = res;
  var str = document.getElementById("etam_B").value;
  var res = str.replace(",", ".");
  document.getElementById("etam_B").value = res;
  var str = document.getElementById("etam_C").value;
  var res = str.replace(",", ".");
  document.getElementById("etam_C").value = res;
  var str = document.getElementById("raioe").value;
  var res = str.replace(",", ".");
  document.getElementById("raioe").value = res;
  var str = document.getElementById("espessura_e").value;
  var res = str.replace(",", ".");
  document.getElementById("espessura_e").value = res;
  var str = document.getElementById("eangulo").value;
  var res = str.replace(",", ".");
  document.getElementById("eangulo").value = res;
  var str = document.getElementById("eangulo").value;
  var res = str.replace(",", ".");
  document.getElementById("eangulo").value = res;
  var str = document.getElementById("dtam_a").value;
  var res = str.replace(",", ".");
  document.getElementById("dtam_a").value = res;
  var str = document.getElementById("ud").value;
  var res = str.replace(",", ".");
  document.getElementById("ud").value = res;
  var str = document.getElementById("etam_D").value;
  var res = str.replace(",", ".");
  document.getElementById("etam_D").value = res;
  var str = document.getElementById("etam_E").value;
  var res = str.replace(",", ".");
  document.getElementById("etam_E").value = res;

}


function SomenteNumero(e) {
  var tecla = (window.event) ? event.keyCode : e.which;
  if ((tecla > 43 && tecla < 58)) return true;
  else {
    if (tecla == 8 || tecla == 0) return true;
    else return false;
  }    
}


function id(el) {
  return document.getElementById(el);
}


function soma() {




id('dtam_A').value = id('etam_A').value || 0.00;
id('dtam_B').value = id('etam_B').value || 0.00;
id('dtam_C').value = id('etam_C').value || 0.00;

id('espessura_d').value = id('espessura_e').value || 0.00;


var a = parseFloat(0.363);
var b = parseFloat(0.149);
var d = parseFloat(0.358);
var p = parseFloat(0.0833)
var z = parseFloat(1.637);
var c = parseFloat(0.149);
var e = parseFloat(0.637);
var f = parseFloat(0.001);
var g = parseFloat(7.85);
var h = parseFloat(0.0417);
var i = parseFloat(1.5);
var pi = parseFloat(3.14);
var l  = parseFloat(13.5);

//A1 = 100
form04.dtam_A.value = (100.00).toFixed(2);
form01.etam_A.value = (100.00).toFixed(2);
var A1 = parseFloat(form04.dtam_A.value);

//C1 = 25
form03.etam_C.value = (25.00).toFixed(2);
var C1 = form03.etam_C.value;

//RDB2 = 1.5 * ESPES
var ESPES = parseFloat(form06.espessura_d.value);
var ESPES_1 = parseFloat(form01.espessura_e.value);
form06.espessura_d.value = form01.espessura_e.value;

var RDB1 = parseFloat(form03.raioe.value);
form07.raiod.value = 1.5 * ESPES || 0.00;
var RDB2 = parseFloat(form07.raiod.value);


//RN = RDB2 + ESPES / 2
form08.raio_neutro.value = (RDB2 + ESPES / 2).toFixed(2) || 0.00;
var RN = parseFloat(form08.raio_neutro.value);

//ALTDB = RDB2 + ESPES
form09.alturadobra.value = (RDB2 + ESPES).toFixed(2) || 0.00;
var ALTDB = parseFloat(form09.alturadobra.value);

//U = RN * 1.57
var U1 = parseFloat(1.57);
form10.ud.value = ((form08.raio_neutro.value * 10 * 1.57) / 10).toFixed(2) || 0.00;
var U = parseFloat(form10.ud.value);

//A2 = 100 - 2 * ALTDB
var A1 = parseFloat(form04.dtam_A.value);
form09.dtam_a.value = (100*1 - (2 * ALTDB)).toFixed(2) || 0.00;
var A2 = parseFloat(form09.dtam_a.value);

//AB = 100 - ESPES
form04.dtam_a1.value = (100 - form06.espessura_d.value).toFixed(2) || 0.00;
var AB = parseFloat(form04.dtam_a1.value);

//C2 = 25 - ALTDB
var C1 = form03.etam_C.value
form06.dtam_C.value = form03.etam_C.value;
form10.dtam_c.value = 25 - ALTDB;
var C2 = form10.dtam_c.value;

//CB = 25 - ESPES / 2
form07.dtam_D.value = 25 - ESPES / 2;
var CB = form07.dtam_D.value;

//FITA = 240
form10.largura_da.value = (240).toFixed(2) || 0.00;
var FITA = parseFloat(form10.largura_da.value);

//AREA1 = 240 * ESPES
form19.area_total.value = (240 * ESPES).toFixed(2);
var AREA01 = form19.area_total.value;

//AREAU = AREA1 - 7 * 9 * ESPES
form20.area_util.value = AREA01 - 7 * 9 * ESPES;
var AREAU = form20.area_util.value;

//KGM = AREA1 * 0.001 * 7.85
form04.d_Peso.value = (AREA01 * 0.001 * 7.85).toFixed(2) || 0.00;
var KGM = form04.d_Peso.value;

//B2 = (240 - 2 * C2 - A2 - 4 * U) / 2
form09.dtam_b.value = (240 - 2 * C2 - A2 - 4 * U) / 2;
var B2 = parseFloat(form09.dtam_b.value);

//B1 = B2 + 2 * ALTDB
form04.dtam_B.value = B2 + 2 * ALTDB;
var B1 = parseFloat(form04.dtam_B.value);


if(form01.espessura_e.value == 1.52){
  form04.dtam_B.value = 50.65;
  form02.etam_B.value = form04.dtam_B.value;
  form01.etam_D.value = 42.08;
  form08.dtam_D.value = form01.etam_D.value;
  form12.ixx.value = 454506.61;
  form16.cw.value = 241431175.46;
}
if(form01.espessura_e.value == 1.70){
  form04.dtam_B.value = 51.32;
  form02.etam_B.value = form04.dtam_B.value;
  form01.etam_D.value = 41.73;
  form08.dtam_D.value = form01.etam_D.value;
  form12.ixx.value = 507087.60;
  form16.cw.value = 273961456.51;
}
if(form01.espessura_e.value == 1.80){
  form04.dtam_B.value = 51.69;
  form02.etam_B.value = form04.dtam_B.value;
  form01.etam_D.value = 41.54;
  form08.dtam_D.value = form01.etam_D.value;
  form12.ixx.value = 536178.84;
  form16.cw.value = 292406703.14;
}
if(form01.espessura_e.value == 2.00){
  form04.dtam_B.value = 52.44;
  form02.etam_B.value = form04.dtam_B.value;
  form01.etam_D.value = 41.16;
  form08.dtam_D.value = form01.etam_D.value;
  form12.ixx.value = 594099.55;
  form16.cw.value = 330104789.28;
}
if(form01.espessura_e.value == 2.25){
  form04.dtam_B.value = 54.85;
  form02.etam_B.value = form04.dtam_B.value;
  form01.etam_D.value = 40.68;
  form08.dtam_D.value = form01.etam_D.value;
  form12.ixx.value = 6661001.70;
  form16.cw.value = 378761325.77;
}
if(form01.espessura_e.value == 2.65){
  form04.dtam_B.value = 54.85;
  form02.etam_B.value = form04.dtam_B.value;
  form01.etam_D.value = 39.91;
  form08.dtam_D.value = form01.etam_D.value;
  form12.ixx.value = 779864.63;
  form16.cw.value = 460233021.41;
}
if(form01.espessura_e.value == 3.00){
  form04.dtam_B.value = 56.16;
  form02.etam_B.value = form04.dtam_B.value;
  form01.etam_D.value = 39.24;
  form08.dtam_D.value = form01.etam_D.value;
  form12.ixx.value = 878270.42;
  form16.cw.value = 535276085.46;
}
if(form01.espessura_e.value == 3.35){
  form04.dtam_B.value = 57.46;
  form02.etam_B.value = form04.dtam_B.value;
  form01.etam_D.value = 38.56;
  form08.dtam_D.value = form01.etam_D.value;
  form12.ixx.value = 975501.09;
  form16.cw.value = 613936280.43;
}
if(form01.espessura_e.value == 3.75){
  form04.dtam_B.value = 58.95
  form02.etam_B.value = form04.dtam_B.value;
  form01.etam_D.value = 37.80;
  form08.dtam_D.value = form01.etam_D.value;
  form12.ixx.value = 1085144.22;
  form16.cw.value = 708414026.18;
}
if(form01.espessura_e.value == 4.25){
  form04.dtam_B.value = 60.81;
  form02.etam_B.value = form04.dtam_B.value;
  form01.etam_D.value = 36.84;
  form08.dtam_D.value = form01.etam_D.value;
  form12.ixx.value = 1219917.67;
  form16.cw.value = 833664581.37;
}
if (form01.espessura_e.value == 1.52 || form01.espessura_e.value == 1.70 || form01.espessura_e.value == 1.80 || form01.espessura_e.value == 2.00 
  || form01.espessura_e.value == 2.25 || form01.espessura_e.value == 2.65 || form01.espessura_e.value == 3.00 || form01.espessura_e.value == 3.35 || form01.espessura_e.value == 3.75 || form01.espessura_e.value == 4.25 ) {
  console.log("válido");
} 
else{
  alert("Valores Válidos: 1.52, 1.70, 1.80, 2.00, 2.25, 2.65, 3.00, 3.35, 3.75, 4.25");
  form01.espessura_e.value = (0.00).toFixed(2);
  form01.etam_A.value = (0.00).toFixed(2);
  form01.etam_A.value = (0.00).toFixed(2);
  form02.etam_B.value = (0.00).toFixed(2);
  form.etam_C.value = (0.00).toFixed(2);
  form01.etam_D.value = (0.00).toFixed(2);
  form08.dtam_D.value = (0.00).toFixed(2);
  form03.etam_C.value = (0.00).toFixed(2);
  }

  



//BB = B1 - ESPES
form06.dtam_bbarra.value = B1 - ESPES;
var BB = parseFloat(form06.dtam_bbarra.value);

//EFE = (B1 - 9) / 2
EFE = (B1 - 9) / 2;

//XB = ESPES * (2 * C2 * BB + 2 * U * (BB - RN + 0.637 * RN) + 2 * B2 * (B2 / 2 + RN) + 2 * U * (RN - 0.637 * RN) - 2 * 9 * BB - 2 * 9 * (EFE - ESPES / 2 + 4.5)) / AREAU
form07.dtam_xx.value = (ESPES * (2 * C2 * BB + 2 * U * (BB - RN + 0.637 * RN) + 2 * B2 * (B2 / 2 + RN) + 2 * U * (RN - 0.637 * RN) - 2 * 9 * BB - 2 * 9 * (EFE - ESPES / 2 + 4.5)) / AREAU).toFixed(2);
var XB = parseFloat(form07.dtam_xx.value);

//YB = AB / 2
form09.dtam_y.value = AB / 2;
var YB = parseFloat(form09.dtam_y.value);

//CGX = XB + ESPES / 2
form14.cgx.value = (XB + ESPES / 2).toFixed(2) || 0.00;
var CGX = parseFloat(form14.cgx.value);

//CGY = 50
form15.cgy.value = (50).toFixed(2);
var CGY = parseFloat(form15.cgy.value);

//IX = 2 * ESPES * (0.0417 * A2 ^ 3 + B2 * (A2 / 2 + RN) ^ 2 + 2 * U * (A2 / 2 + 0.637 * RN) ^ 2 + 2 * 0.149 * RN ^ 3 + (0.0833 * C2 ^ 3 + C2 / 4 * (A2 - C2) ^ 2)) - 5 * ESPES * 9 ^ 3 / 12 - 2 * 9 * ESPES ^ 3 / 12 - 2 * 9 * ESPES * (50 - 13.5) ^ 2 - 2 * 9 * ESPES * YB ^ 2 - 2 * 9 * ESPES * 20 ^ 2
var IX = form12.ixx.value;

//WX = IX / 50
form18.wx.value = (IX / 50).toFixed(2);
var WX = parseFloat(form18.wx.value);

//IY = 2 * ESPES * (B2 * (B2 / 2 + RN) ^ 2 + 0.0833 * B2 ^ 3 + 0.356 * RN ^ 3 + C2 * (B2 + 2 * RN) ^ 2 + U * (B2 + 1.637 * RN) ^ 2 + 0.149 * RN ^ 3) - AREA1 * XB ^ 2 - 5 * 9 * ESPES ^ 3  / 12 - 2 * ESPES * 9 ^ 3 / 12 - 2 * 9 * ESPES * (BB - XB) ^ 2 - 2 * 9 * (EFE - ESPES / 2 - 4.5 - XB) * (EFE - ESPES / 2 - 4.5 - XB) - 3 * 9 * ESPES * XB ^ 2
form12.iyy.value = 2 * ESPES * (B2 * Math.pow(B2 / 2 + RN,2) + 0.0833 * Math.pow(B2,3) + 0.356 * Math.pow(RN,3) + C2 * Math.pow(B2 + 2 * RN,2) + U * Math.pow(B2 + 1.637 * RN,2) + 0.149 * Math.pow(RN,3)) - AREA01 * Math.pow(XB,2) - 5 * 9 * Math.pow(ESPES,3)  / 12 - 2 * ESPES * Math.pow(9,3) / 12 - 2 * 9 * ESPES * Math.pow(BB - XB,2) - 2 * 9 * (EFE - ESPES / 2 - 4.5 - XB) * (EFE - ESPES / 2 - 4.5 - XB) - 3 * 9 * ESPES * Math.pow(XB,2);
var IY = form12.iyy.value;

//WY = IY / (B1 - CGX)
form12.wy.value = IY / (B1 - CGX);
var WY = parseFloat(form12.wy.value);

//WT = 177 * ESPES ^ 2 / 3
form14.wt.value =  (177 * Math.pow(ESPES,2) / 3).toFixed(2) || 0.00;
var WT = parseFloat(form14.wt.value);

//IX1 = (IX / AREAU) ^ 0.5
form16.ixis.value = Math.pow(IX / AREAU,0.5).toFixed(2) || 0.00;
var IX1 = parseFloat(form16.ixis.value);

//IY1 = (IY / AREAU) ^ 0.5
form17.iy.value = Math.pow(IY / AREAU,0.5);
var IY1 = parseFloat(form17.iy.value);

//J1 = WT * ESPES
form12.j.value =  WT * ESPES;
var J1 = parseFloat(form12.j.value);

form11.dtam_d.value = form08.dtam_D.value - 5;

//W1 = (CB - 9) * (BB - XB)
W1 = (CB - 9) * (BB - XB);

//W2 = W1 + (BB - 9) * YB
W2 = W1 + (BB - 9) * YB;

//W3 = W2 + (AB - 27) * XB
W3 = W2 + (AB - 27) * XB;

//W4 = W3 + (BB - 9) * YB
W4 = W3 + (BB - 9) * YB;

//W5 = W4 + (CB - 9) * (BB - XB)
W5 = W4 + (CB - 9) * (BB - XB);

//RO1 = YB - CB
RO1 = YB - CB;

//RO3 = -YB
RO3 = Math.abs(YB);

//RO5 = -RO1
RO5 = Math.abs(RO1);

//JWY = (W1 * YB * (CB - 9) + (W1 * YB + W2 * YB) * (BB - 9) + (W2 * YB + W3 * RO3) * (AB - 27) + (W3 * RO3 + W4 * RO3) * (BB - 9) + (W4 * RO3 + W5 * RO5) * (CB - 9)) * ESPES / 3 + (W1 * RO1 * (CB - 9) + (W1 * YB + W2 * YB) * (BB - 9) + (W2 * RO3 + W3 * YB) * (AB - 27) + (W3 * RO3 +  W4 * RO3) * (BB - 9) + (W4 * RO5 + W5 * RO3) *  (CB - 9)) * ESPES / 6
JWY = (W1 * YB * (CB - 9) + (W1 * YB + W2 * YB) * (BB - 9) + (W2 * YB + W3 * RO3) * (AB - 27) + (W3 * RO3 + W4 * RO3) * (BB - 9) + (W4 * RO3 + W5 * RO5) * (CB - 9)) * ESPES / 3 + (W1 * RO1 * (CB - 9) + (W1 * YB + W2 * YB) * (BB - 9) + (W2 * RO3 + W3 * YB) * (AB - 27) + (W3 * RO3 +  W4 * RO3) * (BB - 9) + (W4 * RO5 + W5 * RO3) *  (CB - 9)) * ESPES / 6;

//x0 = JWY / IX
form04.dtam_X.value = (JWY / IX).toFixed(2);
var x0 = form04.dtam_X.value;

//If x0 < 0 Then x0 = -x0
if(x0 < 0){
  form04.dtam_X.value = Math.abs(x0);
}



//DIST = x0
form04.dtam_distancia.value = form04.dtam_X.value;
var DIST = parseFloat(form04.dtam_distancia.value);

//IP = IX + IY + AREAU * DIST ^ 2
form16.ip.value = IX*1 + IY*1 + AREAU*1 * (DIST * DIST);
var IP = parseFloat(form16.ip.value);

//W1 = (CB - 9) * (BB - XB + x0)
W1 = (CB*1 - 9) * (BB*1 - XB*1 + form04.dtam_X.value*1);

//W2 = W1 + (BB - 9) * YB
W2 = W1 + (BB - 9) * YB;

//W3 = W2 - (AB - 27) * (x0 - XB)
W3 = W2 - (AB - 27) * (form04.dtam_X.value - XB);

//W4 = W3 + (BB - 9) * YB
W4 = W3 + (BB - 9) * YB;

//W5 = W4 + (CB - 9) * (BB - XB + x0)
var w501 = CB - 9;
var w502 = (BB - XB + x0).toFixed(2);
var w503 = w501 * w502;
W5 = (W4 + w503);

//WN0 = ESPES / (2 * AREAU) * (W1 * (CB - 9) + (W1 + W2) * (BB - 9) + (W2 + W3) * (AB - 27) + (W3 + W4) * (BB - 9) + (W4 + W5) * (CB - 9))
WN0 = ESPES / (2 * AREAU) * (W1 * (CB - 9) + (W1 + W2) * (BB - 9) + (W2 + W3) * (AB - 27) + (W3 + W4) * (BB - 9) + (W4 + W5) * (CB - 9));

//WN1 = WN0 - W1
WN1 = WN0 - W1;

//WN2 = WN0 - W2
WN2 = WN0 - W2;

//WN3 = WN0 - W3
WN3 = WN0 - W3;

//WN4 = WN0 - W4
WN4 = WN0 - W4;

//WN5 = WN0 - W5
WN5 = WN0 - W5;

//Cw = ((WN0 * WN0 + WN0 * WN1 + WN1 * WN1) * (CB - 9) + (WN1 * WN1 + WN1 * WN2 + WN2 * WN2) * (BB - 9) + (WN2 * WN2 + WN2 * WN3 + WN3 * WN3) * (AB - 27)  + (WN3 * WN3 + WN3 * WN4 + WN4 * WN4) * (BB - 9)  + (WN4 * WN4 + WN4 * WN5 + WN5 * WN5) * (CB - 9))  * ESPES / 3
//form16.cw.value = ((WN0 * WN0 + WN0 * WN1 + WN1 * WN1) * (CB - 9) + (WN1 * WN1 + WN1 * WN2 + WN2 * WN2) * (BB - 9) + (WN2 * WN2 + WN2 * WN3 + WN3 * WN3) * (AB - 27)  + (WN3 * WN3 + WN3 * WN4 + WN4 * WN4) * (BB - 9)  + (WN4 * WN4 + WN4 * WN5 + WN5 * WN5) * (CB - 9))  * ESPES / 3;




  var re_raiod = /^([0-9]{0,4})([0-9]{0,4})$/;
  if (re_raiod.test(raiod.value)) {
    raiod.value = raiod.value.replace(re_raiod, "$1$2.00");
  }
  var re_raio_neutro = /^([0-9]{0,4})([0-9]{0,4})$/;
  if (re_raio_neutro.test(raio_neutro.value)) {
    raio_neutro.value = raio_neutro.value.replace(re_raio_neutro, "$1$2.00");
  }
  var re_alturadobra = /^([0-9]{0,4})([0-9]{0,4})$/;
  if (re_alturadobra.test(alturadobra.value)) {
    alturadobra.value = alturadobra.value.replace(re_alturadobra, "$1$2.00");
  }
  var re_ud = /^([0-9]{0,4})([0-9]{0,4})$/;
  if (re_ud.test(ud.value)) {
    ud.value = ud.value.replace(re_ud, "$1$2.00");
  }
  var re_dtam_a = /^([0-9]{0,4})([0-9]{0,4})$/;
  if (re_dtam_a.test(dtam_a.value)) {
    dtam_a.value = dtam_a.value.replace(re_dtam_a, "$1$2.00");
  }
  var re_dtam_b = /^([0-9]{0,4})([0-9]{0,4})$/;
  if (re_dtam_b.test(dtam_b.value)) {
    dtam_b.value = dtam_b.value.replace(re_dtam_b, "$1$2.00");
  }
  var re_dtam_c = /^([0-9]{0,4})([0-9]{0,4})$/;
  if (re_dtam_c.test(dtam_c.value)) {
    dtam_c.value = dtam_c.value.replace(re_dtam_c, "$1$2.00");
  }
  var re_dtam_a1 = /^([0-9]{0,4})([0-9]{0,4})$/;
  if (re_dtam_a1.test(dtam_a1.value)) {
    dtam_a1.value = dtam_a1.value.replace(re_dtam_a1, "$1$2.00");
  }
  var re_dtam_bbarra = /^([0-9]{0,4})([0-9]{0,4})$/;
  if (re_dtam_bbarra.test(dtam_bbarra.value)) {
    dtam_bbarra.value = dtam_bbarra.value.replace(re_dtam_bbarra, "$1$2.00");
  }
  var re_cgx = /^([0-9]{0,4})([0-9]{0,4})$/;
  if (re_cgx.test(cgx.value)) {
    cgx.value = cgx.value.replace(re_cgx, "$1$2.00");
  }
  var re_cgy = /^([0-9]{0,4})([0-9]{0,4})$/;
  if (re_cgy.test(cgy.value)) {
    cgy.value = cgy.value.replace(re_cgy, "$1$20.00");
  }
  var re_raioe = /^([0-9]{0,4})([0-9]{0,4})$/;
  if (re_raioe.test(raioe.value)) {
    raioe.value = raioe.value.replace(re_raioe, "$1$20.00");
  }
  var re_area_total = /^([0-9]{0,4})([0-9]{0,4})$/;
  if (re_area_total.test(area_total.value)) {
    area_total.value = area_total.value.replace(re_area_total, "$1$20.00");
  }
  var re_area_util = /^([0-9]{0,4})([0-9]{0,4})$/;
  if (re_area_util.test(area_util.value)) {
    area_util.value = area_util.value.replace(re_area_util, "$1$20.00");
  }
  var re_ip = /^([0-9]{0,4})([0-9]{0,4})$/;
  if (re_ip.test(ip.value)) {
    ip.value = ip.value.replace(re_ip, "$1$20.00");
  
  }
  var re_largura_da = /^([0-9]{0,4})([0-9]{0,4})$/;
  if (re_largura_da.test(largura_da.value)) {
    largura_da.value = largura_da.value.replace(re_largura_da, "$1$20.00");
  }
  var re_lxy = /^([0-9]{0,4})([0-9]{0,4})$/;
  if (re_lxy.test(ip.value)) {
    lxy.value = lxy.value.replace(re_lxy, "$1$20.00");
   }
  var re_dtam_d = /^([0-9]{0,4})([0-9]{0,4})$/;
  if (re_dtam_d.test(dtam_d.value)) {
    dtam_d.value = dtam_d.value.replace(re_dtam_d, "$1$2.00");
  }
  var re_dtam_e = /^([0-9]{0,4})([0-9]{0,4})$/;
  if (re_dtam_e.test(dtam_e.value)) {
    dtam_e.value = dtam_e.value.replace(re_dtam_e, "$1$2.00");
  }
  var re_dtam_dd = /^([0-9]{0,4})([0-9]{0,4})$/;
  if (re_dtam_dd.test(dtam_dd.value)) {
    dtam_dd.value = dtam_dd.value.replace(re_dtam_dd, "$1$2.00");
  }
  var re_dtam_ee = /^([0-9]{0,4})([0-9]{0,4})$/;
  if (re_dtam_ee.test(dtam_ee.value)) {
    dtam_ee.value = dtam_ee.value.replace(re_dtam_ee, "$1$2.00");
   }
  var re_dtam_u3 = /^([0-9]{0,4})([0-9]{0,4})$/;
  if (re_dtam_u3.test(dtam_u3.value)) {
    dtam_u3.value = dtam_u3.value.replace(re_dtam_u3, "$1$20.00");
  }
  var re_dtam_m = /^([0-9]{0,4})([0-9]{0,4})$/;
  if (re_dtam_m.test(dtam_m.value)) {
    dtam_m.value = dtam_m.value.replace(re_dtam_m, "$1$20.00");
  }
  var re_dtam_X = /^([0-9]{0,4})([0-9]{0,4})$/;
  if (re_dtam_X.test(dtam_X.value)) {
    dtam_X.value = dtam_X.value.replace(re_dtam_X, "$1$20.00");
  }
  var re_dtam_Y = /^([0-9]{0,4})([0-9]{0,4})$/;
  if (re_dtam_Y.test(dtam_Y.value)) {
    dtam_Y.value = dtam_Y.value.replace(re_dtam_Y, "$1$20.00");
  }
  var re_dtam_xx = /^([0-9]{0,4})([0-9]{0,4})$/;
  if (re_dtam_xx.test(dtam_xx.value)) {
    dtam_xx.value = dtam_xx.value.replace(re_dtam_xx, "$1$2.00");
  }
  var re_dtam_distancia = /^([0-9]{0,4})([0-9]{0,4})$/;
  if (re_dtam_distancia.test(dtam_distancia.value)) {
    dtam_distancia.value = dtam_distancia.value.replace(re_dtam_distancia, "$1$20.00");
  }
  var re_dtam_y = /^([0-9]{0,4})([0-9]{0,4})$/;
  if (re_dtam_y.test(dtam_y.value)) {
    dtam_y.value = dtam_y.value.replace(re_dtam_y, "$1$20.00");
  }
  var re_wz = /^([0-9]{0,4})([0-9]{0,4})$/;
  if (re_wz.test(wz.value)) {
    wz.value = wz.value.replace(re_wz, "$1$20.00");
  }
  var re_wy = /^([0-9]{0,4})([0-9]{0,4})$/;
  if (re_wy.test(wy.value)) {
    wy.value = wy.value.replace(re_wy, "$1$20.00");
  }
  var re_bbb = /^([0-9]{0,4})([0-9]{0,4})$/;
  if (re_bbb.test(bbb.value)) {
    bbb.value = bbb.value.replace(re_bbb, "$1$20.00");
  }
  var re_ixx = /^([0-9]{0,4})([0-9]{0,4})$/;
  if (re_ixx.test(ixx.value)) {
    ixx.value = ixx.value.replace(re_ixx, "$1$20.00");
  }
  var re_lz = /^([0-9]{0,4})([0-9]{0,4})$/;
  if (re_lz.test(lz.value)) {
    lz.value = lz.value.replace(re_lz, "$1$20.00");
  }
  var re_lv = /^([0-9]{0,4})([0-9]{0,4})$/;
  if (re_lv.test(lv.value)) {
    lv.value = lv.value.replace(re_lv, "$1$20.00");
  }
  var re_lxy = /^([0-9]{0,4})([0-9]{0,4})$/;
  if (re_lxy.test(lxy.value)) {
    lxy.value = lxy.value.replace(re_lxy, "$1$20.00");
  }
  var re_wv = /^([0-9]{0,4})([0-9]{0,4})$/;
  if (re_wv.test(wv.value)) {
    wv.value = wv.value.replace(re_wv, "$1$20.00");
  }
  var re_iz = /^([0-9]{0,4})([0-9]{0,4})$/;
  if (re_iz.test(iz.value)) {
    iz.value = iz.value.replace(re_iz, "$1$20.00");
  }
  var re_iv = /^([0-9]{0,4})([0-9]{0,4})$/;
  if (re_iv.test(iv.value)) {
    iv.value = iv.value.replace(re_iv, "$1$20.00");
   }
  var re_dtam_C = /^([0-9]{0,4})([0-9]{0,4})$/;
  if (re_dtam_C.test(dtam_C.value)) {
    dtam_C.value = dtam_C.value.replace(re_dtam_C, "$1$20.00");
  }
  var re_iii = /^([0-9]{0,4})([0-9]{0,4})$/;
  if (re_iii.test(iii.value)) {
    iii.value = iii.value.replace(re_iii, "$1$20.00");
   }
  var re_dtam_d = /^([0-9]{0,4})([0-9]{0,4})$/;
  if (re_dtam_d.test(dtam_d.value)) {
    dtam_d.value = dtam_d.value.replace(re_dtam_d, "$1$20.00");
  }
  var re_dtam_ccc = /^([0-9]{0,4})([0-9]{0,4})$/;
  if (re_dtam_ccc.test(dtam_ccc.value)) {
    dtam_ccc.value = dtam_ccc.value.replace(re_dtam_ccc, "$1$2.00");
  }
  







  



  window.onload = function () {
    id('copiar').onclick = function () {
      soma();
    }
  }



}