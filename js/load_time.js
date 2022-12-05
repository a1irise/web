(() => {
    const start = new Date().getTime();

    window.addEventListener("load", () => {
        const now = new Date().getTime();
        const load_time = (now - start) / 1000;

        let text = document.createTextNode("Page load time is " + load_time + " seconds");

        let p = document.createElement("p");
        p.appendChild(text);
        p.classList.add("footer__load-time");

        let footer = document.getElementsByTagName("footer");
        footer[0].appendChild(p);
    });
})();