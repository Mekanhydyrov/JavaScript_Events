// Events


const btn = document.querySelector('#btnDeleteAll');
const btn2 = document.querySelector('#btnAddNewTask');


btn.addEventListener('click', function(q) {
    console.log('Scroll Hareket Etmiyor');

    q.preventDefault();
})



btn.addEventListener('click', btnClick);
btn2.addEventListener('click', btnClick2);


function btnClick() {
    console.log(' Onaylandı ');
}


function btnClick2() {
    console.log('Onaylanmadı ');
}