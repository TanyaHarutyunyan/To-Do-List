window.onload = function(){
    const input = document.getElementById("inputText");
    const tasks = document.getElementById("tasks");
    document.getElementById("add").addEventListener("click", function(){
        if (input.value === ""){
            alert("Please, enter a task!")
        }else {
            tasks.innerHTML += 
            `<div class="newTask">
                <span class="addedTask">${input.value}</span>
                <button class="deleteButton"><i class="fas fa-trash-alt"></i></button>
                <button class="doneButton"><i class="fas fa-check-square"></i></button>
            </div>`
            input.value = ""
        }

            let doneButtons = document.querySelectorAll(".doneButton")
            for (let i = 0; i < doneButtons.length; i++){
                doneButtons[i].addEventListener("click", function(){
                    doneButtons[i].parentNode.classList.toggle("done")
                })
            }

            let deleteButtons = document.querySelectorAll(".deleteButton")
            for (let i = 0; i < deleteButtons.length; i++){
                deleteButtons[i].addEventListener("click", function(){
                    deleteButtons[i].parentNode.remove()
                })
            }
    })
}