function resize() {
  window.addEventListener("resize", navigationRealocationInHeader);
}

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

function navigationRealocationInHeader() {
  const header = document.querySelector("header .wrapper");
  const navigation = document.getElementById("navigation");
  const wrapper = document.querySelector("#navigation > div");
  const button = document.querySelector("header .styled-button");

  if (window.innerWidth >= 1024) {
    wrapper.classList.remove("wrapper");

    header.insertBefore(navigation, button);
    console.log("bao");
  } else {
    wrapper.classList.add("wrapper");
    body.insertBefore(navigation, main);
    console.log("opa");
  }
}

navigationRealocationInHeader();
resize();
