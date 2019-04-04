var icons = document.getElementsByClassName('fa');

// for(var i=0;i< icon.length;i++){
//     console.log(icon[i]);
// }
// console.log(icon);
// per = Array.from(icon);
//
// per.push('hello');
// console.log(per);

Array.from(icons).forEach(function (icon,index) {

    console.log(icon,index)
});

var liss = document.querySelectorAll('li , h2 ,#list'); //return nodeList
 console.log(liss);
 Array.from(liss).forEach(function (lis) {
         console.log(lis);
         // lis.textContent ="hello";
 })