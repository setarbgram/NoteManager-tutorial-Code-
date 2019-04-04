var newEl = document.createElement('button');


var text = document.createTextNode('click me');

console.log('text');

newEl.appendChild(text);

newEl.setAttribute('style','background-color:lightBlue;color:#fff;padding:5px 10px;');

console.log(newEl);


var form = document.getElementById('add');

form.appendChild(newEl);

form.insertBefore(newEl,form.children[0]);

newEl.parentElement.removeChild(newEl);