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
id('dtam_D').value = id('etam_E').value || 0.00;
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
var l = parseFloat(0.5);
var m = parseFloat(0.285);
var n = parseFloat(0.356);

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
var A2 = id('dtam_a').value;


//B2 = B1 - ALTDB
var B1 = parseFloat(id('dtam_B').value);
id('dtam_b').value = B1 - ALTDB;
var B2 = parseFloat(id('dtam_b').value);

//AB = A1 - ESPES
id('dtam_a1').value = (A1 - ESPES).toFixed(2) || 0.00;
var AB = parseFloat(id('dtam_a1').value);

//BB = B1 - ESPES / 2
id('dtam_bbarra').value = (B1 - ESPES / 2).toFixed(2) || 0.00;
var BB = parseFloat(id('dtam_bbarra').value);

//CGX = BB
id('cgx').value = BB;
var CGX = id('cgx').value;

//CGY = A1 / 2
id('cgy').value = A1 / 2;
var CGY = id('cgy').value;

//FITA = 2 * B2 + 2 * U + A2
id('largura_da').value = 2 * B2*1 + 2 * U*1 + A2*1;
var FITA = id('largura_da').value;


//AREA1 = FITA * ESPES
id('area_total').value = (FITA*1 * ESPES*1);
var AREA01 = id('area_total').value;



//IX = 2 * ESPES * (0.0417 * A2 ^ 3 + B2 * (A2 / 2 + RN) ^ 2 + U * (A2 / 2 + 0.637 * RN) ^ 2 + 0.149 * RN ^ 3)
var ix1 = Math.pow(A2,3);
var ix2 = A2 / 2 + RN;
var ix3 = Math.pow(ix2,2);
var ix4 = id('dtam_a').value/2 + e * RN;
var ix5 = Math.pow(ix4,2);
var ix6 = Math.pow(RN,3);

id('ixx').value = 2 * ESPES * (h * ix1 + B2 * ix3 + U * ix5 + c * ix6);
var IX = id('ixx').value;

//IY = 2 * ESPES * (B2 * (B2 / 2 + RN) ^ 2 + 0.0833 * B2 ^ 3 + 0.356 * RN ^ 3)


id('iyy').value = 2 * ESPES * (B2 * Math.pow(B2 / 2 + RN,2) + p *   Math.pow(B2,3) + n * Math.pow(RN,3));
var IY = parseFloat(id('iyy').value);


//ixy = 2 * ESPES * (B2 * (A2 / 2 + RN) * (B2 / 2 + RN) + 0.5 * RN ^ 3 + 0.285 * A2 * RN ^ 2)
id('lxy').value = 2 * ESPES * (B2 * (A2 / 2 + RN) * (B2 / 2 + RN) + l * Math.pow(RN,3) + m * A2 * Math.pow(RN,2));
var ixy = id('lxy').value;

//IP = IX + IY
id('ip').value = IX*1 + IY*1;
var IP = parseFloat(id('ip').value);

//WX = IX / CGY
id('wx').value = (IX / CGY).toFixed(2);
var WX = parseFloat(id('wx').value);

//WY = IY / CGX
id('wy').value =  (IY / CGX);
var WY = parseFloat(id('wy').value);

//J1 = FITA * ESPES ^ 3 / 3
id('j').value = FITA * Math.pow(ESPES,3) / 3;
var J1 = id('j').value;

//WT = J1 / ESPES
id('wt').value =  (J1 / ESPES).toFixed(2) || 0.00;
var WT = parseFloat(id('wt').value);

//Cw = ESPES * BB ^ 2 / 12 * (AB ^ 2 * (BB ^ 2 + 2 * AB * BB)) / (AB + 2 * BB)
id('cw').value = ESPES * Math.pow(BB,2) / 12 * (Math.pow(AB,2) * (Math.pow(BB,2) + 2 * AB * BB)) / (AB + 2 * BB);
var Cw = id('cw').value;

//AUX2 = 2 * ixy / (IX - IY)
AUX2 = 2 * ixy / (IX - IY);

//parametro = AUX2
//Indice = 1
//rot_trig 'Parametro, Indice
//'CALL "rot_trig" USING parametro resultado indice
//ATAN1 = Resultado
//TETA = ATAN1 / 2
//parametro = TETA
//Indice = 3
//rot_trig 'Parametro, Indice
//'CALL "rot_trig" USING parametro resultado indice
//dblSENO = Resultado
//parametro = TETA
//Indice = 2
//rot_trig 'Parametro, Indice
//'CALL "rot_trig" USING parametro resultado indice
//dblCos = Resultado
//iz = IX * dblCos ^ 2 + IY * dblSENO ^ 2 - 2 * ixy * dblSENO * dblCos
//IV = IX * dblSENO ^ 2 + IY * dblCos ^ 2 + 2 * ixy * dblSENO * dblCos


//IX1 = (IX / AREA1) ^ 0.5
id('ixis').value = Math.pow(IX / AREA01,0.5).toFixed(2) || 0.00;
var IX1 = parseFloat(id('ixis').value);

//IY1 = (IY / AREA1) ^ 0.5
//IY1 = (IY / AREA1) ^ 0.5
id('iy').value = Math.pow(IY / AREA01,0.5);
var IY1 = parseFloat(id('iy').value);

//iz1 = (iz / AREA1) ^ 0.5
//form18.iz.value = (Math.pow(iz / AREA01,0.5)).toFixed(2) || 0.00;
//var iz1 = parseFloat(form18.iz.value);

//iv1 = (IV / AREA1) ^ 0.5
//form19.iv.value = Math.pow(IV / AREA01,05);
//var iv1 = parseFloat(form19.iv.value);

//TETA = 90 - TETA
//TETA_AUX = TETA
//TETA_AUX1 = TETA_TETA - AUX
//TETA_AUX1 = TETA_AUX1 * 60


//KGM = AREA1 * 0.001 * 7.85
id('d_Peso').value = (AREA01 * 0.001 * 7.85).toFixed(2) || 0.00;
var KGM = id('d_Peso').value;


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
    var re_dtam_D = /^([0-9]{0,4})([0-9]{0,4})$/;
    if (re_dtam_D.test(dtam_D.value)) {
      dtam_D.value = dtam_D.value.replace(re_dtam_D, "$1$2.00");
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
    var re_lxy = /^([0-9]{0,4})([0-9]{0,4})$/;
    if (re_lxy.test(lxy.value)) {
      lxy.value = lxy.value.replace(re_lxy, "$1$20.00");
    }
    var re_wv = /^([0-9]{0,4})([0-9]{0,4})$/;
    if (re_wv.test(wv.value)) {
      wv.value = wv.value.replace(re_wv, "$1$20.00");
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
