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
var l = parseFloat(3.1416);

//AREA1 = 3.1416 * A1 ^ 2 / 4
var A1 = parseInt(dtam_A.value);
form19.area_total.value = l * Math.pow(A1,2) / 4;
var AREA01 = parseFloat(id('area_total').value);

//AREAU = AREA1
id('area_util').value = id('area_total').value;

//KGM = AREA1 * 0.001 * 7.85
id('d_Peso').value = (AREA01 * 0.001 * 7.85).toFixed(2) || 0.00;
var KGM = id('d_Peso').value;

//CGX = A1 / 2
id('cgx').value = (A1  / 2).toFixed(2) || 0.00;
var CGX = parseFloat(id('cgx').value);

//CGY = CGX
id('cgy').value = CGX;
var CGY = parseInt(id('cgy').value);

//IX = 3.1416 * A1 ^ 4 / 64
id('ixx').value = l* Math.pow(A1,4) / 64;
var IX = parseFloat(id('ixx').value);

//IY = IX
id('iyy').value = IX;
var IY = id('iyy').value ;

//IP = IX + IY
id('ip').value = IX*1 + IY*1; 
var IP = parseFloat(id('ip').value);

//WX = IX / CGY
id('wx').value = (IX / CGY).toFixed(2);
var WX = parseFloat(id('wx').value);

//WY = WX
id('wy').value = WX;
var WY = parseFloat(id('wy').value);

//IX1 = (IX / AREA1) ^ 0.5
id('ixis').value = Math.pow(IX / AREA01,0.5).toFixed(2) || 0.00;
var IX1 = parseFloat(id('ixis').value);

//IY1 = IX1
id('iy').value = Math.pow(IY / AREA01,0.5);
var IY1 = parseFloat(id('iy').value);

//J1 = IX / 2
id('j').value = IX / 2;
var J1 = parseFloat(id('j').value);

//WT = 3.1416 * A1 ^ 3 / 16
id('wt').value =  l * Math.pow(A1,3) / 16;
var WT = parseFloat(id('wt').value);


  var re_raiod = /^([0-9]{0,4})([0-9]{0,4})$/;
  if (re_raiod.test(raiod.value)) {
    raiod.value = raiod.value.replace(re_raiod, "$1$20.00");
  }
  var re_raio_neutro = /^([0-9]{0,4})([0-9]{0,4})$/;
  if (re_raio_neutro.test(raio_neutro.value)) {
    raio_neutro.value = raio_neutro.value.replace(re_raio_neutro, "$1$20.00");
  }
  var re_alturadobra = /^([0-9]{0,4})([0-9]{0,4})$/;
  if (re_alturadobra.test(alturadobra.value)) {
    alturadobra.value = alturadobra.value.replace(re_alturadobra, "$1$20.00");
  }
  var re_ud = /^([0-9]{0,4})([0-9]{0,4})$/;
  if (re_ud.test(ud.value)) {
    ud.value = ud.value.replace(re_ud, "$1$20.00");
  }
  var re_dtam_a = /^([0-9]{0,4})([0-9]{0,4})$/;
  if (re_dtam_a.test(dtam_a.value)) {
    dtam_a.value = dtam_a.value.replace(re_dtam_a, "$1$20.00");
  }
  var re_dtam_b = /^([0-9]{0,4})([0-9]{0,4})$/;
  if (re_dtam_b.test(dtam_b.value)) {
    dtam_b.value = dtam_b.value.replace(re_dtam_b, "$1$20.00");
  }
  var re_dtam_c = /^([0-9]{0,4})([0-9]{0,4})$/;
  if (re_dtam_c.test(dtam_c.value)) {
    dtam_c.value = dtam_c.value.replace(re_dtam_c, "$1$20.00");
  }
  var re_dtam_a1 = /^([0-9]{0,4})([0-9]{0,4})$/;
  if (re_dtam_a1.test(dtam_a1.value)) {
    dtam_a1.value = dtam_a1.value.replace(re_dtam_a1, "$1$20.00");
  }
  var re_dtam_bbarra = /^([0-9]{0,4})([0-9]{0,4})$/;
  if (re_dtam_bbarra.test(dtam_bbarra.value)) {
    dtam_bbarra.value = dtam_bbarra.value.replace(re_dtam_bbarra, "$1$20.00");
  }
  var re_cgx = /^([0-9]{0,4})([0-9]{0,4})$/;
  if (re_cgx.test(cgx.value)) {
    cgx.value = cgx.value.replace(re_cgx, "$1$2.00");
  }
  var re_cgy = /^([0-9]{0,4})([0-9]{0,4})$/;
  if (re_cgy.test(cgy.value)) {
    cgy.value = cgy.value.replace(re_cgy, "$1$2.00");
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
    ip.value = ip.value.replace(re_ip, "$1$2.00");
  }
  var re_largura_da = /^([0-9]{0,4})([0-9]{0,4})$/;
  if (re_largura_da.test(largura_da.value)) {
    largura_da.value = largura_da.value.replace(re_largura_da, "$1$20.00");
  }
  var re_lxy = /^([0-9]{0,4})([0-9]{0,4})$/;
  if (re_lxy.test(lxy.value)) {
    lxy.value = lxy.value.replace(re_lxy, "$1$20.00");
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
    dtam_d.value = dtam_d.value.replace(re_dtam_d, "$1$20.00");
  }
  var re_dtam_ccc = /^([0-9]{0,4})([0-9]{0,4})$/;
  if (re_dtam_ccc.test(dtam_ccc.value)) {
    dtam_ccc.value = dtam_ccc.value.replace(re_dtam_ccc, "$1$20.00");
  }
  var re_dtam_z = /^([0-9]{0,4})([0-9]{0,4})$/;
  if (re_dtam_z.test(dtam_z.value)) {
    dtam_z.value = dtam_z.value.replace(re_dtam_z, "$1$20.00");
  }
  var re_j = /^([0-9]{0,4})([0-9]{0,4})$/;
  if (re_j.test(j.value)) {
    j.value = j.value.replace(re_j, "$1$2.00");
  }
  var re_iy = /^([0-9]{0,4})([0-9]{0,4})$/;
  if (re_iy.test(iy.value)) {
    iy.value = iy.value.replace(re_iy, "$1$2.00");
  }
  var re_ixx = /^([0-9]{0,4})([0-9]{0,4})$/;
  if (re_ixx.test(ixx.value)) {
    ixx.value = ixx.value.replace(re_ixx, "$1$2.00");
  }
  var re_iyy = /^([0-9]{0,4})([0-9]{0,4})$/;
  if (re_iyy.test(iyy.value)) {
    iyy.value = iyy.value.replace(re_iyy, "$1$2.00");
  }
  var re_wt = /^([0-9]{0,4})([0-9]{0,4})$/;
  if (re_wt.test(wt.value)) {
    wt.value = wt.value.replace(re_wt, "$1$2.00");
  }
  







  



  window.onload = function () {
    id('copiar').onclick = function () {
      soma();
    }
  }



}