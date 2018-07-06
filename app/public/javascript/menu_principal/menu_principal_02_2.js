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
  id('dtam_A').value = id('etam_A').value;
  id('dtam_B').value = id('etam_B').value;
  id('dtam_C').value = id('etam_C').value;
  id('dtam_D').value = id('etam_D').value;
  id('dtam_E').value = id('etam_E').value;
  id('espessura_d').value = id('espessura_e').value;
var A1 = form04.dtam_A.value;
var B1 = form05.dtam_B.value;
var C1 = form06.dtam_C.value;
var E1 = form08.dtam_E.value;
var A2 = form09.dtam_a.value; 
var B2 = form09.dtam_b.value; 
var C2 = form10.dtam_c.value; 
var D2 = form11.dtam_d.value; 
var E2 = form04.dtam_e.value;
var AB = form05.dtam_a1.value; 
var BB = form06.dtam_bbarra.value;
var CB = form07.dtam_D.value;
var DB = form07.dtam_dd.value;
var EB = form08.dtam_ee.value;
var U2 = form10.u2.value;
var U3 = form11.dtam_d.value;
var xa = form05.dtam_X.value; 
var ya = form06.dtam_Y.value; 
var y = form09.dtam_y.value;
var U = form10.ud.value;
var KGM = form04.d_Peso.value;
var SCCG = form05.dtam_distancia.value;
var ip = form16.ip.value;
var ESPES = form06.espessura_d.value;
var RDB1 = form03.raioe.value;
var RDB2 = form07.raiod.value; 
var RN = form08.raio_neutro.value;
var ALTDB = form10.ud.value;
var FITA = form10.largura_da.value;
var Wz = form12.wz.value;
var wy = form13.wy.value;
var Wt = form14.wt.value;
var iz1 = form18.iz.value;
var iv1 = form19.iv.value;
var J1 = form12.j.value;
var I1 = form13.iii.value;
var BETA = form17.bbb.value;
var TETA = form18.zer0.value; 
var AREA1 = form19.area_total.value;
var AREAU = form20.area_util.value;
var a = parseFloat(0.0417);
var b = parseFloat(0.637);
var c = parseFloat(0.149);
var d = Math.pow(A2,3);
var e = A2 / 2;
var g = Math.pow(e*1 + RN*1,2);
var h = Math.pow((A2 / 2 + 0.637*1 * RN*1),2);
var f = Math.pow(RN,3);
var i = parseFloat(0.001);
var j = parseFloat(7.85);
var l = parseFloat(0.363);
var m = B2 / 2 + RN*1;
var o = Math.pow(m,2);
var p = parseFloat(0.0833);
var q = Math.pow(B2,3);
var r = parseFloat(0.356);
var s = Math.pow(B2 / 2 + RN*1,2);
var t = Math.pow(RN,3);
var dtam_X = form05.dtam_X.value;
var z = Math.pow(AB,2);
var z1 = Math.pow(BB,3);
var z2 = Math.pow(AB,3);
var z3 =  Math.pow(form05.dtam_X.value,3);
var XB = form07.dtam_xx.value;
var EME = form04.dtam_m.value;
var IX = form12.ixx.value;
//RDB2 = RDB1 * ESPES
form07.raiod.value = RDB1 * ESPES;
//RN = RDB2 + ESPES / 2
form08.raio_neutro.value = (form07.raiod.value * 1) + (form06.espessura_d.value * 1 / 2);
//ALTDB = RDB2 + ESPES
form09.alturadobra.value = (form07.raiod.value * 1) + (form06.espessura_d.value * 1);
//U = RN * 1.57
form10.ud.value = (form08.raio_neutro.value * 10 * 1.57) / 10;
//A2 = A1 - (2 * RN + ESPES)
form09.dtam_a.value = A1 - (2 * form08.raio_neutro.value*1 + ESPES*1 );
//B2 = B1 - (2 * RN + ESPES)
form09.dtam_b.value = (B1 - (2 * form08.raio_neutro.value*1 + ESPES*1 ) || 0);
//C2 = C1 - (RN + ESPES / 2)
form10.dtam_c.value = C1 - (form08.raio_neutro.value*1 + ESPES*1 / 2)
//AB = A1 - ESPES
form05.dtam_a1.value = A1 - form06.espessura_d.value;
//BB = B1 - ESPES
form06.dtam_bbarra.value = B1 - form06.espessura_d.value;
//CB = C1 - ESPES / 2
form07.dtam_D.value = C1 - form06.espessura_d.value / 2;
//CGY = A1 / 2
form15.cgy.value = A1 / 2;
//IX = 2 * ESPES * (0.0417 * A2 ^ 3 + B2 * (A2 / 2 + RN) ^ 2 + 2 * U * (A2 / 2 + 0.637 * RN) ^ 2 + 2 * 0.149 * RN ^ 3 + (0.0833 * C2 ^ 3 + C2 / 4 * (A2 - C2) ^ 2))
var x1 = parseFloat(0.0417);
var x2 = parseFloat(0.149);
var x3 = parseFloat(0.637);
var x4 = parseFloat(0.0833);
var x5 = 2 * form06.espessura_d.value;
var x6 = Math.pow(parseFloat(form09.dtam_a.value), 3);
var x7 = Math.pow(parseFloat(form09.dtam_a.value) / 2 + parseFloat(form08.raio_neutro.value), 2);
var x8 = Math.pow(parseFloat(form09.dtam_a.value) / 2 + x3 * form08.raio_neutro.value,2);
var x9 = Math.pow(parseFloat(form08.raio_neutro.value), 3);
var x10 = Math.pow(parseFloat(form10.dtam_c.value), 3);
var x11 = Math.pow(parseFloat(form09.dtam_a.value) - parseFloat(form10.dtam_c.value), 2);
var x12 = (x1 * x6) + (form09.dtam_b.value * x7) + (2 * form10.ud.value * x8) + (2 * x2 * x9) + (x4 * x10) + (form10.dtam_c.value / 4 * x11);
form12.ixx.value = (x5 * x12).toFixed(2);
//WX = IX / CGY
form18.wx.value = (form12.ixx.value*1 / form15.cgy.value*1 ).toFixed(2);
//FITA = 2 * C2 + 2 * B2 + A2 + 4 * U
form10.largura_da.value = (2 * parseFloat(form10.dtam_c.value) + 2 * parseFloat(form09.dtam_b.value) + parseFloat(form09.dtam_a.value) + 4 * parseFloat(form10.ud.value)).toFixed(2);
//AREA1 = FITA * ESPES
form19.area_total.value = (form10.largura_da.value * form06.espessura_d.value).toFixed(2);
//KGM = AREA1 * 0.001 * 7.85
//var area01 = parseFloat(0.001);
//var area02 = parseFloat(7.85);
form04.d_Peso.value = (form19.area_total.value * parseFloat(0.001) * parseFloat(7.85)).toFixed(2);
//XB = 2 * ESPES / AREA1 * (B2 * (B2 / 2 + RN) + U * 0.363 * RN + U * (B2 + 1.637 * RN) + C2 *(B2 + 2 * RN))
form07.dtam_xx.value  = (2 * ESPES*1 / form19.area_total.value*1 * (form09.dtam_b.value*1 * (form09.dtam_b.value*1 / 2 + form08.raio_neutro.value*1) + form10.ud.value*1 * parseFloat(0.363)*1 * form08.raio_neutro.value*1 + form10.ud.value*1 * (form09.dtam_b.value*1 + parseFloat(1.637)*1 * form08.raio_neutro.value*1) + form10.dtam_c.value*1 * (form09.dtam_b.value*1 + 2 * form08.raio_neutro.value*1))).toFixed(2);
//IY = 2 * ESPES * (B2 * (B2 / 2 + RN) ^ 2 + 0.0833 * B2 ^ 3 + 0.356 * RN ^ 3 + C2 * (B2 + 2 * RN) ^ 2 + U * (B2 + 1.637 * RN) ^ 2 + 0.149 * RN ^ 3) - AREA1 * XB ^ 2
form13.iyy.value = (2 * form06.espessura_d.value*1 * (form09.dtam_b.value*1 * Math.pow(form09.dtam_b.value*1 / 2 + form08.raio_neutro.value*1,2) + parseFloat(0.0833)*1 * Math.pow(form09.dtam_b.value,3)*1 + parseFloat(0.356)*1 * Math.pow(form08.raio_neutro.value,3) + form10.dtam_c.value*1 * Math.pow(form09.dtam_b.value*1 + 2 * form08.raio_neutro.value,2) + form10.ud.value*1 * Math.pow(form09.dtam_b.value*1 + parseFloat(1.637) * form08.raio_neutro.value,2) + parseFloat(0.149) * Math.pow(form08.raio_neutro.value,3)) - form19.area_total.value*1 * Math.pow(form07.dtam_xx.value,2)).toFixed(2);

//CGX = XB + ESPES / 2
form14.cgx.value = form07.dtam_xx.value*1 + ESPES / 2;

//WY = IY / (B1 - CGX)
form13.wy.value = (form13.iyy.value*1 / (parseFloat(form05.dtam_B.value) - parseFloat(form14.cgx.value))).toFixed(2);
//WT = FITA * (ESPES ^ 2) / 3
form14.wt.value = (form10.largura_da.value * Math.pow(ESPES,2) / 3).toFixed(2);
form16.ixis.value = Math.pow(form12.ixx.value / form19.area_total.value, 0.5).toFixed(2);
//IY1 = (IY / AREA1) ^ 0.5
form17.iy.value = Math.pow(form13.iyy.value / form19.area_total.value, 0.5).toFixed(2);
//EME = BB * ESPES / (12 * IX) * (6 * CB * AB ^ 2 + 3 * BB * AB ^ 2 - 8 * CB ^ 3)
form04.dtam_m.value = (parseFloat(form06.dtam_bbarra.value) * parseFloat(ESPES) / (12 * parseFloat(form12.ixx.value)) * (6 * parseFloat(form07.dtam_D.value) * Math.pow(form05.dtam_a1.value,2) + 3 * parseFloat(form06.dtam_bbarra.value) * Math.pow(parseFloat(form05.dtam_a1.value),2) - 8 * Math.pow(parseFloat(form07.dtam_D.value),3))).toFixed(2);
//x0 = -(XB + EME)
form05.dtam_X.value = -(parseFloat(form07.dtam_xx.value) + parseFloat(form04.dtam_m.value));
//DIST = -x0
form05.dtam_distancia.value = -form05.dtam_X.value;
IX1 = Math.pow(form12.ixx.value / form19.area_total.value,0.5);
//'IP = (IX) + (IY) + (AREA1) * ((EME) + (XB)) ^ 2
var ip01 = (form04.dtam_m.value*1) + (form07.dtam_xx.value*1);
var ip02 = Math.pow(ip01,2);
form16.ip.value = ((form12.ixx.value)*1 + (form13.iyy.value)*1 + (form19.area_total.value)*1 *ip02*1).toFixed(2);
//IP = CDbl(Mid(IX, 1, Len(Str(IX)) - 4)) + CDbl(Mid(IY, 1, Len(Str(IY)) - 7)) + AREA1 * (CDbl(Mid(EME, 1, Len(Str(EME)) - 10)) + CDbl(Mid(XB, 1, Len(Str(XB)) - 10))) ^ 2
form12.j.value = (Math.pow(ESPES,3) / 3 * form10.largura_da.value).toFixed(2);
//Cw = ESPES ^ 2 / AREA1 * (XB * AREA1 * AB ^ 2 / ESPES * (BB ^ 2 / 3 + EME ^ 2 - EME * BB)+ AREA1 / (3 * ESPES) * (EME ^ 2 * AB ^ 3 + BB ^ 2 * CB ^ 2 * (2 * CB + 3 * AB)) - IX * EME ^ 2 / ESPES * (2 * AB + 4 * CB) + EME * CB ^ 2 / 3 * (8 * BB ^ 2 * CB + 2 * EME * (2 * CB * (CB - AB) + BB * (2 * CB - 3 * AB))) + BB ^ 2 * AB ^ 2 / 6 * ((3 * CB + BB) * (4 * CB + AB) - 6 * CB ^ 2) - EME ^ 2 * AB ^ 4 / 4)
BETAW = -(parseFloat(0.0833) * (ESPES * form07.dtam_xx.value * Math.pow(form05.dtam_a1.value,3)) + ESPES * Math.pow(form07.dtam_xx.value,3) * form05.dtam_a1.value);
BETAF = ESPES / 2 * (Math.pow(form06.dtam_bbarra.value - form07.dtam_xx.value),4 - Math.pow(form07.dtam_xx.value,4) + ESPES * Math.pow(form05.dtam_a1.value,2) / 4 * (Math.pow(form06.dtam_bbarra.value - form07.dtam_xx.value),2 - Math.pow(form07.dtam_xx.value,2)));
BETAL = 2 * form07.dtam_D.value * ESPES * Math.pow(form06.dtam_bbarra.value - form07.dtam_xx.value),3 + 2 / 3 * ESPES * (form06.dtam_bbarra.value - form07.dtam_xx.value) * (Math.pow(form05.dtam_a1.value / 2),3 - Math.pow(form05.dtam_a1.value / 2 - form07.dtam_D.value),3);
J2 = (1 / (2 * form13.iyy.value) * (BETAW + BETAF + BETAL) - form05.dtam_X.value);
 

//AREAU = AREA1
  id('area_util').value = id('area_total').value;
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
    raioe.value = raioe.value.replace(re_raioe, "$1$2.00");
  }
  var re_area_total = /^([0-9]{0,4})([0-9]{0,4})$/;
  if (re_area_total.test(area_total.value)) {
    area_total.value = area_total.value.replace(re_area_total, "$1$2.00");
  }
  var re_area_util = /^([0-9]{0,4})([0-9]{0,4})$/;
  if (re_area_util.test(area_util.value)) {
    area_util.value = area_util.value.replace(re_area_util, "$1$2.00");
  }
  var re_ip = /^([0-9]{0,4})([0-9]{0,4})$/;
  if (re_ip.test(ip.value)) {
    ip.value = ip.value.replace(re_ip, "$1$2.00");
  }
  var re_dtam_D = /^([0-9]{0,4})([0-9]{0,4})$/;
  if (re_dtam_D.test(dtam_D.value)) {
    dtam_D.value = dtam_D.value.replace(re_dtam_D, "$1$2.00");
  }
  var re_largura_da = /^([0-9]{0,4})([0-9]{0,4})$/;
  if (re_largura_da.test(largura_da.value)) {
    largura_da.value = largura_da.value.replace(re_largura_da, "$1$2.00");
  }
  var re_lxy = /^([0-9]{0,4})([0-9]{0,4})$/;
  if (re_lxy.test(ip.value)) {
    lxy.value = lxy.value.replace(re_lxy, "$1$2.00");
  }
  var re_dtam_E = /^([0-9]{0,4})([0-9]{0,4})$/;
  if (re_dtam_E.test(dtam_E.value)) {
    dtam_E.value = dtam_E.value.replace(re_dtam_E, "$1$20.00");
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
    dtam_xx.value = dtam_xx.value.replace(re_dtam_xx, "$1$2.00");
  }
  var re_dtam_z = /^([0-9]{0,4})([0-9]{0,4})$/;
  if (re_dtam_z.test(dtam_z.value)) {
    dtam_z.value = dtam_z.value.replace(re_dtam_z, "$1$20.00");
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
  var re_lz1 = /^([0-9]{0,4})([0-9]{0,4})$/;
  if (re_lz1.test(lz1.value)) {
    lz1.value = lz1.value.replace(re_lz1, "$1$20.00");
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
  var re_zer0 = /^([0-9]{0,4})([0-9]{0,4})$/;
  if (re_zer0.test(zer0.value)) {
    zer0.value = zer0.value.replace(re_zer0, "$1$20.00");
  }
  window.onload = function () {
    id('copiar').onclick = function () {
      soma();
    }
  }
}