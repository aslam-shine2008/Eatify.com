function openMenu() {
    document.getElementById("sideMenu").classList.add("active");
    document.getElementById("overlay").classList.add("active");

    // Disable body scroll
    document.body.style.overflow = "hidden";
}

function closeMenu() {
    document.getElementById("sideMenu").classList.remove("active");
    document.getElementById("overlay").classList.remove("active");

    // Enable body scroll
    document.body.style.overflow = "auto";
}

// ESC key press → Close Menu
document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        closeMenu();
    }
});

// Close menu when any menu link is clicked
document.querySelectorAll(".menu-content a").forEach(link => {
    link.addEventListener("click", function() {
        closeMenu();
    });
});
function scrolltopartner() {
    document.getElementsById("partners").scrollIntoView
}