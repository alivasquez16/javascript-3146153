let relampago = document.querySelector('.relampago');
let zombie = document.querySelector('.zombie');

document.addEventListener('keydown', function(event) {
  if (event.code === 'Space') {
    relampago.classList.add('is-flashing');
    setTimeout(function(){
      relampago.classList.remove('is-flashing');
    }, 3000); 
  }

  if (event.code === 'ArrowUp' && !zombie.classList.contains('jump')) {
    zombie.classList.add('jump');
    setTimeout(() => {
      zombie.classList.remove('jump');
    }, 600);
  }
});
