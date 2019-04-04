var div = document.querySelector('div.wrapper');

// console.log(div.getAttribute('class'));
// console.log(div.getAttribute('id'));
// div.setAttribute('style','background:#ccc; font-size:25pt;');
// a = div.hasAttribute('style');
// console.log(a);
// div.removeAttribute('style');

var btn = document.getElementById('add-btn');
var input = document.getElementById('add-input');

btn.addEventListener('click',function (e) {
    e.preventDefault();
    input.setAttribute('type','submit');
    input.setAttribute('value',input.value);
})