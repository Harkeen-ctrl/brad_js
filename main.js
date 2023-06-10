
// const ul = document.querySelector('.items');

// // ul.remove();
// // ul.lastElementChild.remove();
// ul.firstElementChild.textContent = 'Hello'
// ul.children[1].innerText = 'Brad';
// ul.lastElementChild.innerHTML = '<h1>HELLO</h1>';


// const btn = document.querySelector('.btn');
// btn.style.background = 'red';
// const btn = document.querySelector('.btn');
// btn.addEventListener('mouseout', (e) => {
//     e.preventDefault();
//     document.querySelector('#myform').style
//     .background = '#ccc';
//     document.querySelector('body').classList.add('bg-dark');
//     document.querySelector('.items').lastElementChild.
//     innerHTML = '<h1>Hello</h1>'
// });

const myForm = document.querySelector('#myform');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('click', (e) => {
   e.preventDefault();

   if ( nameInput.value === '' || emailInput.value === ''){
    msg.classList.add('error')
    msg.innerHTML = 'please enter all fields';

    setTimeout(() => msg.remove(), 1000);
   } else {
    const li = document.createElement('li');
    li. appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));

    userList.appendChild(li);
    
    //clear fields
    nameInput.value = '';
    emailInput = '';
   }

} );
















