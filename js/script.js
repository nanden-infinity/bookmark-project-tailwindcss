//Selection All Elements in Dom

const tabs = document.querySelectorAll(".tab");
const panels = document.querySelectorAll(".panel");

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
      .classList.remove("hidden")
}

tabs.forEach((tab) => tab.addEventListener("click", onTabClick));
