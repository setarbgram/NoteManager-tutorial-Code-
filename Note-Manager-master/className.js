var h2 = document.querySelector('header h2');
var div = document.querySelector('div.wrapper');
var header = document.querySelector('header');

// h2.className='changeBg';
// h2.classList.add('changeFt');
// h2.classList.remove('changeBg');
// hq2.classList.toggle('changeBg');
// console.log(hq2.classList);

// h2.addEventListener('click',a);
// h2.addEventListener('click',b);
//
// function a() {
//
//     h2.classList.toggle('changeFt');
//     console.log('a is clicked');
// }
// function b(e) {
//     h2.classList.toggle('changeBg');
//     console.log(e);
// }


div.addEventListener('click',function () {
    var delay = new Date().getTime()+1000;
    while (new Date() < delay){}
    console.log('div is clicked');
},true)
header.addEventListener('click',function () {
    var delay = new Date().getTime()+1000;
    while (new Date() < delay){}
    console.log('header is clicked');
})
h2.addEventListener('click',function () {
    var delay = new Date().getTime()+1000;
    while (new Date() < delay){}
    console.log('h2 is clicked');
})