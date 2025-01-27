//Selection All Elements in Dom
const links = document.querySelectorAll(".nav-link");
const tabs = document.querySelectorAll(".tab");
const panels = document.querySelectorAll(".panel");
const btnMenu = document.getElementById("menu-btn");
const menu = document.getElementById("menu");
const logo = document.getElementById("logo");
const btnLogin = document.getElementById("goToLogin");
const modal = document.querySelector(".modal");
const buttonCloseModal = document.querySelector(".close");
const buttonLogin = document.querySelector(".btnLogin");
function initFunction() {
  function onTabClick(event) {
    // Desactivate All Tabs
    tabs.forEach((tab) => {
      tab.children[0].classList.remove(
        "border-softRed",
        "border-b-4",
        "md:border-b-0"
      );
    });
    // document.querySelector('.tab')?.classList.remove("border-softRed", "border-b-4", "md:border-b-0");
    // Hide All Panels
    panels.forEach((panel) => panel.classList.add("hidden"));

    // Activate a new tab and  panel based on the target

    event.target.classList.add("border-softRed", "border-b-4");
    const classString = event.target.getAttribute("data-target");

    document
      .getElementById("panels")
      .getElementsByClassName(classString)[0]
      .classList.remove("hidden");
  }

  tabs.forEach((tab) => tab.addEventListener("click", onTabClick));

  function navToggle() {
    this.classList.toggle("open");
    menu.classList.toggle("flex");
    menu.classList.toggle("hidden");

    if (menu.classList.contains("flex")) {
      logo.setAttribute("src", "./images/logo-bookmark-footer.svg");
    } else {
      logo.setAttribute("src", "./images/logo-bookmark.svg");
    }
  }
  const linkMenu = document.querySelectorAll(".menu--link");

  function goToPage(event) {
    event.preventDefault();
    menu.classList.add("hidden");
    menu.classList.remove("flex");
    btnMenu.classList.remove("open");
    logo.setAttribute("src", "./images/logo-bookmark.svg");
    const href = event.target.getAttribute("href");
    const link = event.target;

    if (href.includes("#")) {
      const id = href.split("#")[1];
      console.log(id);
      const section = document.getElementById(id);
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  linkMenu.forEach((link) => link.addEventListener("click", goToPage));

  btnMenu.onclick = navToggle;
  function closeModal() {
    modal.classList.add("hidden");
  }

  function openModal(e) {
    e.preventDefault();
    modal.classList.remove("hidden");
  }
  buttonLogin.addEventListener("click", openModal);

  buttonCloseModal.addEventListener("click", closeModal);
}

initFunction();
