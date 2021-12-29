(() => {
    const refs = {
        openMenuBtn: document.querySelector(".header-btn-menu"),
        closeMenuBtn: document.querySelector(".header-btn-cross"),
        menu: document.querySelector(".mob-menu"),
    };

    refs.openMenuBtn.addEventListener("click", toggleMenu);
    refs.closeMenuBtn.addEventListener("click", toggleMenu);

    function toggleMenu() {
        refs.menu.classList.toggle("is-hidden");
    }
})();