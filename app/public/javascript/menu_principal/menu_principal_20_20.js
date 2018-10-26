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
    var etam_D = form01.etam_D;
    var re_etam_D = /^([0-9]{0,3})([0-9]{0,3})$/;
    if (re_etam_D.test(etam_D.value)) {
    etam_D.value = etam_D.value.replace(re_etam_D, "$1$2,00");
    }
    var form03 = document.getElementById("form03");
    var raioe = form03.raioe;
    var re_raioe = /^([0-9]{0,3})([0-9]{0,3})$/;
    if (re_raioe.test(raioe.value)) {
      raioe.value = raioe.value.replace(re_raioe, "$1$2,00");
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
  id('tam_DD').value = id('etam_D').value || 0.00;
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
  

//RDB2 = RDB1 * ESPES
var ESPES = parseFloat(id('espessura_d').value);
var RDB1 = parseFloat(form03.raioe.value);
form07.raiod.value = (RDB1 * ESPES).toFixed(2) || 0.00;
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

//A2 = A1 - 2 * ALTDB
var A1 = parseFloat(form04.dtam_A.value);
form09.dtam_a.value = (A1 - 2 * ALTDB).toFixed(2) || 0.00;
var A2 = parseFloat(form09.dtam_a.value);


//B2 = B1 - 2 * ALTDB
var B1 = parseFloat(form05.dtam_B.value);
form09.dtam_b.value = (B1 - 2 * ALTDB).toFixed(2) || 0.00;
var B2 = parseFloat(form09.dtam_b.value);

//C2 = C1 - 2 * ALTDB
var C1 = form03.etam_C.value
form10.dtam_c.value = form03.etam_C.value - 2 * ALTDB;
var C2 = parseFloat(form10.dtam_c.value);


//D2 = D1 - ALTDB
var D1 = form01.etam_D.value;
form11.dtam_d.value= D1 - ALTDB;
var D2 = parseFloat(form11.dtam_d.value);

//AB = A1 - ESPES
form05.dtam_a1.value = (A1 - ESPES).toFixed(2) || 0.00;
var AB = parseFloat(form05.dtam_a1.value);

//BB = B1 - ESPES
form06.dtam_bbarra.value = (B1 - ESPES).toFixed(2) || 0.00;
var BB = parseFloat(form06.dtam_bbarra.value);

//CB = C1 - ESPES
form07.dtam_ccc.value = C1 - ESPES;
var CB = parseFloat(form07.dtam_ccc.value);

//DB = D1 - ESPES / 2
form07.dtam_dd.value  = D1 - ESPES / 2;
var DB = parseFloat(form07.dtam_dd.value);

//FITA = 2 * D2 + 6 * U + 2 * C2 + 2 * A2 + B2
form10.largura_da.value = 2 * D2 + 6 * U + 2 * C2 + 2 * A2 + B2;
var FITA = parseFloat(form10.largura_da.value);

//AREA1 = FITA * ESPES
form19.area_total.value = (FITA * ESPES).toFixed(2) || 0.00;
var AREA01 = parseFloat(form19.area_total.value);

//AREAU = AREA1
id('area_util').value = id('area_total').value;

//KGM = AREA1 * 0.001 * 7.85
form04.d_Peso.value = (AREA01 * 0.001 * 7.85).toFixed(2) || 0.00;
var KGM = parseFloat(form04.d_Peso.value);

//J1 = FITA * ESPES ^ 3 / 3
form12.j.value = FITA * Math.pow(ESPES,3) / 3;
var J1 = parseFloat(form12.j.value);

//WT = J1 / ESPES
form14.wt.value =  (J1 / ESPES).toFixed(2) || 0.00;
var WT = parseFloat(form14.wt.value);


//CGX = B1 / 2
form14.cgx.value = B1 / 2;
var CGX = parseFloat(form14.cgx.value);

//CGY = (B2 * ESPES ^ 2 / 2 + 2 * U * ESPES * (ESPES / 2 + RN - 0.637 * RN) + 2 * A2 * ESPES * (ALTDB  + A2 / 2) + 4 * U * ESPES * (ALTDB + A2 + RN - 0.637 * RN) + 2 * C2 * ESPES * (A1 - ESPES / 2)  + 2 * D2 * ESPES * (A1 - ALTDB - D2 / 2)) / AREA1
form15.cgy.value = (B2 * Math.pow(ESPES,2) / 2 + 2 * U * ESPES * (ESPES / 2 + RN - e * RN) + 2 * A2 * ESPES * (ALTDB  + A2 / 2) + 4 * U * ESPES * (ALTDB + A2 + RN - e * RN) + 2 * C2 * ESPES * (A1 - ESPES / 2)  + 2 * D2 * ESPES * (A1 - ALTDB - D2 / 2)) / AREA01;
var CGY = parseFloat(form15.cgy.value);

//YB = CGY - ESPES / 2
form09.dtam_y.value = CGY - ESPES / 2;
var YB = parseFloat(form09.dtam_y.value);

//IX = B2 * ESPES ^ 3 / 12 + 6 * 0.149 * RN * ESPES + ESPES * A2 ^ 3 / 6 + C2 * ESPES ^ 3 / 6 + ESPES * D2 ^ 3 / 6 + B2 * ESPES * YB * YB + 2 * U * ESPES * (YB - RN + 0.637 * RN) * (YB - RN + 0.637 * RN) + 2 * A2 * ESPES * (YB - RN - A2 / 2) * (YB - RN - A2 / 2) + 4 * U * ESPES * (AB - YB - RN + 0.637 * RN) * (AB - YB - RN + 0.637 * RN) + 2 * C2 * ESPES * (AB - YB) * (AB - YB) + 2 * D2 * ESPES * (AB - YB - RN - D2 / 2) * (AB - YB - RN - D2 / 2)
form12.ixx.value = B2 * Math.pow(ESPES,3) / 12 + 6 * 0.149 * RN * ESPES + ESPES * Math.pow(A2,3) / 6 + C2 * Math.pow(ESPES,3) / 6 + ESPES * Math.pow(D2,3) / 6 + B2 * ESPES * YB * YB + 2 * U * ESPES * (YB - RN + e * RN) * (YB - RN + e * RN) + 2 * A2 * ESPES * (YB - RN - A2 / 2) * (YB - RN - A2 / 2) + 4 * U * ESPES * (AB - YB - RN + e * RN) * (AB - YB - RN + e * RN) + 2 * C2 * ESPES * (AB - YB) * (AB - YB) + 2 * D2 * ESPES * (AB - YB - RN - D2 / 2) * (AB - YB - RN - D2 / 2);
var IX = parseFloat(form12.ixx.value);

//IY = D2 * ESPES ^ 3 / 6 + 6 * 0.149 * RN * ESPES + ESPES * C2 ^ 3 / 6 + A2 * ESPES ^ 3 / 6 + ESPES * B2 ^ 3 / 12 + 2 * D2 * ESPES * (BB / 2  - CB) * (BB / 2 - CB) + 2 * U * ESPES * (BB / 2 - CB + RN - 0.637 * RN) * (BB / 2 - CB + RN - 0.637 * RN) + 2 * C2 * ESPES * (B1 / 2 - C1 / 2) ^ 2 + 4 * U * ESPES * (BB / 2 - RN + 0.637 * RN) * (BB / 2 - RN + 0.637 * RN) + 2 * A2 * ESPES * (BB / 2) ^ 2
form13.iyy.value = D2 * Math.pow(ESPES,3) / 6 + 6 * c * RN * ESPES + ESPES * Math.pow(C2,3) / 6 + A2 * Math.pow(ESPES,3) / 6 + ESPES * Math.pow(B2,3) / 12 + 2 * D2 * ESPES * (BB / 2  - CB) * (BB / 2 - CB) + 2 * U * ESPES * (BB / 2 - CB + RN - e * RN) * (BB / 2 - CB + RN - e * RN) + 2 * C2 * ESPES * Math.pow(B1 / 2 - C1 / 2,2) + 4 * U * ESPES * (BB / 2 - RN + e * RN) * (BB / 2 - RN + e * RN) + 2 * A2 * ESPES * Math.pow(BB / 2,2);
var IY = parseFloat(form13.iyy.value);

//W1 = (BB / 2 - CB) * DB
W1 = (BB / 2 - CB) * DB;

//W2 = -(AB - YB) * CB + W1
W2 = -(AB - YB) * CB + W1;

//W3 = -(BB / 2) * AB + W2
W3 = -(BB / 2) * AB + W2;

//W4 = -YB * BB + W3
W4 = -YB * BB + W3;

//W5 = -(BB / 2) * AB + W4
W5 = -(BB / 2) * AB + W4;

//W6 = -(AB - YB) * CB + W5
W6 = -(AB - YB) * CB + W5;

//W7 = (BB / 2 - CB) * DB + W6
W7 = (BB / 2 - CB) * DB + W6;

//RO1 = -(BB / 2 - CB)
RO1 = -(BB / 2 - CB);

//RO2 = -BB / 2
RO2 = -BB / 2;

//RO4 = BB / 2
RO4 = BB / 2;

//RO6 = BB / 2 - CB
RO6 = BB / 2 - CB;

//JWX = (W1 * RO1 * ESPES * DB + (W1 * RO1 + W2 * RO2) * ESPES * CB + (W2 * RO2 + W3 * RO2) * ESPES * AB + (W3 * RO2 + W4 * RO4) * ESPES * BB + (W4 * RO4 + W5 * RO4) * ESPES * AB + (W5 * RO4  + W6 * RO6) * ESPES * CB + (W6 * RO6 + W7 * RO6) * ESPES * DB) / 3 + (W1 * RO1 * ESPES * DB  + (W1 * RO2 + W2 * RO1) * ESPES * CB + (W2 * RO2 + W3 * RO2) * ESPES * AB + (W3 * RO4 + W4 * RO2) * ESPES * BB + (W4 * RO4 + W5 * RO4) * ESPES * AB + (W5 * RO6 + W6 * RO4) * ESPES * CB  + (W6 * RO6 + W7 * RO6) * ESPES * DB) / 6
JWX = (W1 * RO1 * ESPES * DB + (W1 * RO1 + W2 * RO2) * ESPES * CB + (W2 * RO2 + W3 * RO2) * ESPES * AB + (W3 * RO2 + W4 * RO4) * ESPES * BB + (W4 * RO4 + W5 * RO4) * ESPES * AB + (W5 * RO4  + W6 * RO6) * ESPES * CB + (W6 * RO6 + W7 * RO6) * ESPES * DB) / 3 + (W1 * RO1 * ESPES * DB  + (W1 * RO2 + W2 * RO1) * ESPES * CB + (W2 * RO2 + W3 * RO2) * ESPES * AB + (W3 * RO4 + W4 * RO2) * ESPES * BB + (W4 * RO4 + W5 * RO4) * ESPES * AB + (W5 * RO6 + W6 * RO4) * ESPES * CB  + (W6 * RO6 + W7 * RO6) * ESPES * DB) / 6;

//y0 = -JWX / IY
form06.dtam_Y.value = (-JWX / IY).toFixed(2) || 0.00;
var y0 = parseFloat(form06.dtam_Y.value);

//DIST = y0
form05.dtam_distancia.value = y0;
var DIST = parseFloat(form05.dtam_distancia.value);

//EME = y0 - YB
form04.dtam_m.value = y0 - YB;
var EME = parseFloat(form04.dtam_m.value);

//IP = IX + IY + AREA1 * DIST ^ 2
form16.ip.value = IX + IY + AREA01 * Math.pow(DIST,2);
var IP = parseFloat(form16.ip.value);

//IX1 = (IX / AREA1) ^ 0.5
form16.ixis.value = Math.pow(IX / AREA01,0.5).toFixed(2) || 0.00;
var IX1 = parseFloat(form16.ixis.value);

//IY1 = (IY / AREA1) ^ 0.5
form17.iy.value = Math.pow(IY / AREA01,0.5);
var IY1 = parseFloat(form17.iy.value);

//WX1 = IX / (YB + ESPES / 2)
WX1 = IX / (YB + ESPES / 2);

//WX2 = IX / (A1 - YB - ESPES / 2)
WX2 = IX / (A1 - YB - ESPES / 2);

//If WX1 < WX2 Then
//WX = WX1
//Else
//WX = WX2
//End If
if (WX1 < WX2){
    WX = WX1;  
}else{
    WX = WX2;  
}

form18.wx.value = WX;

//WY = IY / (B1 / 2)
form13.wy.value = IY / (B1 / 2);
var WY = parseFloat(form13.wy.value);

//RO1 = (BB / 2 - CB)
RO1 = (BB / 2 - CB);

//RO2 = -(AB + EME)
RO2 = -(AB + EME);

//RO3 = -BB / 2
RO3 = -BB / 2;

//RO4 = EME
RO4 = EME;

//W1 = RO1 * DB
W1 = RO1 * DB;

//W2 = W1 + RO2 * CB
W2 = W1 + RO2 * CB;

//W3 = W2 + RO3 * AB
W3 = W2 + RO3 * AB;

//W4 = W3 + RO4 * BB
W4 = W3 + RO4 * BB;

//W5 = W4 + RO3 * AB
W5 = W4 + RO3 * AB;

//W6 = W5 + RO2 * CB
W6 = W5 + RO2 * CB;

//W7 = W6 + RO1 * DB
W7 = W6 + RO1 * DB;

//WN0 = (W1 * ESPES * DB + (W1 + W2) * ESPES * CB + (W2 + W3) * ESPES * AB + (W3 + W4) * ESPES * BB + (W4 + W5) * ESPES * AB + (W5 + W6) * ESPES * CB + (W6 + W7) * ESPES * DB) / (2 * AREA1)
WN0 = (W1 * ESPES * DB + (W1 + W2) * ESPES * CB + (W2 + W3) * ESPES * AB + (W3 + W4) * ESPES * BB + (W4 + W5) * ESPES * AB + (W5 + W6) * ESPES * CB + (W6 + W7) * ESPES * DB) / (2 * AREA01);

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

//WN6 = WN0 - W6
WN6 = WN0 - W6;

//WN7 = WN0 - W7
WN7 = WN0 - W7;

//Cw = ((WN0 * WN0 + WN0 * WN1 + WN1 * WN1) * ESPES * DB + (WN1 * WN1 + WN1 * WN2 + WN2 * WN2) * ESPES * CB + (WN2 * WN2 + WN2 * WN3 + WN3 * WN3) * ESPES * AB + (WN3 * WN3 + WN3 * WN4 + WN4 * WN4) * ESPES * BB + (WN4 * WN4 + WN4 * WN5 + WN5 * WN5) * ESPES * AB + (WN5 * WN5 + WN5 * WN6 + WN6 * WN6) * ESPES * CB + (WN6 * WN6 + WN6 * WN7 + WN7 * WN7) * ESPES * DB) / 3
form16.cw.value = ((WN0 * WN0 + WN0 * WN1 + WN1 * WN1) * ESPES * DB + (WN1 * WN1 + WN1 * WN2 + WN2 * WN2) * ESPES * CB + (WN2 * WN2 + WN2 * WN3 + WN3 * WN3) * ESPES * AB + (WN3 * WN3 + WN3 * WN4 + WN4 * WN4) * ESPES * BB + (WN4 * WN4 + WN4 * WN5 + WN5 * WN5) * ESPES * AB + (WN5 * WN5 + WN5 * WN6 + WN6 * WN6) * ESPES * CB + (WN6 * WN6 + WN6 * WN7 + WN7 * WN7) * ESPES * DB) / 3 ;
var Cw = parseFloat(form16.cw.value); 



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
      dtam_e.value = dtam_e.value.replace(re_dtam_e, "$1$20.00");
    }
    var re_dtam_dd = /^([0-9]{0,4})([0-9]{0,4})$/;
    if (re_dtam_dd.test(dtam_dd.value)) {
      dtam_dd.value = dtam_dd.value.replace(re_dtam_dd, "$1$2.00");
    }
    var re_dtam_ee = /^([0-9]{0,4})([0-9]{0,4})$/;
    if (re_dtam_ee.test(dtam_ee.value)) {
      dtam_ee.value = dtam_ee.value.replace(re_dtam_ee, "$1$20.00");
    
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
      dtam_xx.value = dtam_xx.value.replace(re_dtam_xx, "$1$20.00");
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
      dtam_d.value = dtam_d.value.replace(re_dtam_d, "$1$2.00");
    }
    var re_dtam_ccc = /^([0-9]{0,4})([0-9]{0,4})$/;
    if (re_dtam_ccc.test(dtam_ccc.value)) {
      dtam_ccc.value = dtam_ccc.value.replace(re_dtam_ccc, "$1$2.00");
    }
    var re_dtam_zz = /^([0-9]{0,4})([0-9]{0,4})$/;
    if (re_dtam_zz.test(dtam_zz.value)) {
      dtam_zz.value = dtam_zz.value.replace(re_dtam_zz, "$1$20.00");
    }
  
  
  
  
  
  
  
    
  
  
  
    window.onload = function () {
      id('copiar').onclick = function () {
        soma();
      }
    }
  
  
  
  }