document.addEventListener('scroll', () => {
    let i;

    let menu_items = document.getElementsByClassName("team-menu__a");
    for (i = 0; i < menu_items.length; i++) {
        menu_items[i].style.setProperty("--team-menu-background", "none");
        menu_items[i].style.setProperty("--team-menu-text-color", "#242424");
        menu_items[i].style.setProperty("--team-menu-border", "#cdcdcd");
        menu_items[i].style.setProperty("--team-menu-text-color-on-hover", "#e10600");
    }

    let main_content_sections = document.getElementsByClassName("main-content__section");
    for (i = 0; i < main_content_sections.length; i++) {
        if (main_content_sections[i].getBoundingClientRect().top > 0) {
            break;
        }
    }

    menu_items[i-1].style.setProperty("--team-menu-background", "#e10600");
    menu_items[i-1].style.setProperty("--team-menu-text-color", "#ffffff");
    menu_items[i-1].style.setProperty("--team-menu-border", "#e10600");
    menu_items[i-1].style.setProperty("--team-menu-text-color-on-hover", "#ffffff");
});