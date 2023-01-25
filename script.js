const myName = document.querySelector('.my-name');
const textBox = document.querySelector('.text-box');

textBox.addEventListener('keyup', updateName);

function updateName() {
    myName.innerHTML = textBox.value; 
    if(myName !== "Lorna") {
        myName.style.color = "orange";
    }
}
