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
  var o = parseFloat(0.00785);
  
//RDB2 = 1.5 * ESPES
var ESPES = parseFloat(form06.espessura_d.value);
var RDB1 = parseFloat(form03.raioe.value);
form07.raiod.value = i * ESPES;
var RDB2 = parseFloat(form07.raiod.value);

//RN = RDB2 + ESPES / 2
form08.raio_neutro.value = RDB2 + ESPES / 2;
var RN = parseFloat(form08.raio_neutro.value);

//ALTDB = RDB2 + ESPES
form09.alturadobra.value = RDB2 + ESPES;
var ALTB = parseFloat(form09.alturadobra.value);

//U = RN * 1.57
form10.ud.value = RN + i;
var U = parseFloat(form10.ud.value);

//A1 = 80
var A1 = (80).toFixed(2);

//B1 = 47
var B1 = (47).toFixed(2);

//C1 = 21
var C1 = form03.etam_C.value;
C1 = (21).toFixed(2);

//FITA1 = 200
FITA1 = 200;

//FITA = 240
form10.largura_da.value = (240).toFixed(2);
var FITA = parseFloat(form10.largura_da.value);

//A2 = A1 - 2 * ALTDB
var A1 = parseFloat(form04.dtam_A.value);
form09.dtam_a.value = A1 - 2 * ALTDB;
var A2 = parseFloat(form09.dtam_a.value);

//B2 = B1 - 2 * ALTDB
var B1 = parseFloat(form05.dtam_B.value);
form09.dtam_b.value = B1 * 2 * ALTDB;
var B2 = parseFloat(form09.dtam_b.value);

//C2 = C1 - 2 * ALTDB

//AB = A1 - ESPES
form05.dtam_a1.value = A1 - ESPES;
var AB = parseFloat(form05.dtam_a1.value);

//BB = B1 - ESPES
form06.dtam_bbarra.value = (B1 - ESPES).toFixed(2);
var BB = parseFloat(form06.dtam_bbarra.value);

//CB = C1 - ESPES
form07.dtam_D.value = C1 - ESPES;
var CB = form07.dtam_D.value;

//D2 = (240 - 2 * C2 - 2 * B2 - A2 - 6 * U) / 2
D2 = (240 - 2 * C2 - 2 * B2 - A2 - 6 * U) / 2;

//D1 = D2 + ALTDB
D1 = D2 + ALTDB;

//DB = D1 - ESPES / 2
DB = D1 - ESPE / 2;

//E2 = (200 - 2 * B2 - A2 - 4 * U) / 2
E2 = (200 - 2 * B2 - A2 - 4 * U) / 2;

//E1A = E2 + ALTDB
E1A = E2 + ALTDB;

//eb = E1A - ESPES / 2
eb = E1A - ESPES / 2;

//AREA1 = (FITA + FITA1) * ESPES
AREA1 = (FITA + FITA) * ESPES;

//AREA2 = (FITA - 4 * 9) * ESPES
AREA2 = (FITA - 4 * 9) * ESPES;

//AREAU = AREA1 - 8 * 9 * ESPES
AREAU = AREA1 - 8 * 9 * ESPES;

//KGM = AREA1 * 0.00785
KGM = AREA1 * o;

//XB = ESPES * (2 * D2 * (2 * BB + ESPES + RN + D2 / 2)  + 2 * U * (2 * BB + ESPES + RN - 0.637 * RN) + 2 * C2 * (2 * BB + ESPES) + 2 * U * (2 * BB + ESPES - RN + 0.637 * RN) + 2 * B2 * (1.5 * BB + ESPES) + 2 * U * (BB + ESPES + RN - 0.637 * RN)  + A2 * (BB + ESPES) + 2 * E2 * BB + 2 * U * (BB - RN + 0.637 * RN) + 2 * B2 * BB / 2 + 2 *  U * (RN - 0.637 * RN) - 2 * 9 * (47 - ESPES / 2 + 23.5) - 2 * 9 * 47 - 2 * 9 * (23.5 - ESPES / 2)) / AREAU
XB = ESPES * (2 * D2 * (2 * BB + ESPES + RN + D2 / 2)  + 2 * U * (2 * BB + ESPES + RN - 0.637 * RN) + 2 * C2 * (2 * BB + ESPES) + 2 * U * (2 * BB + ESPES - RN + 0.637 * RN) + 2 * B2 * (1.5 * BB + ESPES) + 2 * U * (BB + ESPES + RN - 0.637 * RN)  + A2 * (BB + ESPES) + 2 * E2 * BB + 2 * U * (BB - RN + 0.637 * RN) + 2 * B2 * BB / 2 + 2 *  U * (RN - 0.637 * RN) - 2 * 9 * (47 - ESPES / 2 + 23.5) - 2 * 9 * 47 - 2 * 9 * (23.5 - ESPES / 2)) / AREAU;

//YB = AB / 2
YB = AB / 2;

//CGX = XB + ESPES / 2
form14.cgx.value = XB + ESPES / 2;
var CGX = parseFloat(form14.cgx.value);

//CGY = 40
form15.cgy.value = (40).toFixed(2);
var CGY = parseFloat(form15.cgy.value);

//IX = ESPES * (D2 * ESPES ^ 2 / 6 + 10 * 0.149 * RN + C2 ^ 3 / 6 + B2 * ESPES ^ 2 / 3 + A2 ^ 3 / 6 + E2 ^ 3 / 6 + 2 * D2 * (YB - CB) ^ 2 + 2 * U * (YB - CB + RN - 0.637 * RN) ^ 2 + 2 * C2 * (YB - CB / 2) ^ 2 + 8 * U * (YB - RN + 0.637 * RN) ^ 2 + 4 * B2 * YB ^ 2 + 2 * E2 * (YB - RN - E2 / 2) ^ 2 - 4 * 9 * ESPES ^ 2 / 12 - 4 * 9 ^ 3 / 12 - 4 * 9 * YB ^ 2 - 4 * 9 * 14.5 ^ 2)
form12.ixx.value = ESPES * (D2 * Math.pow(ESPES,2) / 6 + 10 * 0.149 * RN + Math.pow(C2,3) / 6 + B2 * Math.pow(ESPES,2) / 3 + Math.pow(A2,3) / 6 + Math.pow(E2,3) / 6 + 2 * D2 * Math.pow(YB - CB,2) + 2 * U * Math.pow(YB - CB + RN - 0.637 * RN,2) + 2 * C2 * Math.pow(YB - CB / 2,2) + 8 * U * Math.pow(YB - RN + 0.637 * RN,2) + 4 * B2 * Math.pow(YB,2) + 2 * E2 * Math.pow(YB - RN - E2 / 2,2) - 4 * 9 * Math.pow(ESPES,2) / 12 - 4 * Math.pow(9,3) / 12 - 4 * 9 * Math.pow(YB,2) - 4 * 9 * Math.pow(14.5,2));
var IX = parseFloat(form12.ixx.value);

//IY = ESPES * (D2 ^ 3 / 6 + 10 * 0.149 * RN + C2 * ESPES ^ 2 / 6 + B2 ^ 3 / 3 + A2 * ESPES ^ 2 / 6 + E2 * ESPES ^ 2 / 6 + 2 * D2 * (2 * BB + ESPES + RN + D2 / 2 - XB) ^ 2 + 2 * U * (2 * BB + ESPES + RN - 0.637 * RN - XB) ^ 2 + 2 * C2 * (2 * BB + ESPES - XB) ^ 2 + 2 * U * (2 * BB + ESPES - RN + 0.637 * RN - XB) ^ 2 + 2 * B2 * (1.5 * BB + ESPES - XB) ^ 2 + 2 * U * (BB + ESPES + RN - 0.637 * RN - XB) * (BB + ESPES + RN - 0.637 * RN - XB) + A2 * (BB + ESPES  - XB) * (BB + ESPES - XB) + 2 * E2 * (BB - XB) * (BB - XB) + 2 * U * (BB - RN + 0.637 * RN - XB)  * (BB - RN + 0.637 * RN - XB) + 2 * B2 * (BB / 2 - XB) * (BB / 2 - XB) + 2 * U * (RN - 0.637 *  RN - XB) * (RN - 0.637 * RN - XB) - 4 * 9 * ESPES ^ 2 / 12 - 4 * 9 ^ 3 / 12 - 2 * 9 * XB  ^ 2 - 2 * 9 * (BB / 2 - XB) * (BB / 2 - XB) - 2 * 9 * (BB + ESPES - XB) * (BB + ESPES - XB) - 2 * 9 * (1.5 * BB + ESPES - XB) ^ 2)
form13.iyy.value = ESPES * (Math.pow(D2,3) / 6 + 10 * 0.149 * RN + C2 * Math.pow(ESPES,2) / 6 + Math.pow(B2,3) / 3 + A2 * Math.pow(ESPES,2) / 6 + E2 * Math.pow(ESPES,2) / 6 + 2 * D2 * Math.pow(2 * BB + ESPES + RN + D2 / 2 - XB,2) + 2 * U * Math.pow(2 * BB + ESPES + RN - 0.637 * RN - XB,2) + 2 * C2 * Math.pow(2 * BB + ESPES - XB,2) + 2 * U * Math.pow(2 * BB + ESPES - RN + 0.637 * RN - XB,2) + 2 * B2 * Math.pow(1.5 * BB + ESPES - XB,2) + 2 * U * (BB + ESPES + RN - 0.637 * RN - XB) * (BB + ESPES + RN - 0.637 * RN - XB) + A2 * (BB + ESPES  - XB) * (BB + ESPES - XB) + 2 * E2 * (BB - XB) * (BB - XB) + 2 * U * (BB - RN + 0.637 * RN - XB)  * (BB - RN + 0.637 * RN - XB) + 2 * B2 * (BB / 2 - XB) * (BB / 2 - XB) + 2 * U * (RN - 0.637 *  RN - XB) * (RN - 0.637 * RN - XB) - 4 * 9 * ESPES ^ 2 / 12 - 4 * Math.pow(9,3) / 12 - 2 * 9 * Math.pow(XB,2) - 2 * 9 * (BB / 2 - XB) * (BB / 2 - XB) - 2 * 9 * (BB + ESPES - XB) * (BB + ESPES - XB) - 2 * 9 * (1.5 * BB + ESPES - XB) ^ 2);
var IY = parseFloat(form13.iyy.value);

//WX = IX / 40
form18.wx.value = (IX / 40).toFixed(2);
var WX = form18.wx.value;

//WY = IY / (2 * BB + ESPES + RN + D2 - XB)
form13.wy.value = IY / (2 * BB + ESPES + RN + D2 - XB);
var WY = form13.wy.value;

//WT = 368 * ESPES ^ 2 / 3
form14.wt.value =  368 * Math.pow(ESPES,2) / 3;
var WT = form14.wt.value;

//J1 = WT * ESPES
form12.j.value = WT * ESPES;
var J1 = form12.j.value;

//IX1 = (IX / AREAU) ^ 0.5
form16.ixis.value = Math.pow(IX / AREA01,0.5).toFixed(2) || 0.00;
var IX1 = form16.ixis.value;

//IY1 = (IY / AREAU) ^ 0.5
form17.iy.value = Math.pow(IY / AREA01,0.5).toFixed(2) || 0.00;
var IY1 = form17.iy.value;

//XB1 = ESPES * (2 * D2 * (BB + RN + D2 / 2) + 2 * U * (BB + RN - 0.637 * RN) + 2 * C2 * BB + 2 * U * (BB - RN + 0.637 * RN) + 2 * B2 * BB / 2 + 2 * U * (RN - 0.637 * RN) - 2 * 9 * (19 - ESPES / 2  + 4.5)) / AREA2
XB1 = ESPES * (2 * D2 * (BB + RN + D2 / 2) + 2 * U * (BB + RN - 0.637 * RN) + 2 * C2 * BB + 2 * U * (BB - RN + 0.637 * RN) + 2 * B2 * BB / 2 + 2 * U * (RN - 0.637 * RN) - 2 * 9 * (19 - ESPES / 2  + 4.5)) / AREA2;

//IX2 = ESPES * (D2 * ESPES ^ 2 / 6 + 6 * 0.149 * RN + C2 ^ 3 / 6 + B2 * ESPES ^ 2 / 6 + A2 ^ 3 / 12 + 2 * D2 * (YB - CB) ^ 2 + 2 * U * (YB - CB  + RN - 0.637 * RN) ^ 2 + 2 * C2 * (YB - CB / 2) ^ 2 + 4 * U * (YB - RN + 0.637 * RN) ^ 2 + 2 * B2 * YB ^ 2 - 9 ^ 3 / 6 - 9 * ESPES ^ 2 / 6 - 2 * 9 * YB ^ 2 - 2 * 9 * 14.5 ^ 2)
IX2 = ESPES * (D2 * Math.pow(ESPES,2) / 6 + 6 * 0.149 * RN + Math.pow(C2,3) / 6 + B2 * Math.pow(ESPES,2) / 6 + Math.pow(A2,3) / 12 + 2 * D2 * Math.pow(YB - CB,2) + 2 * U * Math.pow(YB - CB  + RN - 0.637 * RN,2) + 2 * C2 * Math.pow(YB - CB / 2,2) + 4 * U * Math.pow(YB - RN + 0.637 * RN,2) + 2 * B2 * Math.pow(YB,2) - Math.pow(9,3) / 6 - 9 * Math.pow(ESPES,2) / 6 - 2 * 9 * Math.pow(YB,2) - 2 * 9 * Math.pow(14.5,2));

//RO1 = YB - CB
RO1 = YB - CB;

//RO4 = -YB
RO4 = Math.abs(YB);

//RO6 = -RO1
RO6 = Math.abs(RO1);

//W1 = RO1 * DB
W1 = RO1 * DB;

//W2 = W1 + (BB - XB1) * CB
W2 = W1 + (BB - XB1) * CB;

//W3 = W2 + YB * (BB - 9)
W3 = W2 + YB * (BB - 9);

//W4 = W3 + XB1 * (AB - 18)
W4 = W3 + XB1 * (AB - 18);

//W5 = W4 + YB * (BB - 9)
W5 = W4 + YB * (BB - 9);

//W6 = W5 + (BB - XB1) * CB
W6 = W5 + (BB - XB1) * CB;

//W7 = W6 + W1
W7 = W6 + W1;

//JWY = (W1 * RO1 * DB + (W1 * RO1 + W2 * YB) * CB + (W2 * YB + W3 * YB) * (BB - 9) + (W3 * YB + W4 * RO4) * (AB - 18) + (W4 * RO4 + W5 * RO4) * (BB - 9) + (W5 * RO4 + W6 * RO6) * CB + (W6 * RO6 + W7 * RO6) * DB) * ESPES / 3 + (W1 * RO1 * DB + (W1 * YB + W2 * RO1) * CB + (W2 * YB + W3 * YB) * (BB - 9) + (W3 * RO4 + W4 * YB) * (AB -  18) + (W4 * RO4 + W5 * RO4) * (BB - 9) + (W5 * RO6 + W6 * RO4) * CB + (W6 * RO6 + W7 * RO6) * DB) * ESPES / 6
JWY = (W1 * RO1 * DB + (W1 * RO1 + W2 * YB) * CB + (W2 * YB + W3 * YB) * (BB - 9) + (W3 * YB + W4 * RO4) * (AB - 18) + (W4 * RO4 + W5 * RO4) * (BB - 9) + (W5 * RO4 + W6 * RO6) * CB + (W6 * RO6 + W7 * RO6) * DB) * ESPES / 3 + (W1 * RO1 * DB + (W1 * YB + W2 * RO1) * CB + (W2 * YB + W3 * YB) * (BB - 9) + (W3 * RO4 + W4 * YB) * (AB -  18) + (W4 * RO4 + W5 * RO4) * (BB - 9) + (W5 * RO6 + W6 * RO4) * CB + (W6 * RO6 + W7 * RO6) * DB) * ESPES / 6;

//x0 = -JWY / IX2
x0 = -JWY / IX2;

//RO1 = BB + ESPES + XB1 - x0
RO1 = BB + ESPES + XB1 - x0;

//RO2 = BB / 2
RO2 = BB / 2

//RO3 = RO1 + (RO2 - RO1) / 2
RO3 = RO1 + (RO2 - RO1) / 2;

//x0 = XB - RO3
x0 = XB - RO3;

//DIST = x0
form05.dtam_distancia.value = x0;
var DIST = parseFloat(form05.dtam_distancia.value);

//IP = IX + IY + AREAU * DIST ^ 2
form16.ip.value = IX + IY + AREAU * Math.pow(DIST,2);
var IP = parseFloat(form16.ip.value);

//W1 = (YB - CB) * DB
W1 = (YB - CB) * DB;

//W2 = W1 + (2 * BB + ESPES - XB + x0) * CB
W2 = W1 + (2 * BB + ESPES - XB + x0) * CB;

//W3 = W2 + YB * (BB - 9)
W3 = W2 + YB * (BB - 9);

//W4 = BB + ESPES - XB
W4 = BB + ESPES - XB;

//If W4 > 0 Then
//W4 = W3 - (BB + ESPES - XB + x0) * (AB - 18)
//Else
//W4 = W3 - (XB - BB - ESPES - x0) * (AB - 18)
//End If
if(W4 > 0){
  W4 = W3 - (BB + ESPES - XB + x0) * (AB - 18);
}else{
  W4 = W3 - (XB - BB - ESPES - x0) * (AB - 18);
}

//W5 = W4 + YB * (BB - 9)
W5 = W4 + YB * (BB - 9);

//W6 = W5 + (2 * BB + ESPES - XB + x0) * CB
W6 = W5 + (2 * BB + ESPES - XB + x0) * CB;

//W7 = W6 + W1
W7 = W6 + W1;

//WN0 = (W1 * DB + (W1 + W2) * CB + (W2 + W3) * (BB - 9) + (W3 + W4) * (AB - 18) + (W4 + W5) * (BB - 9) + (W5 + W6) * CB + (W6 + W7) * DB) * ESPES / (2 * AREAU)
WN0 = (W1 * DB + (W1 + W2) * CB + (W2 + W3) * (BB - 9) + (W3 + W4) * (AB - 18) + (W4 + W5) * (BB - 9) + (W5 + W6) * CB + (W6 + W7) * DB) * ESPES / (2 * AREAU);

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

//Cw = ((WN0 * WN0 + WN0 * WN1 + WN1 * WN1) * DB + (WN1 * WN1 + WN1 * WN2 + WN2 * WN2) * CB + (WN2 * WN2 + WN2 * WN3 + WN3 * WN3) * (BB - 9) + (WN3 * WN3 + WN3 * WN4 + WN4 * WN4) * (AB - 18)  + (WN4 * WN4 + WN4 * WN5 + WN5 * WN5) * (BB - 9) + (WN5 * WN5 + WN5 * WN6 + WN6 * WN6) * CB   + (WN6 * WN6 + WN6 * WN7 + WN7 * WN7) * DB) * ESPES / 3
form16.cw.value = ((WN0 * WN0 + WN0 * WN1 + WN1 * WN1) * DB + (WN1 * WN1 + WN1 * WN2 + WN2 * WN2) * CB + (WN2 * WN2 + WN2 * WN3 + WN3 * WN3) * (BB - 9) + (WN3 * WN3 + WN3 * WN4 + WN4 * WN4) * (AB - 18)  + (WN4 * WN4 + WN4 * WN5 + WN5 * WN5) * (BB - 9) + (WN5 * WN5 + WN5 * WN6 + WN6 * WN6) * CB   + (WN6 * WN6 + WN6 * WN7 + WN7 * WN7) * DB) * ESPES / 3;
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