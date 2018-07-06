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
var ESPES = parseFloat(form06.espessura_d.value);
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

//E2 = E1 - ALTDB
var E1 = form08.dtam_E.value;
form04.dtam_e.value = E1 - ALTDB;
var E2 = parseFloat(form04.dtam_e.value);

//If C2 < 0 Then C2 = C2 * -1
if(C2 < 0){
    C2 = C2 * (-1);  
}

//If D2 < 0 Then D2 = D2 * -1
if(D2 < 0){
    D2 = D2 * (-1);   
}

//If E2 < 0 Then E2 = E2 * -1
if(E2 < 0){
    E2 = E2 * (-1);
}

//AB = A1 - ESPES
form05.dtam_a1.value = (A1 - ESPES).toFixed(2) || 0.00;
var AB = parseFloat(form05.dtam_a1.value);

//BB = B1 - ESPES
form06.dtam_bbarra.value = (B1 - ESPES).toFixed(2) || 0.00;
var BB = parseFloat(form06.dtam_bbarra.value);

//CB = C1 - ESPES
form07.dtam_ccc.value = C1 - ESPES ;
var CB = parseFloat(form07.dtam_ccc.value);

//DB = D1 - ESPES / 2
form07.dtam_dd.value = DB = D1 - ESPES / 2;
var DB = parseFloat(form07.dtam_dd.value);

//eb = E1 - ESPES / 2
form08.dtam_ee.value = E1 - ESPES / 2;
var eb = parseFloat(form08.dtam_ee.value);

//FITA = 5 * U + D2 + C2 + 2 * B2 + A2 + E2
form10.largura_da.value = 5 * U + D2 + C2 + 2 * B2 + A2 + E2;
var FITA = parseFloat(form10.largura_da.value);

//AREA1 = FITA * ESPES
form19.area_total.value = (FITA * ESPES).toFixed(2) || 0.00;
var AREA01 = parseFloat(form19.area_total.value);

//AREAU = AREA1
id('area_util').value = id('area_total').value;

//KGM = AREA1 * 0.00785
form04.d_Peso.value = (AREA01  * 0.00785).toFixed(2) || 0.00;
var KGM = parseFloat(form04.d_Peso.value);

//XB = (D2 * ESPES * (BB + RN + D2 / 2) + U * ESPES * (BB + RN - 0.637 * RN) + ESPES * (C2 + E2) * BB + 2 * U * ESPES * (BB - RN + 0.637 * RN) + 2 * B2 * ESPES * BB / 2 + 2 * U * ESPES * (RN - 0.637 * RN)) / AREA1
form07.dtam_xx.value = (D2 * ESPES * (BB + RN + D2 / 2) + U * ESPES * (BB + RN - 0.637 * RN) + ESPES * (C2 + E2) * BB + 2 * U * ESPES * (BB - RN + 0.637 * RN) + 2 * B2 * ESPES * BB / 2 + 2 * U * ESPES * (RN - 0.637 * RN)) / AREA01;
var XB = parseFloat(form07.dtam_xx.value);

//YB = (D2 * ESPES * CB + U * ESPES * (CB - RN + 0.637 * RN) + C2 * ESPES * CB / 2 + 2 * U * ESPES * (RN - 0.637 * RN) + A2 * ESPES * AB / 2 + 2 * U * ESPES * (AB - RN + 0.637 * RN) + B2 * ESPES * AB + E2 * ESPES * (AB - RN - E2 / 2)) / AREA1
form09.dtam_y.value = D2 * ESPES * CB + U * ESPES * (CB - RN + 0.637 * RN) + C2 * ESPES * CB / 2 + 2 * U * ESPES * (RN - 0.637 * RN) + A2 * ESPES * AB / 2 + 2 * U * ESPES * (AB - RN + 0.637 * RN) + B2 * ESPES * AB + E2 * ESPES * (AB - RN - E2 / 2) / AREA01;
var YB = parseFloat(form09.dtam_y.value);

//IX = 5 * 0.149 * RN * ESPES + D2 * ESPES ^ 3 / 12 + ESPES * C2 ^ 3 / 12 + B2 * ESPES ^ 3 / 6 + ESPES * A2 ^ 3 / 12 + ESPES * E2 ^ 3 / 12 + D2 * ESPES * (YB - CB) ^ 2 + U * ESPES * (YB - CB + RN - 0.637 * RN) ^ 2 + C2 * ESPES * (YB - CB / 2) ^ 2 + 2 * U * ESPES * (YB - RN + 0.637 * RN) ^ 2 + B2 * ESPES * YB ^ 2 + A2 * ESPES * (AB / 2 - YB) ^ 2 + 2 * U * ESPES * (AB - RN + 0.637 * RN - YB) ^ 2 + B2 * ESPES * (AB - YB) ^ 2 + E2 * ESPES * (AB - YB - E2 / 2 - RN) ^ 2
var ix01 = Math.pow(ESPES,3);
var ix02 = Math.pow(C2,3);
var ix03 = Math.pow(A2,3);
var ix04 = Math.pow(E2,3);
var ix05 = YB - CB;
var ix06 = Math.pow(ix05,2);
var ix07 = e * RN;
var ix08 = CB / 2;
var ix09 = Math.pow(YB,2);
var ix10 = AB / 2;
var ix11 = AB - YB;
var ix12 = Math.pow(ix11,2);
var ix13 = E2 / 2;
var ix14 = YB - CB + RN - ix07;
var ix15 = YB - ix08;
var ix16 = YB - RN + ix07;
var ix17 = AB - YB - ix13 - RN;
var ix18 = Math.pow(ix14,2);
var ix19 = Math.pow(ix15,2);
var ix20 = YB - RN + ix07;
var ix21 = Math.pow(ix20,2);
var ix22 = ix10 - YB;
var ix23 = Math.pow(ix22,2);
var ix24 = Math.pow(ix16,2);
var ix25 = Math.pow(ix17,2);
var ix26 = 5 * b * RN * ESPES;
var ix27 = D2 * ix01 / 12;
var ix28 = ESPES * ix02 / 12;
var ix29 = B2 * ix01 / 6;
var ix30 = ESPES * ix03 / 12;
var ix31 = ESPES * ix04 / 12;
var ix32 = D2 * ESPES * ix06;
var ix33 = U * ESPES * ix18;
var ix34 = C2 * ESPES * ix19;
var ix35 = 2 * U * ESPES * ix21;
var ix36 = B2 * ESPES * ix09;
var ix37 = A2 * ESPES * ix23;
var ix38 = 2 * U * ESPES * ix24;
var ix39 = B2 * ESPES * ix12;
var ix40 = E2 * ESPES * ix25;

form12.ixx.value = ix26*1 + ix27*1 + ix28*1 + ix29*1 + ix30*1 + ix31*1 + ix32*1 + ix33*1 + ix34*1 + ix35*1 + ix36*1 + ix37*1 + ix38*1 + ix39*1 + ix40;
var IX = parseFloat(form12.ixx.value);

//IY = 5 * 0.149 * RN * ESPES + ESPES * D2 ^ 3 / 12 + C2 * ESPES ^ 3 / 12 + ESPES * B2 ^ 3 / 6 + A2 * ESPES ^ 3 / 12 + E2 * ESPES ^ 3 / 12 + D2 * ESPES * (BB + RN + D2 / 2 - XB) ^ 2 + U * ESPES * (BB + RN - 0.637 * RN - XB) ^ 2 + C2 * ESPES * (BB - XB) ^ 2 + 2 * U * ESPES * (BB - RN + 0.637 * RN - XB) ^ 2 + 2 * B2 * ESPES * (BB / 2 - XB) * (BB / 2 - XB) + 2 * U * ESPES * (XB - RN + 0.637 * RN) ^ 2 + A2 * ESPES * XB ^ 2 + E2 * ESPES * (BB - XB) ^ 2
form13.iyy.value = 5 * b * RN * ESPES + ESPES * Math.pow(D2,3) / 12 + C2 * Math.pow(ESPES,3) / 12 + ESPES * Math.pow(B2,3) / 6 + A2 * Math.pow(ESPES,3) / 12 + E2 * Math.pow(ESPES,3) / 12 + D2 * ESPES * Math.pow(BB + RN + D2 / 2 - XB,2) + U * ESPES * Math.pow(BB + RN - 0.637 * RN - XB,2) + C2 * ESPES * Math.pow(BB - XB,2) + 2 * U * ESPES * Math.pow(BB - RN + 0.637 * RN - XB,2) + 2 * B2 * ESPES * (BB / 2 - XB) * (BB / 2 - XB) + 2 * U * ESPES * Math.pow(XB - RN + 0.637 * RN,2) + A2 * ESPES * Math.pow(XB,2) + E2 * ESPES * Math.pow(BB - XB,2);
var IY = parseFloat(form13.iyy.value);

//ixy = D2 * ESPES * (BB + RN + D2 / 2 - XB) * (YB - CB) + U * ESPES * (BB + RN - 0.637 * RN - XB) * (YB - CB + RN - 0.637 * RN) + C2 * ESPES * (BB - XB) * (YB - CB / 2) + U * ESPES * (BB - RN + 0.637 * RN - XB) * (YB - RN + 0.637 * RN) + B2 * ESPES * (BB / 2 - XB) * YB - U * ESPES * (XB - RN + 0.637 * RN) * (YB - RN + 0.637 * RN)  + A2 * ESPES * XB * (AB / 2 - YB) + U * ESPES * (XB - RN + 0.637 * RN) * (AB - RN + 0.637 * RN  - YB) + B2 * ESPES * (BB / 2 - XB) * (YB - AB)  - U * ESPES * (BB - RN + 0.637 * RN - XB) * (AB - RN + 0.637 * RN - YB) + E2 * ESPES * (BB - XB) * (-AB + RN + E2 / 2 + YB)
form17.lxy.value = D2 * ESPES * (BB + RN + D2 / 2 - XB) * (YB - CB) + U * ESPES * (BB + RN - 0.637 * RN - XB) * (YB - CB + RN - 0.637 * RN) + C2 * ESPES * (BB - XB) * (YB - CB / 2) + U * ESPES * (BB - RN + 0.637 * RN - XB) * (YB - RN + 0.637 * RN) + B2 * ESPES * (BB / 2 - XB) * YB - U * ESPES * (XB - RN + 0.637 * RN) * (YB - RN + 0.637 * RN)  + A2 * ESPES * XB * (AB / 2 - YB) + U * ESPES * (XB - RN + 0.637 * RN) * (AB - RN + 0.637 * RN  - YB) + B2 * ESPES * (BB / 2 - XB) * (YB - AB)  - U * ESPES * (BB - RN + 0.637 * RN - XB) * (AB - RN + 0.637 * RN - YB) + E2 * ESPES * (BB - XB) * (-AB + RN + E2 / 2 + YB);
var ixy = parseFloat(form17.lxy.value);

//AUX0 = 2 * ixy / (IX - IY)
//parametro = AUX0
//Indice = 1
//rot_trig 'Parametro, Indice
//'CALL "rot_trig" USING parametro resultado indice
//TETA = Resultado
//TETA = TETA / 2
AUX0 = 2 * ixy / (IX - IY);
parametro = AUX0;
pi = 4 * Math.atan(1);
Resultado_01 = Math.atan(parametro);
Resultado_01_1 = Resultado_01 / (pi / 180);
TETA_01 = Resultado_01_1;
TETA = TETA_01 / 2;


//IV = (IX + IY) / 2 + (((IX - IY) / 2) ^ 2 + ixy * ixy) ^ 0.5
form15.lv.value = (IX + IY) / 2 + Math.pow(Math.pow((IX - IY) / 2,2) + ixy * ixy,0.5);
var IV = parseFloat(form15.lv.value);

//iz = (IX + IY) / 2 - (((IX - IY) / 2) ^ 2 + ixy * ixy) ^ 0.5
form14.lz.value = (IX + IY) / 2 - Math.pow(Math.pow((IX - IY) / 2,2) + ixy * ixy,0.5);
var iz = parseFloat(form14.lz.value);

//CGX = XB + ESPES / 2
form14.cgx.value = XB + ESPES / 2;
var CGX = parseFloat(form14.cgx.value);

//CGY = YB + ESPES / 2
form15.cgy.value = YB + ESPES / 2;
var CGY = parseFloat(form15.cgy.value);

//WX = IX / (A1 - CGY)
form18.wx.value = IX / (A1 - CGY);
var WX = parseFloat(form18.wx.value);

//WY = IY / (BB + ESPES / 2 + DB - CGX)
form13.wy.value = IY / (BB + ESPES / 2 + DB - CGX);
var WY = parseFloat(form13.wy.value);

//WT = FITA * ESPES ^ 2 / 3
form14.wt.value =  FITA * Math.pow(ESPES,2) / 3; 
var WT = parseFloat(form14.wt.value);

//J1 = WT * ESPES
form12.j.value = WT * ESPES;
var J1 = parseFloat(form12.j.value);

//IX1 = (IX / AREA1) ^ 0.5
form16.ixis.value = Math.pow(IX / AREA01,0.5).toFixed(2) || 0.00;
var IX1 = parseFloat(form16.ixis.value);

//IY1 = (IY / AREA1) ^ 0.5
form17.iy.value = Math.pow(IY / AREA01,0.5);
var IY1 = parseFloat(form17.iy.value);

//iv1 = (IV / AREA1) ^ 0.5
form19.iv.value = (Math.pow(IV / AREA01,0.5)).toFixed(2) || 0.00;;
var iv1 = parseFloat(form19.iv.value);

//iz1 = (iz / AREA1) ^ 0.5
form18.iz.value = (Math.pow(iz / AREA01,0.5)).toFixed(2) || 0.00;
var iz1 = parseFloat(form18.iz.value);


//W1 = (YB - CB) * DB
W1 = (YB - CB) * DB;

//W2 = W1 + (BB - XB) * CB
W2 = W1 + (BB - XB) * CB;

//W3 = W2 + BB * YB
W3 = W2 + BB * YB;

//W4 = W3 + AB * XB
W4 = W3 + AB * XB;

//W5 = W4 + BB * (AB - YB)
W5 = W4 + BB * (AB - YB);

//W6 = W5 + eb * (BB - XB)
W6 = W5 + eb * (BB - XB);

//RO1 = YB - CB
RO1 = YB - CB;

//RO4 = -(AB - YB)
RO4 = -(AB - YB);

//RO6 = -(AB - eb - YB)
RO6 = -(AB - eb - YB);

//JWY = ESPES / 3 * (W1 * RO1 * DB + (W1 * RO1 + W2 * YB) * CB + (W2 * YB + W3 * YB) * BB + (W3 * YB + W4 * RO4) * AB + (W4 * RO4 + W5 * RO4) * BB + (W5 * RO4 + W6 * RO6) * eb) + ESPES / 6 * (W1 * RO1 * DB + (W1 * YB + W2 * RO1) * CB + (W2 * YB + W3 * YB) * BB + (W3 * RO4 + W4 * YB) * AB + (W4 * RO4 + W5 * RO4) * BB + (W5 * RO6 + W6 * RO4) * eb)
JWY = ESPES / 3 * (W1 * RO1 * DB + (W1 * RO1 + W2 * YB) * CB + (W2 * YB + W3 * YB) * BB + (W3 * YB + W4 * RO4) * AB + (W4 * RO4 + W5 * RO4) * BB + (W5 * RO4 + W6 * RO6) * eb) + ESPES / 6 * (W1 * RO1 * DB + (W1 * YB + W2 * RO1) * CB + (W2 * YB + W3 * YB) * BB + (W3 * RO4 + W4 * YB) * AB + (W4 * RO4 + W5 * RO4) * BB + (W5 * RO6 + W6 * RO4) * eb);

//x0 = -JWY / IX
form05.dtam_X.value = -JWY / IX;
var x0 = form05.dtam_X.value;

//RO1 = BB + RN + D2 - XB
RO1 = BB + RN + D2 - XB;

//RO2 = BB - XB
RO2 = BB - XB;

//RO3 = -XB
RO3 = -XB;

//JWX = ESPES / 3 * (W1 * RO2 * DB + (W1 * RO2 + W2 * RO2) * CB + (W2 * RO2 + W3 * RO3) * BB + (W3 * RO3 + W4 * RO3) * AB + (W4 * RO3 + W5 * RO2) * BB + (W5 * RO2 + W6 * RO2) * eb) + ESPES / 6 * (W1 * RO1 * DB + (W1 * RO2 + W2 * RO2) * CB + (W2 * RO3 + W3 * RO2) * BB + (W3 * RO3 + W4 * RO3) * AB + (W4 * RO2 + W5 * RO3) * BB + (W5 * RO2 + W6 * RO2) * eb)
JWX = ESPES / 3 * (W1 * RO2 * DB + (W1 * RO2 + W2 * RO2) * CB + (W2 * RO2 + W3 * RO3) * BB + (W3 * RO3 + W4 * RO3) * AB + (W4 * RO3 + W5 * RO2) * BB + (W5 * RO2 + W6 * RO2) * eb) + ESPES / 6 * (W1 * RO1 * DB + (W1 * RO2 + W2 * RO2) * CB + (W2 * RO3 + W3 * RO2) * BB + (W3 * RO3 + W4 * RO3) * AB + (W4 * RO2 + W5 * RO3) * BB + (W5 * RO2 + W6 * RO2) * eb);

//y0 = -JWX / IY
form06.dtam_Y.value = (-JWX / IY).toFixed(2) || 0.00;
var y0 = form06.dtam_Y.value;

//DIST = (x0 * x0 + y0 * y0) ^ 0.5
form05.dtam_distancia.value = (Math.pow(x0 * x0 + y0 * y0,0.5)).toFixed(2) || 0.00;
var DIST = parseFloat(form05.dtam_distancia.value);

//IP = IX + IY + AREA1 * DIST ^ 2
form16.ip.value = IX + IY + AREA01 * DIST * DIST;
var IP = parseFloat(form16.ip.value);

//W1 = (YB - y0 - CB) * DB
W1 = (YB - y0 - CB) * DB;

//If W1 < 0 Then W1 = -W1
if(W1 < 0){
    W1 = (-W1);
}

//AUX0 = YB - CB
AUX0 = YB - CB;

//If AUX0 < y0 Then W1 = -W1
if(AUX0 < y0){
    W1 = (-W1)
}


//W2 = W1 + (BB - XB + x0) * CB
W2 = W1 + (BB - XB + x0) * CB;

//W3 = W2 + (YB - y0) * BB
W3 = W2 + (YB - y0) * BB;

//W4 = XB - x0
W4 = XB - x0

//If W4 < 0 Then W4 = -W4
if(W4 < 0){
    W4 = (-W4);
}

//W4 = W3 - W4 * AB
W4 = W3 - W4 * AB;

//W5 = W4 + (AB - YB + y0) * BB
W5 = W4 + (AB - YB + y0) * BB;

//W6 = W5 + (BB - XB + x0) * eb
W6 = W5 + (BB - XB + x0) * eb;

//WN0 = ESPES / (2 * AREA1) * (W1 * DB + (W1 + W2) * CB  + (W2 + W3) * BB + (W3 + W4) * AB + (W4 + W5) * BB + (W5 + W6) * eb)
WN0 = ESPES / (2 * AREA01) * (W1 * DB + (W1 + W2) * CB  + (W2 + W3) * BB + (W3 + W4) * AB + (W4 + W5) * BB + (W5 + W6) * eb);

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

//Cw = ESPES / 3 * ((WN0 * WN0 + WN1 * WN1 + WN0 * WN1) * DB + (WN1 * WN1 + WN2 * WN2 + WN1 * WN2) * CB + (WN2 * WN2 + WN3 * WN3 + WN2 * WN3) * BB + (WN3 * WN3 + WN4 * WN4 + WN3 * WN4) * AB + (WN4 * WN4 + WN5 * WN5 + WN4 * WN5) * BB + (WN5 * WN5 + WN6 * WN6 + WN5 * WN6) * eb)
form16.cw.value = ESPES / 3 * ((WN0 * WN0 + WN1 * WN1 + WN0 * WN1) * DB + (WN1 * WN1 + WN2 * WN2 + WN1 * WN2) * CB + (WN2 * WN2 + WN3 * WN3 + WN2 * WN3) * BB + (WN3 * WN3 + WN4 * WN4 + WN3 * WN4) * AB + (WN4 * WN4 + WN5 * WN5 + WN4 * WN5) * BB + (WN5 * WN5 + WN6 * WN6 + WN5 * WN6) * eb);
var Cw = parseFloat(form16.cw.value);

//TETA_AUX = TETA
TETA_AUX = TETA;
//TETA_AUX1 = TETA - TETA_AUX
TETA_AUX1 = TETA - TETA_AUX;

//TETA_AUX1 = TETA_AUX1 * 60
TETA_AUX1 = TETA_AUX1 * 60;




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