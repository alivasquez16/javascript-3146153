let relampago = document.querySelector('.relampago');
let zombie = document.querySelector('.zombie');
const trueno = document.querySelector('#trueno');
const caminar = document.querySelector('#caminar');
const salto = document.querySelector('#salto');

document.addEventListener('keydown', function(event) {


  if (event.code === 'Space') {
    relampago.classList.add('is-flashing');
    
    trueno.currentTime = 0;
    trueno.play();
    caminar.play();

    setTimeout(function(){
      relampago.classList.remove('is-flashing');
    }, 2000); 
  }

  if (event.code === 'ArrowUp' && !zombie.classList.contains('jump')) {
    zombie.classList.add('jump');
    salto.currentTime = 0;
    salto.play();

    setTimeout(() => {
      zombie.classList.remove('jump');
    }, 600);
  }

  if (event.code === 'space'){
    zombie.classList.add('pasosZombie');
  }
  zombie.addEventListener("click")
}); 


  





