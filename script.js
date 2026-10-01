const nameInput = document.getElementById('nameInput');
const greeting = document.getElementById('greeting');
const greetButton = document.getElementById('greetButton');

greetButton.addEventListener("click",function(){
    const currentHour = new Date().getHours();
    const name = nameInput.value;
    if (name === ""){
        greeting.textContent = "Please enter your name."
        window.alert("The name can not be empty");
        
    }
    else{
        if (currentHour < 12){
            greeting.textContent = "Good Morning, " + name + "!"
        }
        else if (currentHour < 17){
            greeting.textContent = "Good Afternoon, " + name + "!"
        }
        else if(currentHour < 20){
            greeting.textContent = "Good Evening, " + name + "!"
        }
        else{
            greeting.textContent = "Good Night, " +name+ "!"
        }
        nameInput.value = ""
    }
});

