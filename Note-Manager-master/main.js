var ul = document.querySelector('ul');
var addBtn = document.getElementById('add-btn');
var addInput = document.getElementById('add-input');
addBtn.addEventListener('click',addLi);

function alertss() {
    alert(123);
}

function addLi(e) {
    e.preventDefault();
    // console.log('newLi');

    if( addInput.value !== ' ' ){
    var li = document.createElement('li'),
        firstPar = document.createElement('p'),
        secondPar = document.createElement('p'),
        firstIcon = document.createElement('i'),
        secondIcon = document.createElement('i'),
        input = document.createElement('input');

    firstIcon.className =     firstIcon.className = "fa fa-pencil-square-o";
    secondIcon.className = "fa fa-times";
    input.className = 'edit.note';
    input.setAttribute('type','text');

    firstPar.textContent = addInput.value ;

    secondPar.appendChild(firstIcon);
    secondPar.appendChild(secondIcon);

    li.appendChild(firstPar);
    li.appendChild(secondPar);
    li.appendChild(input);
    ul.appendChild(li);
     console.log(li);

     addInput.value= ' ';
    }
}

/* add */

var hideItem = document.getElementById('hide');

hideItem.addEventListener('click',function () {

    var label = document.querySelector('label');

    if (hideItem.checked){
        ul.style.display = 'none';
        label.textContent = 'Unhide Notes';
    }else{
        ul.style.display = 'block';
        label.textContent = 'Hide Notes'
    }

});


/* search */

var searchInput = document.querySelector('#search-note input');

searchInput.addEventListener('keyup',function (e) {
console.log();
    var searchChar = e.target.value.toUpperCase();
    var notes =ul.getElementsByTagName('li');

    Array.from(notes).forEach(function (note) {
        var parText = note.firstElementChild.textContent;
        if(parText.toUpperCase().indexOf(searchChar) !== -1){
            // console.log(parText.toUpperCase().indexOf(searchChar));
            note.style.display = 'block';
        }else{
            note.style.display='none';
        }
    })

});