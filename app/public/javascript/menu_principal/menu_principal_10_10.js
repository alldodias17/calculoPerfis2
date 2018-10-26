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

//RDB2 = RDB1 * ESPES
var ESPES = parseFloat(id('espessura_d').value);
var RDB1 = parseFloat(id('raioe').value);
id('raiod').value = (RDB1 * ESPES || 0.00 ).toFixed(2);
var RDB2 = parseFloat(id('raiod').value);

//RN = RDB2 + ESPES / 2
id('raio_neutro').value = (id('raiod').value*1 + (id('espessura_d').value / 2) || 0.00).toFixed(2);
var RN = parseFloat(id('raio_neutro').value);

//ALTDB = RDB2 + ESPES
id('alturadobra').value = (id('raiod').value*1 + id('espessura_d').value*1 || 0.00).toFixed(2);
var ALTDB = parseFloat(id('alturadobra').value);

//U = RN * 1.57
var U1 = parseFloat(1.57);
id('ud').value = ((id('raio_neutro').value * 10 * 1.57) / 10 || 0.00).toFixed(2);
var U = parseFloat(id('ud').value);

//A2 = A1 - (2 * RN + ESPES)
var A1 = parseFloat(id('dtam_A').value);
id('dtam_a').value = (id('dtam_A').value*1 - (2 * id('raio_neutro').value + id('espessura_d').value*1) || 0.00).toFixed(2);
var A2 = parseFloat(id('dtam_a').value);

//B2 = B1 - 2 * ALTDB
var B1 = parseFloat(id('dtam_B').value);
id('dtam_b').value = ((B1 - 2 * ALTDB) || 0.00).toFixed(2);
var B2 = parseFloat(id('dtam_b').value); 

//C2 = C1 - ALTDB
var C1 = id('etam_C').value
id('dtam_c').value = id('etam_C').value - ALTDB;
var C2 = id('dtam_c').value;

//AB = A1 - ESPES
id('dtam_a1').value = (id('dtam_A').value - id('espessura_d').value || 0.00).toFixed(2);
var AB = parseFloat(id('dtam_a1').value); 

//BB = B1 - ESPES
id('dtam_bbarra').value = (B1 - ESPES || 0.00).toFixed(2);
var BB = parseFloat(id('dtam_bbarra').value);

//CB = C1 - ESPES / 2
id('dtam_D').value = C1 - (ESPES / 2);
var CB = id('dtam_D').value;

//CGY = A1 / 2
id('cgy').value = (A1 / 2 || 0.00).toFixed(2);
var CGY = parseFloat(id('cgy').value);

//YB = AB / 2
id('dtam_y').value = (AB / 2).toFixed(2) || 0.00;
var YB = parseFloat(id('dtam_y').value)

//EME = YB
id('dtam_m').value = YB || 0.00;
var EME = id('dtam_m').value;

//IX = 4 * ESPES * (0.0417 * A2 ^ 3 + B2 * (A2 / 2 + RN) ^ 2 + 2 * U * (A2 / 2 + 0.637 * RN) ^ 2 + 2 * 0.149 * RN ^ 3 + 0.0833 * C2 ^ 3 + C2 / 4 * (A2 - C2) ^ 2)
id('ixx').value = 4 * ESPES * (h * Math.pow(A2,3) + B2 * Math.pow(A2 / 2 + RN,2) + 2 * U * Math.pow(A2 / 2 + e * RN,2) + 2 * b * Math.pow(RN,3) + p * Math.pow(C2,3) + C2 / 4 * Math.pow(A2 - C2,2));
var IX = parseFloat(id('ixx').value);

//IY = C2 * ESPES ^ 3 / 3 + 8 * 0.149 * RN * ESPES + ESPES * B2 ^ 3 / 3 + A2 * ESPES ^ 3 / 6 + 4 * C2 * ESPES * (ESPES / 2) ^ 2 + 4 * U * ESPES * (RN + ESPES / 2 - 0.637 * RN) ^ 2 + 4 * B2 * ESPES * (B1 / 2) ^ 2 + 4 * U * ESPES * (B1 - ESPES / 2 - RN + 0.637 * RN) ^ 2 + 2 * A2 * ESPES * (B1 - ESPES / 2) ^ 2
id('iyy').value = C2 * Math.pow(ESPES,3) / 3 + 8 * 0.149 * RN * ESPES + ESPES * Math.pow(B2,3) / 3 + A2 * Math.pow(ESPES,3) / 6 + 4 * C2 * ESPES * Math.pow(ESPES / 2,2) + 4 * U * ESPES * Math.pow(RN + ESPES / 2 - 0.637 * RN,2) + 4 * B2 * ESPES * Math.pow(B1 / 2,2) + 4 * U * ESPES * Math.pow(B1 - ESPES / 2 - RN + 0.637 * RN,2) + 2 * A2 * ESPES * Math.pow(B1 - ESPES / 2,2); 
var IY = parseFloat(id('iyy').value);

//IP = IX + IY
id('ip').value = (IX*1 + IY*1).toFixed(2) || 0.00;
var IP = parseFloat(id('ip').value);

//WX = IX / CGY
id('wx').value = (IX / CGY).toFixed(2);
var WX = parseFloat(id('wx').value);

//FITA = 2 * C2 + 2 * B2 + A2 + 4 * U
id('largura_da').value = (2 * C2 + 2 * B2 + A2 + 4 * U).toFixed(2) || 0.00;
var FITA = parseFloat(id('largura_da').value);

//AREA1 = 2 * FITA * ESPES
id('area_total').value = (2 * FITA * ESPES || 0.00).toFixed(2);
var AREA01 = id('area_total').value;

//AREAU = AREA1
id('area_util').value = id('area_total').value;

//CGX = B1
id('cgx').value = B1;
var CGX = parseFloat(id('cgx').value);


//WY = IY / CGX
id('wy').value = (IY / CGX).toFixed(2) || 0.00;
var WY = parseFloat(id('wy').value);

//WT = 2 * (AB * 2 * (BB + ESPES / 2) - 4 * CB * ESPES) * ESPES
id('wt').value =  2 * (AB * 2 * (BB + ESPES / 2) - 4 * CB * ESPES) * ESPES;
var WT = parseFloat(id('wt').value);

//IX1 = (IX / AREA1) ^ 0.5
id('ixis').value = Math.pow(IX / AREA01,0.5).toFixed(2) || 0.00;
var IX1 = id('ixis').value;

//IY1 = (IY / AREA1) ^ 0.5
id('iy').value = Math.pow(IY / AREA01,0.5).toFixed(2) || 0.00;
var IY1 = id('iy').value;

//J1 = 2 * (AB * 2 * (BB + ESPES / 2) - 4 * CB * ESPES) ^ 2 * ESPES / FITA
id('j').value = 2 * Math.pow(AB * 2 * (BB + ESPES / 2) - 4 * CB * ESPES,2) * ESPES / FITA;
var J1 = id('j').value;

//KGM = AREA1 * 0.001 * 7.85
id('d_Peso').value = (AREA01 * 0.001 * 7.85).toFixed(2) || 0.00
var KGM = id('d_Peso').value;







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
        dtam_xx.value = dtam_xx.value.replace(re_dtam_xx, "$1$20.00");
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
      var re_iii = /^([0-9]{0,4})([0-9]{0,4})$/;
      if (re_iii.test(iii.value)) {
        iii.value = iii.value.replace(re_iii, "$1$20.00");
      }
      var re_bbb = /^([0-9]{0,4})([0-9]{0,4})$/;
      if (re_bbb.test(bbb.value)) {
        bbb.value = bbb.value.replace(re_bbb, "$1$20.00");
      }
      var re_ixx = /^([0-9]{0,4})([0-9]{0,4})$/;
      if (re_ixx.test(ixx.value)) {
        ixx.value = ixx.value.replace(re_ixx, "$1$20.00");
      }
      window.onload = function () {
        id('copiar').onclick = function () {
          soma();
        }
      }
    }
