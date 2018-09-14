
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
    function validar () {
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
  id('dtam_A').value = id('etam_A').value || 0.00;
  id('dtam_B').value = id('etam_B').value || 0.00;
  id('dtam_D').value = id('etam_D').value || 0.00;
  id('espessura_d').value = id('espessura_e').value || 0.00;
  
  
//RDB = 1.5 * ESPES
//ALTDB = RDB + ESPES
//RN = RDB + ESPES / 2
//U = RN * 1.57
//AB = A1 - ESPES
//A2 = A1 - 2 * ALTDB
//C1B = C1 - ESPES / 2
//C12 = C1 - ALTDB
//B1B = B1 - ESPES
//B12 = B1 - 2 * ALTDB
//If chkDuEn.Value = vbChecked Then
//B2B = B1B
//B22 = B12
//C2B = C1B
//C22 = C12
//Y = 2
//Else
//B2B = B1 - ESPES / 2
//B22 = B1 - ALTDB
//C22 = 0
//C2B = 0
//Y = 1
//End If
//LARG = C12 + C22 + B12 + B22 + A2 + (2 + Y) * U
//AREAT = LARG * ESPES
//PESOB = AREAT * COMPR * 0.00785 / 1000
//If TIPO.ListIndex = 1 Then GoTo ROT3200
//'*===================>  PISO LISO E ANTIDERRAPANTE  <=============*
//AREAU = AREAT - (2 + Y) * 9 * ESPES
//PESOL = PESOB - (2 + Y) * 9 * ESPES * COMPR * 0.8 * 0.00785 / 1000
//XB = ESPES * (C12 * B1B + Y * U * (B1B - RN + 0.637 * RN) + B12 * (RN + B12 / 2) + 2 * U * (RN - 0.637  * RN) + B22 * (RN + B22 / 2) + C22 * B2B - Y * 9 * B1B - 2 * 9 * B1B / 2) / AREAU
//IX = ESPES * (C12 * ESPES ^ 2 / 12 + (2 + Y) * 0.149 * RN + B12 ^ 3 / 12 + A2 * ESPES ^ 2 / 12 + B22 ^ 3 / 12 + C22 * ESPES ^ 2 / 12 + C12 * (B1B - XB) ^ 2 + Y * U * (B1B - RN + 0.637 * RN - XB) * (B1B - RN + 0.637 * RN - XB) + B12 * (RN + B12 / 2 - XB) * (RN + B12 / 2 - XB) + 2 *  U * (XB - RN + 0.637 * RN) * (XB - RN + 0.637 * RN) + A2 * XB ^ 2 + B22 * (RN + B22 / 2 - XB) *  (RN + B22 / 2 - XB) + C22 * (B2B - XB) * (B2B - XB) - Y * 9 * ESPES ^ 2 / 12 - 2 * 9 ^ 3 / 12 - Y * 9 * (B1B - XB) * (B1B - XB) - 2 * 9 * (B1B / 2 - XB) * (B1B / 2 - XB))
  
  
  
  
    
    window.onload = function () {
      id('copiar').onclick = function () {
        soma();
      }
    }
  
  }
  
  
    
  
  
  