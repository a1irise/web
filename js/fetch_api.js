let cart_items = document.getElementsByClassName("cart__items")[0];
let preloader = document.getElementsByClassName("preloader")[0];
let error = document.getElementsByClassName("error")[0];

let random = Math.floor(Math.random() * 10) + 1;
let url = `https://jsonplaceholder.typicode.com/user/${random}/todos`;

window.addEventListener("load", () => {
    fetch(url)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            return Promise.reject();
        })
        .then(json => {
            preloader.classList.add("preloader_hidden");
            for (let i = 0; i < json.length; i++) {
                cart_items.innerHTML += `<article class="cart__item">
                                                 <p class="cart__title">${json[i].title}</p>
                                                 <p class="cart__status">${json[i].completed}</p>
                                             </article>`
            }
        })
        .catch(() => {
            preloader.classList.add("preloader_hidden");
            error.classList.remove("error_hidden");
        })
});