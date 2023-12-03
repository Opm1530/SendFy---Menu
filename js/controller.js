const boxDepoiment = document.querySelector(".third-section-three-two");
const boxDepoiment1 = document.querySelector(".second-section-two");

let prevScrollpos = window.scrollY;
let prevScrollpos1 = window.scrollY;


//Accordion Controller
document.addEventListener("DOMContentLoaded", function() {
    
    const accordionItems = document.querySelectorAll('.accordion-item');

    accordionItems.forEach(item => {
        const header = item.querySelector('.accordion-header');

        header.addEventListener('click', function() {

            if (item.querySelector('.accordion-content').classList.contains('active')) {

                item.querySelector('.accordion-content').classList.remove('active');
                item.querySelector('.accordion-header').style.cssText= 'background-color: #bcbcbc;';

                item.querySelector('.accordion-icon').classList.remove('fa-minus');
                item.querySelector('.accordion-icon').classList.toggle('fa-plus');
                item.querySelector('.accordion-icon').style.cssText= 'color: #000;';

            }
            else{

                const content = item.querySelector('.accordion-content');
                content.classList.toggle('active');
                item.querySelector('.accordion-header').style.cssText= 'background-color: #02457550;'+
                                                                        'border:1px solid #02457570;'+
                                                                        'color:#FFF;';
                
                item.querySelector('.accordion-icon').classList.remove('fa-plus');
                item.querySelector('.accordion-icon').classList.toggle('fa-minus');
                item.querySelector('.accordion-icon').style.cssText= 'color: #024575;';
                
            }
            
        });
    });

});

//Slide Brand
// Seleciona o elemento com a classe "branding-slide"
var brandingSlide = document.querySelector(".branding-slide");

// Verifica se o elemento foi encontrado
if (brandingSlide) {
  // Clona o elemento encontrado
  var copy = brandingSlide.cloneNode(true);

  // Adiciona a cópia dentro do elemento com a classe "first-section-two"
  document.querySelector('.first-section-two').appendChild(copy);
} else {
  console.error("Element with class 'branding-slide' not found.");
}


document.querySelectorAll('.button').forEach(button => {
    
    let div = document.createElement('div'),
        letters = button.textContent.trim().split('');

    function elements(letter, index, array) {

        let element = document.createElement('span'),
            part = (index >= array.length / 2) ? -1 : 1,
            position = (index >= array.length / 2) ? array.length / 2 - index + (array.length / 2 - 1) : index,
            move = position / (array.length / 2),
            rotate = 1 - move;

        element.innerHTML = !letter.trim() ? '&nbsp;' : letter;
        element.style.setProperty('--move', move);
        element.style.setProperty('--rotate', rotate);
        element.style.setProperty('--part', part);

        div.appendChild(element);

    }

    letters.forEach(elements);

    button.innerHTML = div.outerHTML;

    button.addEventListener('mouseenter', e => {
        if(!button.classList.contains('out')) {
            button.classList.add('in');
        }
    });

    button.addEventListener('mouseleave', e => {
        if(button.classList.contains('in')) {
            button.classList.add('out');
            setTimeout(() => button.classList.remove('in', 'out'), 950);
        }
    });

});


//Controla movimentação das box
window.onscroll = function() {
  let currentScrollPos = window.scrollY;
  if (document.querySelector('.hamburguer-menu').style.display == "flex") {
    document.querySelector('.hamburguer-menu').style.display="none";
  }
  if (estaVisivel(boxDepoiment) == true) {
    if (prevScrollpos > currentScrollPos ) {
    
        document.querySelectorAll('.box').forEach(box => {
          box.style.transform = 'translateY(-15px)';
        });
        document.querySelectorAll('.box2').forEach(box => {
            box.style.transform = 'translateY(15px)';
          });
    } else {
        document.querySelectorAll('.box').forEach((box, index) => {
          box.style.transform = `translateY(15px)`;
        });
        document.querySelectorAll('.box2').forEach((box, index) => {
          box.style.transform = `translateY(-15px)`;
        });
    }  
  }
  if (estaVisivel(boxDepoiment1) == true) {
 
        document.querySelectorAll('.content-box').forEach(box => {
          box.style.transform = 'translateX(0)';
        });
        
        
  }
  else{
    document.querySelectorAll('.second-section-box-one').forEach(box => {
      box.style.transform = 'translateX(-130px)';
    });
    document.querySelectorAll('.second-section-box-two').forEach(box => {
      box.style.transform = 'translateX(130px)';
    });
    document.querySelectorAll('.second-section-box-three').forEach(box => {
      box.style.transform = 'translateX(-130px)';
    });
    document.querySelectorAll('.second-section-box-four').forEach(box => {
      box.style.transform = 'translateX(130px)';
    });
  } 

  prevScrollpos = currentScrollPos;

};



//Verifica se componente está visível na tela
function estaVisivel(el) {
  const posicoes = el.getBoundingClientRect();
  const estaVisivel = (
      posicoes.bottom >= 0 &&
      posicoes.top <= window.innerHeight
  );

  return estaVisivel;
}


function toggleMenu() {
  const menu = document.querySelector('.hamburguer-menu');
  if (menu.style.display == "flex") {
    menu.style.display="none";
  }
  else{
    menu.style.display="flex";
  }
  
}

