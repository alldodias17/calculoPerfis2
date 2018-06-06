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
//RN = RDB2 + ESPES / 2
//ALTDB = RDB2 + ESPES
//U = RN * 1.57
//A2 = A1 - 2 * ALTDB
//B2 = B1 - 2 * ALTDB
//C2 = C1 - ALTDB
//D2 = D1 - ALTDB
//AB = A1 - ESPES
//BB = B1 - ESPES
//CB = C1 - ESPES / 2
//DB = D1 - ESPES / 2
//FITA = C2 + 3 * U + B2 + A2 + D2
//AREA1 = FITA * ESPES
//AREAU = AREA1
//X = (C2 * ESPES * (DB + BB) + U * ESPES * (DB + BB - RN + 0.637 * RN) + B2 * ESPES * (D2 + 2 * RN + B2 / 2) + U * ESPES * (DB + RN - 0.637 * RN) + A2 * ESPES * DB + U * ESPES * (DB - RN + 0.637 * RN) + D2 * ESPES * D2 / 2) / AREA1
//CGX = X
//If A1 = B1 And C1 = D1 Then
//Y = X
//Else
//Y = (C2 * ESPES * C2 / 2 + U * ESPES * (CB - RN + 0.637 * RN) + B2 * ESPES * CB + U * ESPES * (C2 + 2 * RN - 0.637 * RN) + A2 * ESPES * (C2 + 2 * RN + A2 / 2) + U * ESPES * (CB + AB - RN + 0.637 * RN) + D2 * ESPES * (CB + AB)) / AREA1
//CGY = Y
//IX = ESPES * C2 ^ 3 / 12 + 3 * 0.149 * RN * ESPES + B2 * ESPES ^ 3 / 12 + ESPES * A2 ^ 3 / 12 + D2 * ESPES ^ 3 / 12 + C2 * ESPES * (Y - C2 / 2) ^ 2 + U * ESPES * (Y - CB + RN - 0.637 * RN) ^ 2 + B2 * ESPES * (Y - CB) ^ 2 + U * ESPES * (Y - CB - RN + 0.637 * RN) ^ 2 + A2 * ESPES * (-Y +  CB + RN + A2 / 2) ^ 2 + U * ESPES * (-Y + CB - RN + AB + 0.637 * RN) ^ 2 + D2 * ESPES * (CB + AB - Y) ^ 2
//End If
//If A1 = B1 And C1 = D1 Then
//IY = IX
//Else
//IY = ESPES * D2 ^ 3 / 12 + 3 * 0.149 * RN * ESPES + A2 * ESPES ^ 3 / 12 + ESPES * B2 ^ 3 / 12 + C2 * ESPES ^ 3 / 12 + D2 * ESPES * (X - D2 / 2) ^ 2 + U * ESPES * (X - DB + RN - 0.637 * RN) ^ 2 + A2 * ESPES * (X - DB) ^ 2 + U * ESPES * (X - DB - RN + 0.637 * RN) ^ 2 + B2 * ESPES * (-X + DB + RN + B2 / 2) ^ 2 + U * ESPES * (-X  - RN + DB + BB + 0.637 * RN) ^ 2 + C2 * ESPES * _(DB + BB - X) ^ 2
//ixy = C2 * ESPES * (DB + BB - X) * (Y - C2 / 2) + _U * ESPES * (DB + BB - RN + 0.637 * RN - X) * (Y - CB + RN - 0.637 * RN) + B2 * ESPES * (X - D2 - 2 * RN - B2 / 2) * (Y - CB) + U * ESPES * (-X + D2 + 2 * RN - 0.637 * RN) * (Y - CB - RN + 0.637 * RN) + A2 * ESPES * (DB - X) * (Y -CB - AB / 2) + U * ESPES * (DB - RN + 0.637 * RN - X) * (Y - CB - AB + RN - 0.637 * RN) + D2 * ESPES * (D2 / 2 - X) * (CB + AB - Y)
//End If
//If A1 = B1 And C1 = D1 Then
//IV = IX + ixy
//iz = IX - ixy
//Else
//IV = (IX + IY) / 2 + (((IX - IY) / 2) * ((IX - IY) / 2) + ixy * ixy) ^ 0.5
//iz = (IX + IY) / 2 - (((IX - IY) / 2) * ((IX - IY) / 2) + ixy * ixy) ^ 0.5
//W1 = CB * (X - DB - BB)
//W2 = W1 + BB * (Y - CB)
//W3 = W2 + AB * (X - DB)
//W4 = W3 + DB * (Y - CB - AB)
//RO1 = DB + BB - X
//RO3 = DB - X
//RO4 = -X
//JWX = (W1 * RO1 * ESPES * CB + (W1 * RO1 + W2 * RO3) * ESPES * BB + (W2 * RO3 + W3 * RO3) * ESPES * AB + (W3 * RO3 + W4 * RO4) * ESPES * DB) / 3 + (W1 * RO1 * ESPES * CB + (W1 * RO3 + W2 * RO1) * ESPES * BB + (W2 * RO3 + W3 * RO3) * ESPES * AB + (W3 * RO4 + W4 * RO3) * ESPES * DB) / 6
//y0 = -JWX / IY
//End If
//If A1 = B1 And C1 = D1 Then
//x0 = -y0
//Else
//RO1 = Y - CB
//RO3 = Y - CB - AB
//JWY = (W1 * RO1 * ESPES * CB + (W1 * RO1 + W2 * RO1) * ESPES * BB + (W2 * RO1 + W3 * RO3) * ESPES * AB + (W3 * RO3 + W4 * RO3) * ESPES * DB) / 3 + (W1 * Y * ESPES * CB + (W1 * RO1 + W2 * RO1) * ESPES * BB + (W2 * RO3 + W3 * RO1) * ESPES * AB + (W3 * RO3 + W4 * RO3) * ESPES * DB) / 6
//x0 = JWY / IX
//DIST = (x0 * x0 + y0 * y0) ^ 0.5
//IP = IX + IY + AREA1 * DIST ^ 2
//AUX2 = (CB + AB) / 2
//End If
//If AUX2 > Y Then
//WX = IX / (CB + AB - Y + ESPES / 2)
//Else
//WX = IX / Y
//End If
//AUX2 = (DB + BB) / 2
//If AUX2 > X Then
//WY = IY / (DB + BB - X + ESPES / 2)
//Else
//WY = IY / X
//End If
//WT = FITA * ESPES ^ 2 / 3
//J1 = WT * ESPES
//IX1 = (IX / AREA1) ^ 0.5
//IY1 = (IY / AREA1) ^ 0.5
//iz1 = (iz / AREA1) ^ 0.5
//iv1 = (IV / AREA1) ^ 0.5
//RO1 = -(DB + BB - X - x0)
//RO2 = Y - y0 - CB
//RO3 = X + x0 - DB
//If RO3 < 0 Then RO3 = -RO3
//RO4 = Y - y0 - CB - AB
//W1 = RO1 * CB
//W2 = W1 + RO2 * BB
//If x0 < 0 Then x0 = -x0
//AUX0 = CGX - DB
//If AUX0 > x0 Then
//W3 = W2 + RO3 * AB
//Else
//W3 = W2 - RO3 * AB
//End If
//W4 = W3 + RO4 * DB
//WN0 = (W1 * ESPES * CB + (W1 + W2) * ESPES * BB + (W2 + W3) * ESPES * AB + (W3 + W4) * ESPES *  DB) / (2 * AREA1)
//WN1 = WN0 - W1
//WN2 = WN0 - W2
//WN3 = WN0 - W3
//WN4 = WN0 - W4
//Cw = ((WN0 * WN0 + WN0 * WN1 + WN1 * WN1) * ESPES * CB + (WN1 * WN1 + WN1 * WN2 + WN2 * WN2) * ESPES * BB + (WN2 * WN2 + WN2 * WN3 + WN3 * WN3) * ESPES * AB + (WN3 * WN3 + WN3 * WN4 + WN4 * WN4) * ESPES * DB) / 3
//If A1 = B1 And C1 = D1 Then
//TETA = 45
//Else
//IXY1 = ixy
//AUX2 = 2 * IXY1 / (IX - IY)
//parametro = AUX2
//Indice = 1
//rot_trig 'Parametro, Indice
//'CALL "rot_trig" USING parametro resultado indice
//ATAN1 = Resultado
//TETA = 90 - ATAN1 / 2
//End If
//TETA_AUX = TETA
//TETA_AUX1 = TETA - TETA_AUX
//TETA_AUX1 = TETA_AUX1 * 60
//KGM = AREA1 * 0.001 * 7.85
//XB = X
//YB = Y










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