"use strict";

(function () {
    const button = document.querySelector("#menu")
    const lijst = document.querySelector(" nav ul")
    lijst.classList.add('hidden');

    button.addEventListener('click', function () {
        this.setAttribute('aria-expanded', this.getAttribute('aria-expanded') === "true" ? "false" : "true")
        if (lijst.classList.contains('visible')) {
            lijst.classList.remove('visible')
            lijst.classList.add('hidden')
        } else if (lijst.classList.contains('hidden')) {
            lijst.classList.remove('hidden')
            lijst.classList.add('visible')
        }
        console.log(lijst)
    })
})()

