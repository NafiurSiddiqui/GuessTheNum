const container = document.querySelector('.modal_overlay_container');
const btnChk = document.querySelector('.modal_overlay_container_input-check');

const openModal = function(){
    container.classList.remove('hidden')
};

const closeModal = function(){
    container.classList.add('hidden')
};

btnChk.addEventListener('click',closeModal)

document.addEventListener('DOMContentLoaded',function(){
    openModal();
});

// container.addEventListener('click',closeModal);

document.addEventListener('keydown', function (e) {
  console.log(e.key);

  if (e.key === 'Enter' && !container.classList.contains('hidden')) {
    closeModal();
  }
});

