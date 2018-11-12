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
    var re_etam_D= /^([0-9]{0,3})([0-9]{0,3})$/;
    if (re_etam_D.test(etam_D.value)) {
      etam_D.value = etam_D.value.replace(re_etam_D, "$1$2,00");
       }
    var form02 = document.getElementById("form02");
    var etam_E = form02.etam_E;
    var re_etam_E= /^([0-9]{0,3})([0-9]{0,3})$/;
    if (re_etam_E.test(etam_E.value)) {
      etam_E.value = etam_E.value.replace(re_etam_E, "$1$2,00");
   
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
id('dtam_D').value = id('etam_D').value || 0.00;
id('dtam_E').value = id('etam_E').value || 0.00;
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

//RDB2 = RDB1 * ESPES
var ESPES = parseFloat(id('espessura_d').value);
var RDB1 = parseFloat(id('raioe').value);
id('raiod').value = (RDB1 * ESPES).toFixed(2) || 0.00;
var RDB2 = parseFloat(id('raiod').value);

//RN = RDB2 + ESPES / 2
id('raio_neutro').value = (RDB2 + ESPES / 2).toFixed(2) || 0.00;
var RN = parseFloat(id('raio_neutro').value);

//ALTDB = RDB2 + ESPES
id('alturadobra').value = (RDB2 + ESPES).toFixed(2) || 0.00;
var ALTDB = parseFloat(id('alturadobra').value);

//U = RN * 1.57
var U1 = parseFloat(1.57);
id('ud').value = ((id('raio_neutro').value * 10 * 1.57) / 10).toFixed(2) || 0.00;
var U = parseFloat(id('ud').value);

//A2 = A1 - 2 * ALTDB
var A1 = parseFloat(id('dtam_A').value);
id('dtam_a').value = (A1 - 2 * ALTDB).toFixed(2) || 0.00;
var A2 = parseFloat(id('dtam_a').value);

//B2 = B1 - 2 * ALTDB
var B1 = parseFloat(id('dtam_B').value);
id('dtam_b').value = (B1 - 2 * ALTDB).toFixed(2) || 0.00;
var B2 = parseFloat(id('dtam_b').value);

//C2 = C1 - 2 * ALTDB
var C1 = id('etam_C').value
id('dtam_c').value = id('etam_C').value - 2 * ALTDB;
var C2 = parseFloat(id('dtam_c').value);

//D2 = D1 - ALTDB
var D1 = id('etam_D').value;
id('dtam_D').value= D1 - ALTDB;
var D2 = parseFloat(id('dtam_D').value);

//E2 = E1 - ALTDB
var E1 = id('etam_E').value;
id('dtam_e').value = E1 - ALTDB;
var E2 = parseFloat(id('dtam_e').value);

//AB = A1 - ESPES
id('dtam_a1').value = (A1 - ESPES).toFixed(2) || 0.00;
var AB = parseFloat(id('dtam_a1').value);

//BB = B1 - ESPES
id('dtam_bbarra').value = (B1 - ESPES).toFixed(2) || 0.00;
var BB = parseFloat(id('dtam_bbarra').value);

//CB = C1 - ESPES
id('dtam_ccc').value = C1 - ESPES ;
var CB = parseFloat(id('dtam_ccc').value);

//DB = D1 - ESPES / 2
id('dtam_dd').value =  D1 - ESPES / 2;
var DB = parseFloat(id('dtam_dd').value);

//eb = E1 - ESPES / 2
id('dtam_ee').value = E1 - ESPES / 2;
var eb = parseFloat(id('dtam_ee').value);

//FITA = D2 + B2 + A2 + C2 + E2 + 4 * U
id('largura_da').value = D2 + B2 + A2 + C2 + E2 + 4 * U;
var FITA = parseFloat(id('largura_da').value);

//AREA1 = 2 * FITA * ESPES
id('area_total').value = (2 * FITA * ESPES).toFixed(2) || 0.00;
var AREA01 = parseFloat(id('area_total').value);

//AREA2 = FITA * ESPES
AREA02 = FITA * ESPES;

//AREAU = AREA1
id('area_util').value = id('area_total').value;

//KGM = AREA1 * 0.00785
id('d_Peso').value = (AREA01  * 0.00785).toFixed(2) || 0.00;
var KGM = parseFloat(id('d_Peso').value);

//XB = BB + ESPES / 2
id('dtam_xx').value = BB + ESPES / 2;
var XB = parseFloat(id('dtam_xx').value);

//YB = (2 * D2 * ESPES * (RN + D2 / 2) + 4 * U * ESPES * (RN - 0.637 * RN) + 2 * A2 * ESPES * AB / 2 + 4 * U * ESPES * (AB - RN + 0.637 * RN) + 2 * C2 * ESPES * AB + 2 * E2 * ESPES * (AB - RN - E2 / 2)) / AREA1
id('dtam_y').value = (2 * D2 * ESPES * (RN + D2 / 2) + 4 * U * ESPES * (RN - e * RN) + 2 * A2 * ESPES * AB / 2 + 4 * U * ESPES * (AB - RN + e * RN) + 2 * C2 * ESPES * AB + 2 * E2 * ESPES * (AB - RN - E2 / 2)) / AREA01;
var YB = parseFloat(id('dtam_y').value);

//CGX = B1
id('cgx').value = B1;
var CGX = parseFloat(id('cgx').value);

//CGY = YB + ESPES / 2
id('cgy').value = YB + ESPES / 2;
var CGY = parseFloat(id('cgy').value);

//IX = ESPES * D2 ^ 3 / 6 + 8 * 0.149 * RN * ESPES + B2 * ESPES ^ 3 / 6 + ESPES * A2 ^ 3 / 6 + C2 * ESPES ^ 3 / 6 + ESPES * E2 ^ 3 / 6 + 2 * D2 * ESPES * (YB - RN - D2 / 2) ^ 2 + 4 * U * ESPES * (YB - RN + 0.637 * RN) ^ 2 + 2 * B2 * ESPES * YB ^ 2 + 2 * A2 * ESPES * (AB / 2 - YB) ^ 2 + 4 * U * ESPES * (AB - RN + 0.637 * RN - YB) ^ 2 + 2 * C2 * ESPES * (AB - YB) ^ 2 + 2 * E2 * ESPES * (AB - RN - E2 / 2 - YB) ^ 2
id('ixx').value = ESPES * Math.pow(D2,3) / 6 + 8 * b * RN * ESPES + B2 * Math.pow(ESPES,3) / 6 + ESPES * Math.pow(A2,3) / 6 + C2 * Math.pow(ESPES,3) / 6 + ESPES * Math.pow(E2,3) / 6 + 2 * D2 * ESPES * Math.pow(YB - RN - D2 / 2,2) + 4 * U * ESPES * Math.pow(YB - RN + e * RN,2) + 2 * B2 * ESPES * Math.pow(YB,2) + 2 * A2 * ESPES * Math.pow(AB / 2 - YB,2) + 4 * U * ESPES * Math.pow(AB - RN + e * RN - YB,2) + 2 * C2 * ESPES * Math.pow(AB - YB,2) + 2 * E2 * ESPES * Math.pow(AB - RN - E2 / 2 - YB,2);
var IX = parseFloat(id('ixx').value);

//IY = D2 * ESPES ^ 3 / 6 + 8 * 0.149 * RN * ESPES + ESPES * B2 ^ 3 / 6 + A2 * ESPES ^ 3 / 6 + ESPES * C2 ^ 3 / 6 + E2 * ESPES ^ 3 / 6 + 2 * D2 * ESPES * (B1 - ESPES / 2) ^ 2 + 2 * U * ESPES * (BB + ESPES / 2 - RN + 0.637 * RN) ^ 2 + 2 * B2 * ESPES * (BB / 2 + ESPES / 2) ^ 2 + 4 * U * ESPES * (ESPES / 2 + RN - 0.637 * RN) ^ 2 + 2 * A2 * ESPES * (ESPES / 2) ^ 2 + 2 * C2 * ESPES * (CB / 2 + ESPES / 2) ^ 2 + 2 * U * ESPES * (ESPES / 2 + CB - RN + 0.637 * RN) ^ 2 + 2 * E2 * ESPES * (CB + ESPES / 2) ^ 2
id('iyy').value = D2 * Math.pow(ESPES,3) / 6 + 8 * b * RN * ESPES + ESPES * Math.pow(B2,3) / 6 + A2 * Math.pow(ESPES,3) / 6 + ESPES * Math.pow(C2,3) / 6 + E2 * Math.pow(ESPES,3) / 6 + 2 * D2 * ESPES * Math.pow(B1 - ESPES / 2,2) + 2 * U * ESPES * Math.pow(BB + ESPES / 2 - RN + e * RN,2) + 2 * B2 * ESPES * Math.pow(BB / 2 + ESPES / 2,2) + 4 * U * ESPES * Math.pow(ESPES / 2 + RN - e * RN,2) + 2 * A2 * ESPES * Math.pow(ESPES / 2,2) + 2 * C2 * ESPES * Math.pow(CB / 2 + ESPES / 2,2) + 2 * U * ESPES * Math.pow(ESPES / 2 + CB - RN + e * RN,2) + 2 * E2 * ESPES * Math.pow(CB + ESPES / 2,2);
var IY = parseFloat(id('iyy').value);

//WX = IX / (AB - YB + ESPES / 2)
id('wx').value = (IX / (AB - YB + ESPES / 2)).toFixed(2);
var WX = parseFloat(id('wx').value);

//WY = IY / B1
id('wy').value = IY / B1;
var WY = parseFloat(id('wy').value);

//WT = 2 * FITA * ESPES ^ 2 / 3
id('wt').value =  2 * FITA * Math.pow(ESPES,2) / 3;
var WT = parseFloat(id('wt').value);

//J1 = WT * ESPES
id('j').value = WT * ESPES;
var J1 = parseFloat(id('j').value);

//IX1 = (IX / AREA1) ^ 0.5
id('ixis').value = Math.pow(IX / AREA01,0.5).toFixed(2) || 0.00;
var IX1 = parseFloat(id('ixis').value);

//IY1 = (IY / AREA1) ^ 0.5
id('iy').value = Math.pow(IY / AREA01,0.5);
var IY1 = parseFloat(id('iy').value);

//XB1 = (D2 * ESPES * BB + U * ESPES * (BB - RN + 0.637  * RN) + B2 * ESPES * BB / 2 + 2 * U * ESPES * (RN - 0.637 * RN) + C2 * ESPES * CB / 2 + U * ESPES * (CB - RN + 0.637 * RN) + E2 * ESPES * CB) / AREA2
XB1 = (D2 * ESPES * BB + U * ESPES * (BB - RN + e  * RN) + B2 * ESPES * BB / 2 + 2 * U * ESPES * (RN - e * RN) + C2 * ESPES * CB / 2 + U * ESPES * (CB - RN + e * RN) + E2 * ESPES * CB) / AREA02;

//IY2 = D2 * ESPES ^ 3 / 12 + 4 * 0.149 * RN * ESPES + ESPES * B2 ^ 3 / 12 + A2 * ESPES ^ 3 / 12 + ESPES * C2 ^ 3 / 12 + E2 * ESPES ^ 3 / 12 + D2 * ESPES * (BB - XB1) ^ 2 + U * ESPES * (BB - RN + 0.637 * RN - XB1) ^ 2 + B2 * ESPES *  (BB / 2 - XB1) ^ 2 + 2 * U * ESPES * (XB1 - RN + 0.637 * RN) ^ 2 + A2 * ESPES * XB1 ^ 2 + C2 * ESPES * (XB1 - RN - C2 / 2) * (XB1 - RN - C2 / 2) + U * ESPES * (XB1 - CB + RN - 0.637 * RN)  * (XB1 - CB + RN - 0.637 * RN) + E2 * ESPES * (CB - XB1) * (CB - XB1)
IY2 = D2 * Math.pow(ESPES,3) / 12 + 4 * b * RN * ESPES + ESPES * Math.pow(B2,3) / 12 + A2 * Math.pow(ESPES,3) / 12 + ESPES * Math.pow(C2,3) / 12 + E2 * Math.pow(ESPES,3) / 12 + D2 * ESPES * Math.pow(BB - XB1,2) + U * ESPES * Math.pow(BB - RN + e * RN - XB1,2) + B2 * ESPES *  Math.pow(BB / 2 - XB1,2) + 2 * U * ESPES * Math.pow(XB1 - RN + e * RN,2) + A2 * ESPES * Math.pow(XB1,2) + C2 * ESPES * (XB1 - RN - C2 / 2) * (XB1 - RN - C2 / 2) + U * ESPES * (XB1 - CB + RN - e * RN)  * (XB1 - CB + RN - e * RN) + E2 * ESPES * (CB - XB1) * (CB - XB1);

//W1 = (BB - XB1) * DB
W1 = (BB - XB1) * DB;

//W2 = W1 + YB * BB
W2 = W1 + YB * BB;

//W3 = W2 + XB1 * AB
W3 = W2 + XB1 * AB;

//W4 = W3 + (AB - YB) * CB
W4 = W3 + (AB - YB) * CB;

//If CB < XB1 Then
//W5 = W4 - (XB1 - CB) * eb
//Else
//W5 = W4 + (CB - XB1) * eb
//End If
if(CB < XB1){
  W5 = W4 - (XB1 - CB) * eb
}else{
  W5 = W4 + (CB - XB1) * eb
}


//RO1 = BB - XB1
RO1 = BB - XB1;

//RO2 = -XB1
RO2 = -XB1;

//RO4 = CB - XB1
RO4 = CB - XB1;

//JWX = ESPES / 3 * (W1 * RO1 * DB + (W1 * RO1 + W2 * RO2) * BB + (W2 * RO2 + W3 * RO2) * AB + (W3 * RO2 + W4 * RO4) * CB + (W4 * RO4 + W5 * RO4) * eb) + ESPES / 6 * (W1 * RO1 * DB + (W1 * RO2 + W2 * RO1) * BB + (W2 * RO2 + W3 * RO2) * AB + (W3 * RO4 + W4 * RO2) * CB + (W4 * RO4 + W5 * RO4) * eb)
JWX = ESPES / 3 * (W1 * RO1 * DB + (W1 * RO1 + W2 * RO2) * BB + (W2 * RO2 + W3 * RO2) * AB + (W3 * RO2 + W4 * RO4) * CB + (W4 * RO4 + W5 * RO4) * eb) + ESPES / 6 * (W1 * RO1 * DB + (W1 * RO2 + W2 * RO1) * BB + (W2 * RO2 + W3 * RO2) * AB + (W3 * RO4 + W4 * RO2) * CB + (W4 * RO4 + W5 * RO4) * eb);

//y0 = -JWX / IY2
id('dtam_Y').value = (-JWX / IY2).toFixed(2) || 0.00;
var y0 = parseFloat(id('dtam_Y').value);

//DIST = y0
id('dtam_distancia').value = y0;
var DIST = parseFloat(id('dtam_distancia').value);

//IP = IX + IY + AREA1 * DIST ^ 2
id('ip').value = IX + IY + AREA01 * Math.pow(DIST,2);
var IP = parseFloat(id('ip').value);

//x0 = ESPES / 2
id('dtam_X').value = ESPES / 2;
var x0 = parseFloat(id('dtam_X').value);

//W1 = (BB + x0) * DB
var W1_1a = BB + x0;
W1_1 = W1_1a * DB;


//W2 = W1 + (YB - y0) * BB
var W2_2a = YB - y0;
var W2_2b = W2_2a * BB;
W2_2 = W1*1 + W2_2b*1;


//W3 = W2*1 + x0 * AB
var W3_3a = x0 * AB;
W3_3 = W2*1 + W3_3a*1;


//W4 = W3 + (AB - YB + y0) * CB
var W4_4a = AB - YB + y0;
var W4_4b = W4_4a * CB;
W4_4 = W3*1 + W4_4b*1;


//W5 = W4 + (CB + x0) * eb
var W5_5a = CB + x0;
var W5_5b = W5_5a * eb;
W5_5 = W4 + W5_5b ;


//WN0 = ESPES / (2 * AREA1) * (W1 * DB + (W1 + W2) * BB  + (W2 + W3) * AB + (W3 + W4) * CB + (W4 + W5) * eb)
var WN0_1 = 2 * AREA01;
var WN0_2 = W1_1 * DB;
var WN0_3 = W1_1 + W2_2;
var WN0_4 = W2_2 + W3_3;
var WN0_5 = W3_3 + W4_4;
var WN0_6 = W4_4 + W5_5;
var WN0_7 = WN0_3 * BB;
var WN0_8 = WN0_4 * AB;
var WN0_9 = WN0_5 * CB;
var WN0_10 = WN0_6 * eb;
var WN0_11 = WN0_2 + WN0_7  + WN0_8 + WN0_9 + WN0_10;

WN0 = ESPES / WN0_1 * WN0_11;
var WN0 = parseFloat(WN0);

//WN1 = WN0 - W1
WN1 = WN0 - W1_1;


//WN2 = WN0 - W2
WN2 = WN0*1 - W2_2*1;


//WN3 = WN0 - W3
WN3 = WN0*1 - W3_3*1;


//WN4 = WN0 - W4
WN4 = WN0*1 - W4_4*1;


//WN5 = WN0 - W5
WN5 = WN0*1 - W5_5*1;


//Cw = ESPES / 3 * ((WN0 * WN0 + WN1 * WN1 + WN0 * WN1)  * DB + (WN1 * WN1 + WN2 * WN2 + WN1 * WN2) * BB  + (WN2 * WN2 + WN3 * WN3 + WN2 * WN3) * AB + (WN3 * WN3 + WN4 * WN4 + WN3 * WN4) * CB + (WN4 * WN4 + WN5 * WN5 + WN4 * WN5) * eb)
var cw01 = WN0*1 * WN0*1;
var cw02 = WN1*1 * WN1*1;
var cw03 = WN0*1 * WN1*1;
var cw04 = WN2*1 * WN2*1;
var cw05 = WN1*1 * WN2*1;
var cw06 = WN3*1 * WN3*1;
var cw07 = WN2*1 * WN3*1;
var cw08 = WN4*1 * WN4*1;
var cw09 = WN3*1 * WN4*1;
var cw10 = WN5*1 * WN5*1;
var cw11 = WN4*1 * WN5*1;
var cw12 = cw01*1 + cw02*1 + cw03*1;
var cw13 = cw02*1 + cw04*1 + cw05*1;
var cw14 = cw04*1 + cw06*1 + cw07*1;
var cw15 = cw06*1 + cw08*1 + cw09*1;
var cw16 = cw08*1 + cw10*1 + cw11*1;
var cw17 = cw12*1  * DB*1;
var cw18 = cw13*1 * BB*1;
var cw19 = cw14*1 * AB*1;
var cw20 = cw15*1 * CB*1;
var cw21 = cw16 * eb;
var cw22 = cw17*1 + cw18*1  + cw19*1+ cw20*1 + cw21*1;

Cw  = ESPES*1 / 3*1 * cw22*1;


//Cw = Cw * 2
id('cw').value  = Cw * 2;


//x0 = 0




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