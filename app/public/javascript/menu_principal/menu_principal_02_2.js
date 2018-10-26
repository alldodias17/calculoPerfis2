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



//RDB2 = RDB1 * ESPES
var ESPES = parseFloat(id('espessura_d').value);
var RDB1 = parseFloat(id('raioe').value);
id('raiod').value = (RDB1 * ESPES || 0.00 ).toFixed(2);
var RDB2 = parseFloat(id('raiod').value);

//RN = RDB2 + ESPES / 2
id('raio_neutro').value = (id('raiod').value*1 + id('espessura_d').value / 2 || 0.00).toFixed(2);
var RN = parseFloat(id('raio_neutro').value);

//ALTDB = RDB2 + ESPES
id('alturadobra').value = (id('raiod').value*1 + id('espessura_d').value*1 || 0.00).toFixed(2);
var ALTB = parseFloat(id('alturadobra').value);

//U = RN * 1.57
var U1 = parseFloat(1.57);
id('ud').value = ((id('raio_neutro').value * 10 * 1.57) / 10 || 0.00).toFixed(2);
var U = parseFloat(id('ud').value);

//A2 = A1 - (2 * RN + ESPES)
var A1 = parseFloat(id('dtam_A').value);
id('dtam_a').value = (id('dtam_A').value*1 - (2 * id('raio_neutro').value + id('espessura_d').value*1) || 0.00).toFixed(2);
var A2 = parseFloat(id('dtam_a').value);

//B2 = B1 - (2 * RN + ESPES)
var B1 = parseFloat(id('dtam_B').value);
id('dtam_b').value = (B1 - (2 * RN + ESPES) || 0.00).toFixed(2);
var B2 = parseFloat(id('dtam_b').value); 


//C2 = C1 - (RN + ESPES / 2)
id('dtam_C').value = id('etam_C').value - (RN + ESPES / 2);
var C2 = parseFloat(id('dtam_C').value);

//AB = A1 - ESPES
id('dtam_a1').value = A1 - ESPES;


//BB = B1 - ESPES
id('dtam_bbarra').value = B1 - id('espessura_d').value;

//CB = C1 - ESPES / 2
id('dtam_D').value = id('etam_C').value - id('espessura_d').value / 2;

//CGY = A1 / 2
id('cgy').value = A1 / 2;

//IX = 2 * ESPES * (0.0417 * A2 ^ 3 + B2 * (A2 / 2 + RN) ^ 2 + 2 * U * (A2 / 2 + 0.637 * RN) ^ 2 + 2 * 0.149 * RN ^ 3 + (0.0833 * C2 ^ 3 + C2 / 4 * (A2 - C2) ^ 2))
id('ixx').value = 2 * ESPES * (0.0417 * A2**3 + B2 * (A2 / 2 + RN)**2 + 2 * U * (A2 / 2 + 0.637 * RN)**2 + 2 * 0.149 * RN**3 + (0.0833 * C2**3 + C2 / 4 * (A2 - C2)**2));

//WX = IX / CGY
id('wx').value = (id('ixx').value*1 / id('cgy').value*1 ).toFixed(2);

//FITA = 2 * C2 + 2 * B2 + A2 + 4 * U
id('largura_da').value = (2 * parseFloat(id('dtam_c').value) + 2 * parseFloat(id('dtam_b').value) + parseFloat(id('dtam_a').value) + 4 * parseFloat(id('ud').value)).toFixed(2);

//AREA1 = FITA * ESPES
id('area_total').value = (id('largura_da').value * id('espessura_d').value).toFixed(2);

//KGM = AREA1 * 0.001 * 7.85
id('d_Peso').value = id('area_total').value * 0.001 * 7.85;

//XB = 2 * ESPES / AREA1 * (B2 * (B2 / 2 + RN) + U * 0.363 * RN + U * (B2 + 1.637 * RN) + C2 *(B2 + 2 * RN))
id('dtam_xx').value = (2 * ESPES*1 / id('area_total').value*1 * (id('dtam_b').value*1 * (id('dtam_b').value*1 / 2 + id('raio_neutro').value*1) + id('ud').value*1 * parseFloat(0.363)*1 * id('raio_neutro').value*1 + id('ud').value*1 * (id('dtam_b').value*1 + parseFloat(1.637)*1 * id('raio_neutro').value*1) + id('dtam_c').value*1 * (id('dtam_b').value*1 + 2 * id('raio_neutro').value*1))).toFixed(2);

//IY = 2 * ESPES * (B2 * (B2 / 2 + RN) ^ 2 + 0.0833 * B2 ^ 3 + 0.356 * RN ^ 3 + C2 * (B2 + 2 * RN) ^ 2 + U * (B2 + 1.637 * RN) ^ 2 + 0.149 * RN ^ 3) - AREA1 * XB ^ 2
id('iyy').value = (2 * id('espessura_d').value*1 * (id('dtam_b').value*1 * Math.pow(id('dtam_b').value*1 / 2 + id('raio_neutro').value*1,2) + parseFloat(0.0833)*1 * Math.pow(id('dtam_b').value,3)*1 + parseFloat(0.356)*1 * Math.pow(id('raio_neutro').value,3) + id('dtam_c').value*1 * Math.pow(id('dtam_b').value*1 + 2 * id('raio_neutro').value,2) + id('ud').value*1 * Math.pow(id('dtam_b').value*1 + parseFloat(1.637) * id('raio_neutro').value,2) + parseFloat(0.149) * Math.pow(id('raio_neutro').value,3)) - id('area_total').value*1 * Math.pow(id('dtam_xx').value,2)).toFixed(2);

//CGX = XB + ESPES / 2
id('cgx').value = id('dtam_xx').value*1 + ESPES / 2;

//WY = IY / (B1 - CGX)

id('wy').value = id('iyy').value*1 / (parseFloat(id('dtam_B').value) - parseFloat(id('cgx').value));

//WT = FITA * (ESPES ^ 2) / 3
id('wt').value = (id('largura_da').value * Math.pow(ESPES,2) / 3).toFixed(2);

//IX1 = (IX / AREA1) ^ 0.5
id('ixis').value = Math.pow(id('ixx').value / id('area_total').value, 0.5).toFixed(2);

//IY1 = (IY / AREA1) ^ 0.5
id('iy').value = Math.pow(id('iyy').value / id('area_total').value, 0.5).toFixed(2);

//EME = BB * ESPES / (12 * IX) * (6 * CB * AB ^ 2 + 3 * BB * AB ^ 2 - 8 * CB ^ 3)
id('dtam_m').value = (parseFloat(id('dtam_bbarra').value) * parseFloat(ESPES) / (12 * parseFloat(id('ixx').value)) * (6 * parseFloat(id('dtam_D').value) * Math.pow(id('dtam_a1').value,2) + 3 * parseFloat(id('dtam_bbarra').value) * Math.pow(parseFloat(id('dtam_a1').value),2) - 8 * Math.pow(parseFloat(id('dtam_D').value),3))).toFixed(2);

//x0 = -(XB + EME)
id('dtam_X').value = -(parseFloat(id('dtam_xx').value) + parseFloat(id('dtam_m').value));

//DIST = -x0
id('dtam_distancia').value = id('dtam_X').value;


IX1 = Math.pow(id('ixx').value / id('area_total').value,0.5);
//'IP = (IX) + (IY) + (AREA1) * ((EME) + (XB)) ^ 2
var ip01 = (id('dtam_m').value*1) + (id('dtam_xx').value*1);
var ip02 = Math.pow(ip01,2);
id('ip').value = ((id('ixx').value)*1 + (id('iyy').value)*1 + (id('area_total').value)*1 *ip02*1).toFixed(2);
//IP = CDbl(Mid(IX, 1, Len(Str(IX)) - 4)) + CDbl(Mid(IY, 1, Len(Str(IY)) - 7)) + AREA1 * (CDbl(Mid(EME, 1, Len(Str(EME)) - 10)) + CDbl(Mid(XB, 1, Len(Str(XB)) - 10))) ^ 2
id('j').value = (Math.pow(ESPES,3) / 3 * id('largura_da').value).toFixed(2);
//Cw = ESPES ^ 2 / AREA1 * (XB * AREA1 * AB ^ 2 / ESPES * (BB ^ 2 / 3 + EME ^ 2 - EME * BB)+ AREA1 / (3 * ESPES) * (EME ^ 2 * AB ^ 3 + BB ^ 2 * CB ^ 2 * (2 * CB + 3 * AB)) - IX * EME ^ 2 / ESPES * (2 * AB + 4 * CB) + EME * CB ^ 2 / 3 * (8 * BB ^ 2 * CB + 2 * EME * (2 * CB * (CB - AB) + BB * (2 * CB - 3 * AB))) + BB ^ 2 * AB ^ 2 / 6 * ((3 * CB + BB) * (4 * CB + AB) - 6 * CB ^ 2) - EME ^ 2 * AB ^ 4 / 4)
BETAW = -(parseFloat(0.0833) * (ESPES * id('dtam_xx').value * Math.pow(id('dtam_a1').value,3)) + ESPES * Math.pow(id('dtam_xx').value,3) * id('dtam_a1').value);
BETAF = ESPES / 2 * (Math.pow(id('dtam_bbarra').value - id('dtam_xx').value),4 - Math.pow(id('dtam_xx').value,4) + ESPES * Math.pow(id('dtam_a1').value,2) / 4 * (Math.pow(id('dtam_bbarra').value - id('dtam_xx').value),2 - Math.pow(id('dtam_xx').value,2)));
BETAL = 2 * id('dtam_D').value * ESPES * Math.pow(id('dtam_bbarra').value - id('dtam_xx').value),3 + 2 / 3 * ESPES * (id('dtam_bbarra').value - id('dtam_xx').value) * (Math.pow(id('dtam_a1').value / 2),3 - Math.pow(id('dtam_a1').value / 2 - id('dtam_D').value),3);
J2 = (1 / (2 * id('iyy').value) * (BETAW + BETAF + BETAL) - id('dtam_X').value);
 

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
  
  var re_ixx = /^([0-9]{0,4})([0-9]{0,4})$/;
  if (re_ixx.test(ixx.value)) {
    ixx.value = ixx.value.replace(re_ixx, "$1$20.00");
  }
  var re_lz1 = /^([0-9]{0,4})([0-9]{0,4})$/;
  if (re_lz1.test(lz1.value)) {
    lz1.value = lz1.value.replace(re_lz1, "$1$20.00");
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