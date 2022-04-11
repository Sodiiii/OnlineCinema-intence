const modalWindow = document.querySelector('.modal');
const buttonsModal = document.querySelectorAll('.button-play');
let video = document.querySelector('.video');

buttonsModal.forEach((item, i) => {
    item.addEventListener('click', () => {
        modalWindow.classList.add('active');
        video.src = 'https://www.youtube.com/embed/Sdp6VL_NBnY';
    });
});

modalWindow.addEventListener('click', () => {
    modalWindow.classList.remove('active');
    video.src = '';
    console.log(video.src)
})