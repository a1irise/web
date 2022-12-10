function load() {
    let input = document.getElementById("input");
    let ul = document.getElementById("ul");

    input.value = localStorage.getItem("previous_input");
    for (let i = 1; i < localStorage.length; i++) {
        let li = document.createElement("li");
        li.innerText = localStorage.getItem(i.toString());
        li.classList.add("wishlist-main__li");
        ul.appendChild(li);
    }

    input.addEventListener('input', () => {
        localStorage.setItem("previous_input", input.value);
    })
}

function create() {
    let input = document.getElementById("input");
    let ul = document.getElementById("ul");

    let li = document.createElement("li");
    li.innerText = input.value;
    li.classList.add("wishlist-main__li");
    ul.appendChild(li);

    localStorage.setItem(localStorage.length.toString(), input.value);

    input.value = "";
}

function deleteAll() {
    let input = document.getElementById("input");
    let ul = document.getElementById("ul");

    input.value = "";
    while (ul.firstChild) {
        ul.removeChild(ul.lastChild);
    }

    localStorage.clear();
}