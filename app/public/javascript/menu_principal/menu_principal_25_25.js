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

//C2 = C1 - ALTDB
var C1 = id('etam_C').value
id('dtam_c').value = id('etam_C').value - ALTDB;
var C2 = parseFloat(id('dtam_c').value);

//AB = A1 - ESPES
id('dtam_a1').value = (A1 - ESPES).toFixed(2) || 0.00;
var AB = parseFloat(id('dtam_a1').value);

//BB = B1 - ESPES
id('dtam_bbarra').value = (B1 - ESPES).toFixed(2) || 0.00;
var BB = parseFloat(id('dtam_bbarra').value);

//CB = C1 - ESPES / 2
id('dtam_ccc').value = C1 - ESPES / 2;
var CB = parseFloat(id('dtam_ccc').value);

//FITA = 2 * C2 + 2 * B2 + A2 + 4 * U
id('largura_da').value = 2 * C2*1 + 2*1 * B2*1 + A2*1 + 4 * U*1;
var FITA = parseFloat(id('largura_da').value);


//AREA1 = 2 * FITA * ESPES
id('area_total').value = (2 * FITA * ESPES).toFixed(2) || 0.00;
var AREA01 = parseFloat(id('area_total').value);

//AREAU = AREA1
id('area_util').value = id('area_total').value;

//KGM = AREA1 * 0.00785
id('d_Peso').value = (AREA01 * 0.00785).toFixed(2) || 0.00;
var KGM = id('d_Peso').value;

//XB = (2 * C2 * ESPES * (2 * BB + ESPES) + 2 * U * ESPES * (2 * BB + ESPES - RN + 0.637 * RN) + 2 * B2 * ESPES * (1.5 * BB + ESPES) + 2 * U * ESPES * (BB + ESPES + RN - 0.637 * RN) + A2 * ESPES * (BB + ESPES) + 2 * C2 * ESPES * BB + 2 * U * ESPES * (BB - RN + 0.637 * RN) + 2 * B2 * ESPES * BB / 2 + 2 * U * ESPES * (RN - 0.637 * RN)) / AREA1
var xb1 = 2 * BB + ESPES;
var xb2 = 2 * BB + ESPES - RN + e * RN;
var xb3 = i * BB + ESPES;
var xb4 = BB + ESPES + RN - e * RN;
var xb5 = BB + ESPES;
var xb6 = BB - RN + e * RN;
var xb7 = RN - e * RN;
var xb8 = 2 * C2 * ESPES * xb1;
var xb9 = 2*1 * U*1 * ESPES*1 * xb2*1;
var xb10 = 2 * B2 * ESPES * xb3;
var xb11 = 2 * U * ESPES * xb4;
var xb12 = A2 * ESPES * xb5;
var xb13 = 2 * C2 * ESPES * BB;
var xb14 = 2 * U * ESPES * xb6;
var xb15 = 2 * B2 * ESPES * BB / 2;
var xb16 = 2 * U * ESPES * xb7; 

id('dtam_xx').value = (xb8*1 + xb9*1 + xb10*1 + xb11*1 + xb12*1 + xb13*1 + xb14*1 + xb15*1 + xb16*1) / AREA01;
var XB = parseFloat(form07.dtam_xx.value);

//YB = AB / 2
form09.dtam_y.value = AB / 2;
var YB = parseFloat(form09.dtam_y.value);

//IX = ESPES * C2 ^ 3 / 3 + 8 * 0.149 * RN * ESPES + B2 * ESPES ^ 3 / 3 + ESPES * A2 ^ 3 / 6 + 4 * C2 * ESPES * (YB - RN - C2 / 2) ^ 2 + 8 * U * ESPES * (YB - RN + 0.637 * RN) ^ 2 + 4 * B2 * ESPES * YB ^ 2
form12.ixx.value = ESPES * Math.pow(C2,3) / 3 + 8 * b * RN * ESPES + B2 * Math.pow(ESPES,3) / 3 + ESPES * Math.pow(A2,3) / 6 + 4 * C2 * ESPES * Math.pow(YB - RN - C2 / 2,2) + 8 * U * ESPES * Math.pow(YB - RN + e * RN,2) + 4 * B2 * ESPES * Math.pow(YB,2);
var IX = parseFloat(form12.ixx.value);

//IY = C2 * ESPES ^ 3 / 3 + 8 * 0.149 * RN * ESPES + ESPES * B2 ^ 3 / 3 + A2 * ESPES ^ 3 / 6 + 2 * C2 * ESPES * (2 * BB + ESPES - XB) ^ 2 + 2 * U * ESPES * (2 * BB + ESPES - RN + 0.637 * RN - XB) ^ 2 + 2 * B2 * ESPES * (1.5 * BB + ESPES - XB) ^ 2 + 2 * U * ESPES * (BB + ESPES + RN - 0.637 * RN - XB) ^ 2 + A2 * ESPES * (BB + ESPES - XB) ^ 2 + 2 * C2 * ESPES * (BB - XB) ^ 2 + 2 * U * ESPES * (BB - RN + 0.637 * RN - XB)  * (BB - RN + 0.637 * RN - XB) + 2 * B2 * ESPES *  (XB - BB / 2) ^ 2 + 2 * U * ESPES * (XB - RN + 0.637 * RN) ^ 2 + A2 * ESPES * XB ^ 2
form13.iyy.value = C2 * Math.pow(ESPES,3) / 3 + 8 * c * RN * ESPES + ESPES * Math.pow(B2,3) / 3 + A2 * Math.pow(ESPES,3) / 6 + 2 * C2 * ESPES * Math.pow(2 * BB + ESPES - XB,2) + 2 * U * ESPES * Math.pow(2 * BB + ESPES - RN + e * RN - XB,2) + 2 * B2 * ESPES * Math.pow(i * BB + ESPES - XB,2) + 2 * U * ESPES * Math.pow(BB + ESPES + RN - e * RN - XB,2) + A2 * ESPES * Math.pow(BB + ESPES - XB,2) + 2 * C2 * ESPES * Math.pow(BB - XB,2) + 2 * U * ESPES * (BB - RN + e * RN - XB)  * (BB - RN + e * RN - XB) + 2 * B2 * ESPES *  Math.pow(XB - BB / 2,2) + 2 * U * ESPES * Math.pow(XB - RN + e * RN,2) + A2 * ESPES * Math.pow(XB,2); 
var IY = parseFloat(form13.iyy.value);

//CGX = XB + ESPES / 2
form14.cgx.value = (XB + ESPES / 2).toFixed(2) || 0.00;
var CGX = parseFloat(form14.cgx.value);

//CGY = A1 / 2
form15.cgy.value = A1 / 2;
var CGY = parseFloat(form15.cgy.value);

//WX = IX / CGY
form18.wx.value = (IX / CGY).toFixed(2);
var WX = parseFloat(form18.wx.value);


//WY = IY / (2 * B1 - CGX)
form13.wy.value = IY / (2 * B1 - CGX);
var WY = parseFloat(form13.wy.value);

//WT = 2 * FITA * ESPES ^ 2 / 3
form14.wt.value =  2 * FITA * Math.pow(ESPES,2) / 3;
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

//EME = BB * ESPES / (12 * IX) * (6 * CB * AB ^ 2 + 3 * BB * AB ^ 2 - 8 * CB ^ 3)
form04.dtam_m.value = BB * ESPES / (12 * IX) * (6 * CB * Math.pow(AB,2) + 3 * BB * Math.pow(AB,2) - 8 * Math.pow(CB,3));
var EME = form04.dtam_m.value;

//EME1 = BB + ESPES - EME
EME1 = BB + ESPES - EME;

//EME2 = BB / 2
EME2 = BB / 2;

//X = (EME1 - EME2) / 2 + EME2
X = (EME1 - EME2) / 2 + EME2;

//x0 = XB - X
form05.dtam_X.value = XB*1 - X*1;
var x0 = parseFloat(form05.dtam_X.value);

//DIST = x0
form05.dtam_distancia.value = x0;
var DIST = parseFloat(form05.dtam_distancia.value);

//IP = IX + IY + AREA1 * DIST ^ 2
form16.ip.value = IX + IY + AREA01 * DIST * DIST;
var IP = parseFloat(form16.ip.value);

//W1 = CB * (2 * BB + ESPES + x0 - XB)
W1 = CB * (2 * BB + ESPES + x0 - XB);


//W2 = W1 + BB * YB
W2 = W1 + BB * YB;

//W3 = W2 - (BB + ESPES - XB + x0) * AB
W3 = W2 - (BB + ESPES - XB + x0) * AB;

//W4 = W3 + BB * YB
W4 = W3 + BB * YB;

//W5 = W4 + W1
W5 = W4 + W1;

//WN0 = ESPES / (2 * AREA1) * (W1 * CB + (W1 + W2) * BB + (W2 + W3) * AB + (W3 + W4) * BB + (W4 + W5) * CB)
WN0 = ESPES / (2 * AREA01) * (W1 * CB + (W1 + W2) * BB + (W2 + W3) * AB + (W3 + W4) * BB + (W4 + W5) * CB);

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

//Cw = ESPES / 3 * ((WN0 * WN0 + WN1 * WN1 + WN0 * WN1)  * CB + (WN1 * WN1 + WN2 * WN2 + WN1 * WN2) * BB + (WN2 * WN2 + WN3 * WN3 + WN2 * WN3) * AB + (WN3 * WN3 + WN4 * WN4 + WN3 * WN4) * BB + (WN4 * WN4 + WN5 * WN5 + WN4 * WN5) * CB)
form16.cw.value = ESPES / 3 * ((WN0*1 * WN0*1 + WN1*1 * WN1*1 + WN0*1 * WN1*1)  * CB + (WN1*1 * WN1*1 + WN2*1 * WN2*1 + WN1*1 * WN2*1) * BB + (WN2*1 * WN2*1 + WN3*1 * WN3*1 + WN2*1 * WN3*1) * AB + (WN3*1 * WN3*1 + WN4*1 * WN4*1 + WN3*1 * WN4*1) * BB + (WN4*1 * WN4*1 + WN5*1 * WN5*1 + WN4*1 * WN5*1) * CB);
var Cw = form16.cw.value;




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
      cgy.value = cgy.value.replace(re_cgy, "$1$2.00");
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
    var re_dtam_D = /^([0-9]{0,4})([0-9]{0,4})$/;
    if (re_dtam_D.test(dtam_D.value)) {
      dtam_D.value = dtam_D.value.replace(re_dtam_D, "$1$20.00");
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
      dtam_d.value = dtam_d.value.replace(re_dtam_d, "$1$20.00");
    }
    var re_dtam_e = /^([0-9]{0,4})([0-9]{0,4})$/;
    if (re_dtam_e.test(dtam_e.value)) {
      dtam_e.value = dtam_e.value.replace(re_dtam_e, "$1$20.00");
    }
    var re_dtam_dd = /^([0-9]{0,4})([0-9]{0,4})$/;
    if (re_dtam_dd.test(dtam_dd.value)) {
      dtam_dd.value = dtam_dd.value.replace(re_dtam_dd, "$1$20.00");
    }
    var re_dtam_ee = /^([0-9]{0,4})([0-9]{0,4})$/;
    if (re_dtam_ee.test(dtam_ee.value)) {
      dtam_ee.value = dtam_ee.value.replace(re_dtam_ee, "$1$20.00");
    }
    var re_u2 = /^([0-9]{0,4})([0-9]{0,4})$/;
    if (re_u2.test(u2.value)) {
      u2.value = u2.value.replace(re_u2, "$1$20.00");
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
      dtam_y.value = dtam_y.value.replace(re_dtam_y, "$1$2.00");
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