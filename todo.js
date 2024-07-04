const input = document.querySelector("#inp");
const text = document.querySelector(".text-container");
const button = document.querySelector(".add-button");

button.addEventListener("click", () => {
    if (input.value == "") {
        alert("Enter Something")
    }
    else {
        let newElement = document.createElement("ul");
        newElement.innerHTML = `${input.value} <i class="fa-solid fa-trash-can"></i>`;
        text.appendChild(newElement);
        input.value = "";
        newElement.querySelector("i").addEventListener("click", () => {
            newElement.remove()
        })
    }
});

