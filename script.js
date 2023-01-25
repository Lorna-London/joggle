let inputName = document.querySelector('.input-name');
let btn = document.querySelector('.btn');
let myName = document.querySelector('.my-name');

function updateName() {
    myName.innerHTML = inputName.value;
}

