 let relampago = document.querySelector('.relampago');

document.addEventListener('keydown', function(event) {
  if (event.code === 'Space') {
    relampago.classList.add('is-flashing');

    setTimeout(function(){
      relampago.classList.remove('is-flashing');
    }, 3000); 
  }
});

