
window.onload = function () {
    document.getElementById("espess").focus();
  };
  $(document).ready(function () {
    $("#espess").focus(function () {
      $(this).css("background-color", "#F0F8FF");
    });
    $("#stvenan").blur(function () {
      $(this).css("background-color", "#F0F8FF");
    });
    $("#rx").blur(function () {
      $(this).css("background-color", "#F0F8FF");
    });
    $("#cw").blur(function () {
      $(this).css("background-color", "#F0F8FF");
    });
    $("#ry").blur(function () {
      $(this).css("background-color", "#F0F8FF");
    });
    $("#x0").blur(function () {
        $(this).css("background-color", "#F0F8FF");
      });
      $("#areaefetiva").blur(function () {
        $(this).css("background-color", "#F0F8FF");
      });
      $("#fy").blur(function () {
        $(this).css("background-color", "#F0F8FF");
      });
      $("#lt").blur(function () {
        $(this).css("background-color", "#F0F8FF");
      });
      $("#kt").blur(function () {
        $(this).css("background-color", "#F0F8FF");
      });
      $("#ly").blur(function () {
        $(this).css("background-color", "#F0F8FF");
      });
      $("#ky").blur(function () {
        $(this).css("background-color", "#F0F8FF");
      });
      $("#ix").blur(function () {
        $(this).css("background-color", "#F0F8FF");
      });
      $("#kx").blur(function () {
        $(this).css("background-color", "#F0F8FF");
      });
      $("#w").blur(function () {
        $(this).css("background-color", "#F0F8FF");
      });
      $("#areatotal").blur(function () {
        $(this).css("background-color", "#F0F8FF");
      });
      $("#profundidade").blur(function () {
        $(this).css("background-color", "#F0F8FF");
      });
      $("#altura").blur(function () {
        $(this).css("background-color", "#F0F8FF");
      });
  });
    function validar () {
        
        form01.stvenan.value = (980).toFixed(2);
        form01.rx.value = (31).toFixed(2);
        form02.cw.value = (3407086422).toFixed(2);
        form02.ry.value = (0).toFixed(2);
        form02.x0.value = 28.51;
        form03.areaefetiva.value = (0).toFixed(2);
        form03.fy.value = (30).toFixed(2);
        form03.lt.value = (0).toFixed(2);
        form04.kt.value = (0).toFixed(2);
        form04.ly.value = (0).toFixed(2);
        form04.ky.value = (0).toFixed(2);
        form05.ix.value = (0).toFixed(2);
        form05.kx.value = (0).toFixed(2);
        form05.w.value = (0).toFixed(2);
        form06.areatotal.value = (0).toFixed(2);
        form06.profundidade.value = (0).toFixed(2);
        form06.altura.value = (0).toFixed(2);

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
  
  
    
  
  
  