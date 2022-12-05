let menu_items = document.querySelectorAll(".footer__a");

window.addEventListener("load", () => {
    menu_items.forEach(item => {
        item.classList.remove("footer__a_active");
    });

    menu_items.forEach(item => {
        if (item.href === document.location.href) {
            item.classList.add("footer__a_active");
        }
    });
});