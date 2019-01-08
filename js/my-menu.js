function menuResponsive() {
  const navMenu = document.getElementById("menu");
  switch (navMenu.className) {
    case "box-nav-menu":
      navMenu.className += " responsive";
      break;
    default:
      navMenu.className = "box-nav-menu";
      break;
  }
}