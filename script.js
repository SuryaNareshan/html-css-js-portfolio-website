function toggleMenu() {
    // Targeting menu links from html file. Defining both constants.
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");

    menu.classList.toggle("open")
    icon.classList.toggle("open")

}