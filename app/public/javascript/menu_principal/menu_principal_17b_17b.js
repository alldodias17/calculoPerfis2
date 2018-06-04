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


    var raio_e = parseFloat(form03.raioe.value);
    var espessura = parseFloat(form01.espessura_e.value);

    //RDB2 = RDB1 * ESPES
    form07.raiod.value = raio_e * espessura;
    //ALTDB = RDB2 + ESPES
    form09.alturadobra.value = (form07.raiod.value * 1) + (form06.espessura_d.value * 1);

    var alt_dobra = form09.alturadobra.value;
    var a1 = form01.etam_A.value;
    var b1 = form02.etam_B.value;
    var c1 = form03.etam_C.value;

    //A2 = A1 - 2 * ALTDB
    form09.dtam_a.value = a1 - (2 * alt_dobra);
    //B2 = B1 - 2 * ALTDB
    form09.dtam_b.value = (b1 - (2 * alt_dobra) || 0);
    // RN = RDB2 + ESPES / 2
    form08.raio_neutro.value = (form07.raiod.value * 1) + (form06.espessura_d.value * 1 / 2);
    //U = RN * 1.57
    form10.ud.value = (form08.raio_neutro.value * 10 * 1.57) / 10;
    //AB = A1 - ESPES      
    form05.dtam_a1.value = a1 - form06.espessura_d.value;
    //BB = B1 - ESPES
    form06.dtam_bbarra.value = b1 - form06.espessura_d.value;
    //C2 = C1 - ALTDB
    form10.dtam_c.value = c1 - alt_dobra;
    // CB = C1 - ESPES / 2
    form07.dtam_D.value = c1 - form06.espessura_d.value / 2;
    //  FITA = 2 * C2 + 4 * U + 2 * B2 + A2
    form10.largura_da.value = (2 * form10.dtam_c.value) + (4 * form10.ud.value) + (2 * form09.dtam_b.value) + (form09.dtam_a.value * 10) / 10;
    // AREA1 = FITA * ESPES
    form19.area_total.value = form10.largura_da.value * form06.espessura_d.value;
    //CGX = B1 - ESPES / 2
    form14.cgx.value = b1 - form06.espessura_d.value / 2;
    //CGY = A1 / 2
    form15.cgy.value = a1 / 2;

    var raioneutro = parseInt(form08.raio_neutro.value);
    var B2 = parseInt(form09.dtam_b.value);
    var A2 = parseInt(form09.dtam_a.value);
    var C2 = parseInt(form10.dtam_c.value);
    var U = parseFloat(form10.ud.value);
    var b = A2 / 2 + raioneutro;
    var h = parseFloat(0.637);
    var c = A2 / 2 + h * raioneutro;
    var RN = parseFloat(form08.raio_neutro.value);
    var f = (A2 - form10.dtam_c.value);
    var g = (form06.espessura_d.value);
    var i = parseFloat(0.0417);
    var j = parseFloat(0.637);
    var l = parseFloat(0.0833);
    var m = parseFloat(0.149);
    var n = parseFloat(0.356);
    var o = parseFloat(1.637);
    var p = parseFloat(0.5);
    var q = parseFloat(0.285);
    var r = parseFloat(0.137);







    //IX = 2 * ESPES * (0.0417 * A2 ^ 3 + B2 * (A2 / 2 + _RN) ^ 2 + 2 * U * (A2 / 2 + 0.637 * RN) ^ 2 + 2 * 0.149 * RN ^ 3 + 0.0833 * C2 ^ 3 + C2 /4 * (A2 - C2) ^ 2)
    form12.ixx.value = 2 * g * (i * Math.pow(A2, 3) + B2 * Math.pow(A2 / 2 + RN, 2) + 2 * U * Math.pow(A2 / 2 + h * RN, 2) + 2 * m * Math.pow(RN, 3) + l * Math.pow(C2, 3) + C2 / 4 * Math.pow(A2 - C2, 2)).toFixed(2);

    //IY = 2 * ESPES * (B2 * (B2 / 2 + RN) ^ 2 + 0.0833 * B2 ^ 3 + 0.356 * RN ^ 3 + C2 * (B2 + 2 * RN)  ^ 2 + U * (B2 + 1.637 * RN) ^ 2 + 0.149 * RN ^ 3)       
    form13.lyy.value = 2 * g * (B2 * Math.pow(B2 / 2 + RN, 2) + l * Math.pow(B2, 3) + n * Math.pow(RN, 3) + C2 * Math.pow(B2 + 2 * RN, 2) + U * Math.pow(B2 + o * RN, 2) + m * Math.pow(RN, 3)).toFixed(2);

    //ixy = 2 * ESPES * (B2 * (A2 / 2 + RN) * (B2 / 2 + RN) _ + 0.5 * RN ^ 3 + 0.285 * A2 * RN ^ 2 + C2 *  (2 * RN + B2) * (A2 / 2 - C2 / 2) - 0.137 * RN ^ 3 + U * (B2 + 1.637 * RN) * (0.5 * A2 + _0.637 * RN))
    var s = parseFloat(form12.ixx.value);
    var t = parseFloat(form13.lyy.value);
    form17.lxy.value = 2 * g * (B2 * (A2 / 2 + RN) * (B2 / 2 + RN) + p * Math.pow(RN, 3) + q * A2 * Math.pow(RN, 2) + C2 * (2 * RN + B2) * (A2 / 2 - C2 / 2) - r * Math.pow(RN, 3) + U * (B2 + o * RN) * (p * A2 + h * RN)).toFixed(2);

    //IP = IX + IY
    form16.ip.value = (s + t).toFixed(2);

    // J1 = FITA * ESPES ^ 3 / 3
    form12.j.value = (form10.largura_da.value * Math.pow(g, 3) / 3).toFixed(2);

    // WX = IX / CGY
    form18.wx.value = (form12.ixx.value / form15.cgy.value * 10 / 10).toFixed(2);

    //WY = IY / CGX
    form13.wy.value = (form13.lyy.value / form14.cgx.value).toFixed(2);

    //WT = J1 / ESPES
    form14.wt.value = (form12.j.value / g).toFixed(2);

    // Cw = ESPES * BB ^ 2 / 12 * (AB ^ 2 * (BB ^ 2 + _2 * AB * BB + 4 * BB * CB + 6 * AB * 
    //CB) + 4 * _CB ^ 2 * (3 * AB ^ 2 + 3 * AB * BB + 4 * BB * _CB + 2 * AB * CB + CB ^ 2)) / (AB + 2 * BB + _2 * CB)


    var AB = parseFloat(form05.dtam_a1.value); //AB b/
    var BB = parseFloat(form06.dtam_bbarra.value); //BB a/
    var CB = parseFloat(form07.dtam_D.value); //CB  C/
    var cw1 = Math.pow(BB, 2);
    var cw2 = Math.pow(AB, 2);
    var cw3 = Math.pow(CB, 2);

    form16.cw.value = g * cw1 / 12 * (cw2 * (cw1 + 2 * AB * BB + 4 * BB * CB + 6 * AB * CB) + 4
      * cw3 * (3 * cw2 + 3 * AB * BB + 4 * BB * CB + 2 * AB * CB + cw3)) / (AB + 2 * BB + 2 * CB);

    //IX1 = (IX / AREA1) ^ 0.5
    form16.ixx.value = Math.pow(form12.ixx.value / form19.area_total.value, 0.5).toFixed(2);

    // IY1 = (IY / AREA1) ^ 0.5
    form17.iy.value = Math.pow(form13.lyy.value / form19.area_total.value, 0.5).toFixed(4);
    //KGM = AREA1 * 0.001 * 7.85
    var area01 = parseFloat(0.001);
    var area02 = parseFloat(7.85);
    form04.d_Peso.value = (form19.area_total.value * area01 * area02).toFixed(2);












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
    if (re_ixxx.test(ixx.value)) {
      ixx.value = ixx.value.replace(ixx_bbb, "$1$20.00");
    }





    window.onload = function () {
      id('copiar').onclick = function () {
        soma();
      }
    }



  }

