const nameInput = document.getElementById('nameInput');
const greeting = document.getElementById('greeting');
const greetButton = document.getElementById('greetButton');
greetButton.addEventListener("click",function(){
    const name = nameInput.value;
    greeting.textContent = "Hello " + name
});

