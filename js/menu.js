(() => {
    const refs = {
      openMenuBtn: document.querySelector(".head_mob_btn"),
      closeMenuBtn: document.querySelector(".mob_menu_close"),
      Menu: document.querySelector(".mobil_menu_box"),
    };
  
    refs.openMenuBtn.addEventListener("click", toggleMenu);
    refs.closeMenuBtn.addEventListener("click", toggleMenu);
  
    function toggleMenu() {
      refs.Menu.classList.toggle("is-hidden");
    }
  })();