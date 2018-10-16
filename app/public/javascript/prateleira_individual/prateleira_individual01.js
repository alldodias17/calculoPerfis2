
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

  
  
  
  
  
  
    
    window.onload = function () {
      id('copiar').onclick = function () {
        soma();
      }
    }
  
  }
  
  
    
  
  
  