
window.onload = function () {
    document.getElementById("comprimentol1").focus();
  };
  $(document).ready(function () {
    $("#comprimentol1").focus(function () {
      $(this).css("background-color", "#F0F8FF");
    });
    
  });
    function validar () {

        var comprimentol1 = parseInt(form01.comprimentol1.value);
        form01.comprimentol1.value = comprimentol1 - 10;
        
        if(comprimentol1 == 1  || comprimentol1 == 2 || comprimentol1 == 3 || comprimentol1 == 4 || comprimentol1 == 5 || comprimentol1 == 6 ){
          form01.a01.value = 100;
          form02.a02.value = 100;
          form03.a03.value = 100;
          form04.a04.value = 100;
          form05.a05.value = 100;
        } else if (comprimentol1 == 7  || comprimentol1 == 8 || comprimentol1 == 9 || comprimentol1 == 10 || comprimentol1 == 11 || comprimentol1 == 12 || comprimentol1 == 13){
          form01.a01.value = 150;
          form02.a02.value = 150;
          form03.a03.value = 150;
          form04.a04.value = 150;
          form05.a05.value = 150;

        }else if (comprimentol1 == 14  || comprimentol1 == 15 || comprimentol1 == 16 || comprimentol1 == 17 || comprimentol1 == 18 || comprimentol1 == 19 || comprimentol1 == 20 || comprimentol1 == 21){
          form01.a01.value = 230;
          form02.a02.value = 230;
          form03.a03.value = 230;
          form04.a04.value = 230;
          form05.a05.value = 230;
        }else if (comprimentol1 == 22  || comprimentol1 == 23 || comprimentol1 == 24 || comprimentol1 == 25 || comprimentol1 == 26 || comprimentol1 == 27 || comprimentol1 == 28 || comprimentol1 == 29){
          form01.a01.value = 400;
          form02.a02.value = 400;
          form03.a03.value = 400;
          form04.a04.value = 400;
          form05.a05.value = 400;

        }
        var vao = form02.vao.value;
        if(vao == 1  || vao == 2  || vao == 7 || vao == 8 || vao == 9 || vao == 14 || vao == 15 || vao == 16 || vao == 17 || vao == 22 || vao == 23 || vao == 24 || vao == 25 ){
          form01.espess01.value = 0.9;
          form02.espess02.value = 0.9;
          form03.espess03.value = 0.9;
          form04.espess04.value = 0.9;
          form05.espess05.value = 0.9;
        }else if (vao == 3  || vao == 4 || vao == 5 || vao == 6 || vao == 10 || vao == 11 || vao == 12 || vao == 18 || vao == 19 || vao == 26 || vao == 37){
          form01.espess01.value = 2;
          form02.espess02.value = 2;
          form03.espess03.value = 2;
          form04.espess04.value = 2;
          form05.espess05.value = 2;
        
        }else if (vao == 5  || vao == 6 || vao == 12 || vao == 13|| vao == 20 || vao == 21 || vao == 28 || vao == 29){
          form01.espess01.value = 3;
          form02.espess02.value = 3;
          form03.espess03.value = 3;
          form04.espess04.value = 3;
          form05.espess05.value = 3;
        }

          form01.acomp01.value = form01.comprimentol1.value;
          form02.acomp02.value = form01.comprimentol1.value;
          form03.acomp03.value = form01.comprimentol1.value;
          form04.acomp04.value = form01.comprimentol1.value;
          form05.acomp05.value = form01.comprimentol1.value;

          form01.pcomp01.value = 0.03;
          form02.pcomp02.value = 0.03;
          form03.pcomp03.value = 0.03;
          form04.pcomp04.value = 0.03;
          form05.pcomp05.value = 0.03;

          form01.ptotal01.value = 0.03;
          form02.ptotal02.value = 0.03;
          form03.ptotal03.value = 0.03;
          form04.ptotal04.value = 0.03;
          form05.ptotal05.value = 0.03;

          form01.punit01.value = 0.07;
          form02.punit02.value = 0.23;
          form03.punit03.value = 0.28;
          form04.punit04.value = 0.12;
          form05.punit05.value = 0.25;


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
  

  }
  
  
  
  
  
  
  
  
    
    window.onload = function () {
      id('copiar').onclick = function () {
        soma();
      }
    }
  
  }
  
  
    
  
  
    