
const swiper = new Swiper('.swiper', {
    width: 240,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
  }
});


function showMore() {
    const slide7 = document.querySelector('#swiper-slide-7');
    const slide8 = document.querySelector('#swiper-slide-8');
    const slide9 = document.querySelector('#swiper-slide-9');

    if (getComputedStyle(slide7).display === 'flex') {
        slide7.style.display = 'none';
        slide8.style.display = 'none';
        slide9.style.display = 'none';
    } else {
        slide7.style.display = 'flex';
        slide8.style.display = 'flex';
        slide9.style.display = 'flex';
    }
}


















// const button = document.querySelector('.mybutton');

// button.addEventListener('click', () => {
//     alert('Button was clicked!');
// });