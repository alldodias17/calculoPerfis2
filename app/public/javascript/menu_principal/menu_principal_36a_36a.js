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

//RN = RDB2R + ESPES / 2
id('raio_neutro').value = (RDB2 + ESPES / 2).toFixed(2) || 0.00;
var RN = parseFloat(id('raio_neutro').value);

//ALTDB = RDB2 + ESPES
id('alturadobra').value = (RDB2 + ESPES).toFixed(2) || 0.00;
var ALTDB = parseFloat(id('alturadobra').value);

//U = RN * 1.57
var U1 = parseFloat(1.57);
id('ud').value = ((id('raio_neutro').value * 10 * 1.57) / 10).toFixed(2) || 0.00;
var U = parseFloat(id('ud').value);

//E1 = C1
var E1 = id('dtam_E').value;
id('dtam_E').value = C1;

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
id('dtam_dd').value = DB = D1 - ESPES / 2;
var DB = parseFloat(id('dtam_dd').value);

//eb = E1 - ESPES / 2
id('dtam_ee').value = E1 - ESPES / 2;
var eb = parseFloat(id('dtam_ee').value);

//FITA = D2 + 2 * B2 + A2 + C2 + E2 + 5 * U
id('largura_da').value = 2 * D2 + 2 * C2 + 2 * B2 + A2 + 6 * U;
var FITA = parseFloat(id('largura_da').value);

//AREA1 = FITA * ESPES
id('area_total').value = (FITA * ESPES).toFixed(2) || 0.00;
var AREA01 = parseFloat(id('area_total').value);

//AREAU = AREA1
id('area_util').value = id('area_total').value;

//KGM = AREA1 * 0.00785
id('d_Peso').value = (AREA01  * 0.00785).toFixed(2) || 0.00;
var KGM = parseFloat(id('d_Peso').value);

//XB = (D2 * ESPES * (2 * BB + RN + D2 / 2) + U * ESPES * (2 * BB + RN - 0.637 * RN) + C2 * ESPES * 2 * BB + U * ESPES * (2 * BB - RN + 0.637 * RN) + B2 * ESPES * 1.5 * BB + U * ESPES * (BB + RN - 0.637 * RN) + A2 * ESPES * BB + U * ESPES * (BB - RN + 0.637 * RN) + B2 * ESPES * BB / 2 + U * ESPES * (RN - 0.637 * RN)) / AREA1
id('dtam_xx').value = (D2 * ESPES * (2 * BB + RN + D2 / 2) + U * ESPES * (2 * BB + RN - 0.637 * RN) + C2 * ESPES * 2 * BB + U * ESPES * (2 * BB - RN + 0.637 * RN) + B2 * ESPES * 1.5 * BB + U * ESPES * (BB + RN - 0.637 * RN) + A2 * ESPES * BB + U * ESPES * (BB - RN + 0.637 * RN) + B2 * ESPES * BB / 2 + U * ESPES * (RN - 0.637 * RN)) / AREA01;
var XB = parseFloat(id('dtam_xx').value);

//YB = (D2 * ESPES * CB + U * ESPES * (CB - RN + 0.637  * RN) + C2 * ESPES * CB / 2 + 2 * U * ESPES * (RN - 0.637 * RN) + A2 * ESPES * AB / 2 + 2 * U * ESPES * (AB - RN + 0.637 * RN) + B2 * ESPES * AB + E2 * ESPES * (AB - RN - E2 / 2)) / AREA1
id('dtam_y').value = (D2 * ESPES * CB + U * ESPES * (CB - RN + 0.637  * RN) + C2 * ESPES * CB / 2 + 2 * U * ESPES * (RN - 0.637 * RN) + A2 * ESPES * AB / 2 + 2 * U * ESPES * (AB - RN + 0.637 * RN) + B2 * ESPES * AB + E2 * ESPES * (AB - RN - E2 / 2)) / AREA01;
var YB = parseFloat(id('dtam_y').value);

//IX = D2 * ESPES ^ 3 / 12 + 5 * 0.149 * RN * ESPES + ESPES * C2 ^ 3 / 12 + B2 * ESPES ^ 3 / 6 + ESPES * A2 ^ 3 / 12 + ESPES * E2 ^ 3 / 12 + D2 * ESPES * (YB - CB) ^ 2 + U * ESPES * (YB - CB + RN - 0.637 * RN) ^ 2 + C2 * ESPES * (YB -  CB / 2) ^ 2 + 2 * U * ESPES * (YB - RN + 0.637  * RN) ^ 2 + B2 * ESPES * YB ^ 2 + A2 * ESPES * (AB / 2 - YB) ^ 2 + 2 * U * ESPES * (AB - RN + 0.637 * RN - YB) ^ 2 + B2 * ESPES * (AB - YB) ^ 2 + E2 * ESPES * (AB - RN - E2 / 2 - YB) ^ 2
id('ixx').value = D2 * Math.pow(ESPES,3) / 12 + 5 * 0.149 * RN * ESPES + ESPES * Math.pow(C2,3) / 12 + B2 * Math.pow(ESPES,3) / 6 + ESPES * Math.pow(A2,3) / 12 + ESPES * Math.pow(E2,3) / 12 + D2 * ESPES * Math.pow(YB - CB,2) + U * ESPES * Math.pow(YB - CB + RN - 0.637 * RN,2) + C2 * ESPES * Math.pow(YB -  CB / 2,2) + 2 * U * ESPES * Math.pow(YB - RN + 0.637  * RN,2) + B2 * ESPES * Math.pow(YB,2) + A2 * ESPES * Math.pow(AB / 2 - YB,2) + 2 * U * ESPES * Math.pow(AB - RN + 0.637 * RN - YB,2) + B2 * ESPES * Math.pow(AB - YB,2) + E2 * ESPES * Math.pow(AB - RN - E2 / 2 - YB,2);
var IX = parseFloat(id('ixx').value);

//IY = ESPES * D2 ^ 3 / 12 + 5 * 0.149 * RN * ESPES + C2 * ESPES ^ 3 / 12 + ESPES * B2 ^ 3 / 6 + A2 * ESPES ^ 3 / 12 + E2 * ESPES ^ 3 / 12 + D2 * ESPES * (2 * BB + RN + D2 / 2 - XB) ^ 2 + U * ESPES * (2 * BB + RN - 0.637 * RN - XB) ^ 2  + C2 * ESPES * (2 * BB - XB) ^ 2 + U * ESPES * (2 * BB - RN + 0.637 * RN - XB) ^ 2 + B2 * ESPES * (1.5 * BB - XB) * (1.5 * BB - XB) + U * ESPES * (XB - BB - RN + 0.637 * RN) ^ 2 + A2 * ESPES * (XB - BB) ^ 2 + U * ESPES * (XB - BB + RN - 0.637 * RN) ^ 2 + B2 * ESPES * (XB - BB / 2) ^ 2 + U * ESPES * (XB - RN + 0.637 * RN) ^ 2 + E2 * ESPES * XB ^ 2
id('iyy').value = ESPES * Math.pow(D2,3) / 12 + 5 * 0.149 * RN * ESPES + C2 * Math.pow(ESPES,3) / 12 + ESPES * Math.pow(B2,3) / 6 + A2 * Math.pow(ESPES,3) / 12 + E2 * Math.pow(ESPES,3) / 12 + D2 * ESPES * Math.pow(2 * BB + RN + D2 / 2 - XB,2) + U * ESPES * Math.pow(2 * BB + RN - 0.637 * RN - XB,2)  + C2 * ESPES * Math.pow(2 * BB - XB,2) + U * ESPES * Math.pow(2 * BB - RN + 0.637 * RN - XB,2) + B2 * ESPES * (1.5 * BB - XB) * (1.5 * BB - XB) + U * ESPES * Math.pow(XB - BB - RN + 0.637 * RN,2) + A2 * ESPES * Math.pow(XB - BB,2) + U * ESPES * Math.pow(XB - BB + RN - 0.637 * RN,2) + B2 * ESPES * Math.pow(XB - BB / 2,2) + U * ESPES * Math.pow(XB - RN + 0.637 * RN,2) + E2 * ESPES * Math.pow(XB,2);
var IY = parseFloat(id('iyy').value);

//ixy = D2 * ESPES * (2 * BB + RN + D2 / 2 - XB) * (YB  - CB) + U * ESPES * (2 * BB + RN - 0.637 * RN - XB) * (YB - CB + RN - 0.637 * RN) + C2 * ESPES  * (2 * BB - XB) * (YB - CB / 2) + U * ESPES *  (2 * BB - RN + 0.637 * RN - XB) * (YB - RN + 0.637 * RN) + B2 * ESPES * YB * (1.5 * BB - XB)  + U * ESPES * (BB + RN - 0.637 * RN - XB) * (YB  - RN + 0.637 * RN) + A2 * ESPES * (YB - AB / 2)  * (BB - XB) + U * ESPES * (BB - RN + 0.637 * RN  - XB) * (YB - AB + RN - 0.637 * RN) + B2 *  ESPES * (BB / 2 - XB) * (YB - AB) + U * ESPES * (RN - 0.637 * RN - XB) * (YB - AB + RN - 0.637 * RN) + E2 * ESPES * (-XB) * (YB - AB + RN + E2 / 2)
id('lxy').value = D2 * ESPES * (2 * BB + RN + D2 / 2 - XB) * (YB  - CB) + U * ESPES * (2 * BB + RN - 0.637 * RN - XB) * (YB - CB + RN - 0.637 * RN) + C2 * ESPES  * (2 * BB - XB) * (YB - CB / 2) + U * ESPES *  (2 * BB - RN + 0.637 * RN - XB) * (YB - RN + 0.637 * RN) + B2 * ESPES * YB * (1.5 * BB - XB)  + U * ESPES * (BB + RN - 0.637 * RN - XB) * (YB  - RN + 0.637 * RN) + A2 * ESPES * (YB - AB / 2)  * (BB - XB) + U * ESPES * (BB - RN + 0.637 * RN  - XB) * (YB - AB + RN - 0.637 * RN) + B2 *  ESPES * (BB / 2 - XB) * (YB - AB) + U * ESPES * (RN - 0.637 * RN - XB) * (YB - AB + RN - 0.637 * RN) + E2 * ESPES * (-XB) * (YB - AB + RN + E2 / 2);
var ixy = parseFloat(id('lxy').value);

//AUX0 = 2 * ixy / (IX - IY)
//parametro = AUX0
//Indice = 1
//rot_trig 'Parametro, Indice
//'CALL "rot_trig" USING parametro resultado indice
//TETA = Resultado
//TETA = TETA / 2
pi = 4 * Math.atan(1);
AUX0 = 2 * ixy / (IX - IY);
parametro = AUX0;
Resultado_01 = Math.atan(parametro);
Resultado_01_1 = Resultado_01 / (pi / 180);

//IV = (IX + IY) / 2 + (((IX - IY) / 2) ^ 2 + ixy * ixy) ^ 0.5
id('lv').value = (IX + IY) / 2 + Math.pow(Math.pow((IX - IY) / 2,2) + ixy * ixy,0.5);
var IV = parseFloat(id('lv').value);

//iz = (IX + IY) / 2 - (((IX - IY) / 2) ^ 2 + ixy * ixy) ^ 0.5
id('lz').value = (IX + IY) / 2 - Math.pow(Math.pow((IX - IY) / 2,2) + ixy * ixy,0.5);
var iz = parseFloat(id('lz').value);

//WX = IX / (A1 - YB - ESPES / 2)
id('wx').value = IX / (A1 - YB - ESPES / 2);
var WX = parseFloat(id('wx').value);

//AUX0 = 2 * BB + DB - XB
//If AUX0 < XB Then
//WY = IY / (XB + ESPES / 2)
//Else
//WY = IY / AUX0
//End If
AUX0 = 2 * BB + DB - XB;
if(AUX0 < XB){
  WY = IY / (XB + ESPES / 2);
}else{
  WY = IY / AUX0;
}

//WT = FITA * ESPES ^ 2 / 3
id('wt').value =  FITA * Math.pow(ESPES,2) / 3; 
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

//iv1 = (IV / AREA1) ^ 0.5
id('iv').value = (Math.pow(IV / AREA01,0.5)).toFixed(2) || 0.00;;
var iv1 = parseFloat(id('iv').value);

//iz1 = (iz / AREA1) ^ 0.5
id('iz').value = (Math.pow(iz / AREA01,0.5)).toFixed(2) || 0.00;
var iz1 = parseFloat(id('iz').value);

//CGX = XB + ESPES / 2
id('cgy').value = XB + ESPES / 2;
var CGY = parseFloat(id('cgy').value);

//CGY = YB + ESPES / 2
id('cgx').value = A1 / 2;
var CGX = parseFloat(id('cgx').value);

//W1 = (YB - CB) * DB
W1 = (YB - CB) * DB;

//W2 = W1 + (2 * BB - XB) * CB
W2 = W1 + (2 * BB - XB) * CB;

//W3 = W2 + YB * BB
W3 = W2 + YB * BB;

//W4 = W3 + (XB - BB) * AB
W4 = W3 + (XB - BB) * AB;

//W5 = W4 - (AB - YB) * BB
W5 = W4 - (AB - YB) * BB

//W6 = W5 - XB * eb
W6 = W5 - XB * eb;

//RO1 = YB - CB
RO1 = YB - CB;

//RO4 = -(AB - YB)
RO4 = -(AB - YB);

//RO6 = -(AB - eb - YB)
RO6 = -(AB - eb - YB);

//JWY = ESPES / 3 * (W1 * RO1 * DB + (W1 * RO1 + W2 * YB) * CB + (W2 * YB + W3 * YB) * BB + (W3 * YB + W4 * RO4) * AB + (W4 * RO4 + W5 * RO4) * BB + (W5 * RO4 + W6 * RO6) * eb) + ESPES / 6 * (W1 * RO1 * DB + (W1 * YB + W2 * RO1) * CB + (W2 * YB + W3 * YB) * BB + (W3 * RO4 + W4 * YB) * AB + (W4 * RO4 + W5 * RO4) * BB + (W5 * RO6 + W6 * RO4) * eb)
JWY = ESPES / 3 * (W1 * RO1 * DB + (W1 * RO1 + W2 * YB) * CB + (W2 * YB + W3 * YB) * BB + (W3 * YB + W4 * RO4) * AB + (W4 * RO4 + W5 * RO4) * BB + (W5 * RO4 + W6 * RO6) * eb) + ESPES / 6 * (W1 * RO1 * DB + (W1 * YB + W2 * RO1) * CB + (W2 * YB + W3 * YB) * BB + (W3 * RO4 + W4 * YB) * AB + (W4 * RO4 + W5 * RO4) * BB + (W5 * RO6 + W6 * RO4) * eb);

//x0 = -JWY / IX
id('dtam_X').value = -JWY / IX;
var x0 = id('dtam_X').value;

//RO1 = 2 * BB + DB - XB
RO1 = 2 * BB + DB - XB;

//RO2 = 2 * BB - XB
RO2 = 2 * BB - XB;

//RO3 = -(XB - BB)
RO3 = -(XB - BB);

//RO5 = -XB
RO5 = -XB;

//JWX = ESPES / 3 * (W1 * RO2 * DB + (W1 * RO2 + W2 * RO2) * CB + (W2 * RO2 + W3 * RO3) * BB + (W3 * RO3 + W4 * RO3) * AB + (W4 * RO3 + W5 * RO5) * BB + (W5 * RO5 + W6 * RO5) * eb) + ESPES / 6 * (W1 * RO1 * DB + (W1 * RO2 + W2 * RO2) * CB + (W2 * RO3 + W3 * RO2) * BB + (W3 * RO3 + W4 * RO3) * AB + (W4 * RO5 + W5 * RO3) * BB + (W5 * RO5 + W6 * RO5) * eb)
JWX = ESPES / 3 * (W1 * RO2 * DB + (W1 * RO2 + W2 * RO2) * CB + (W2 * RO2 + W3 * RO3) * BB + (W3 * RO3 + W4 * RO3) * AB + (W4 * RO3 + W5 * RO5) * BB + (W5 * RO5 + W6 * RO5) * eb) + ESPES / 6 * (W1 * RO1 * DB + (W1 * RO2 + W2 * RO2) * CB + (W2 * RO3 + W3 * RO2) * BB + (W3 * RO3 + W4 * RO3) * AB + (W4 * RO5 + W5 * RO3) * BB + (W5 * RO5 + W6 * RO5) * eb);

//y0 = -JWX / IY
id('dtam_Y').value = (-JWX / IY).toFixed(2) || 0.00;
var y0 = id('dtam_Y').value;

//DIST = (x0 * x0 + y0 * y0) ^ 0.5
id('dtam_distancia').value = x0;
var DIST = parseFloat(id('dtam_distancia').value);

//IP = IX + IY + AREA1 * DIST ^ 2
id('ip').value = IX + IY + AREA01 * DIST * DIST;
var IP = parseFloat(id('ip').value);

//W1 = (YB - CB - y0) * DB
W1 = (YB - CB - y0) * DB;

//If W1 < 0 Then W1 = -W1
if(W1 < 0){
  W1 = -W1;
}

//AUX0 = YB - CB
AUX0 = YB - CB;

//If AUX0 < y0 Then W1 = -W1
if(AUX0 < y0){
  W1 = -W1;
}

//W2 = W1 + (2 * BB - XB + x0) * CB
var W2_1 = 2 * BB;
var W2_2 = W2_1*1 - XB*1 + x0*1;
var W2_3 = W2_2 * CB;
W2 = W1*1 + W2_3*1;

//W3 = W2 + (YB - y0) * BB
var W3_1 = YB - y0;
W3 = W2*1 + W3_1 * BB;

//W4 = W3 - (BB - (XB - x0)) * AB
W4 = W3 - (BB - (XB - x0)) * AB;

//W5 = W4 - (AB - YB + y0) * BB
var W5_1 = AB*1 - YB*1 + y0*1;
var W5_2 = W5_1 * BB;
W5 = W4*1 - W5_2*1;

//W6 = W5 - (XB - x0) * eb
var W6_1 = XB - x0; 
var W6_2 = W6_1 * eb;
W6 = W5*1 - W6_2*1;

//WN0 = ESPES / (2 * AREA1) * (W1 * DB + (W1 + W2) * CB + (W2 + W3) * BB + (W3 + W4) * AB + (W4 + W5) * BB + (W5 + W6) * eb)
WN0 = ESPES / (2 * AREA01) * (W1 * DB + (W1 + W2) * CB + (W2 + W3) * BB + (W3 + W4) * AB + (W4 + W5) * BB + (W5 + W6) * eb);

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

//Cw = ESPES / 3 * ((WN0 * WN0 + WN1 * WN1 + WN0 * WN1) * DB + (WN1 * WN1 + WN2 * WN2 + WN1 * WN2) * CB  + (WN2 * WN2 + WN3 * WN3 + WN2 * WN3) * BB + (WN3 * WN3 + WN4 * WN4 + WN3 * WN4) * AB + (WN4 * WN4 + WN5 * WN5 + WN4 * WN5) * BB + (WN5 * WN5 + WN6 * WN6 + WN5 * WN6) * eb)
id('cw').value = ESPES / 3 * ((WN0 * WN0 + WN1 * WN1 + WN0 * WN1) * DB + (WN1 * WN1 + WN2 * WN2 + WN1 * WN2) * CB  + (WN2 * WN2 + WN3 * WN3 + WN2 * WN3) * BB + (WN3 * WN3 + WN4 * WN4 + WN3 * WN4) * AB + (WN4 * WN4 + WN5 * WN5 + WN4 * WN5) * BB + (WN5 * WN5 + WN6 * WN6 + WN5 * WN6) * eb); 
var Cw = parseFloat(id('cw').value);

//TETA_AUX = TETA
//TETA_AUX1 = TETA - TETA_AUX
//TETA_AUX1 = TETA_AUX1 * 60
//E1 = 0
//E2 = 0
//eb = 0



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