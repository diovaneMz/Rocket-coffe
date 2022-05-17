function openMenu() {
  header.classList.add("menu-expanded");
  navigation.classList.add("menu-expanded");

  getElemenetByClass(".blur-mobile").classList.add("menu-expanded");
}

function closeMenu() {
  header.classList.remove("menu-expanded");
  navigation.classList.remove("menu-expanded");

  getElemenetByClass(".blur-mobile").classList.remove("menu-expanded");
}

function getElemenetByClass(className) {
  const element = document.querySelector(className);
  return element;
}
