function menuToggle() {
    let x = document.getElementById("menu-content");
    let openIcon = document.getElementById("menu-open");
    let closeIcon = document.getElementById("menu-close");

    if (x.style.display === "block") {
      x.style.display = "none";
      openIcon.style.display = "block";
      closeIcon.style.display = "none";
    } else {
      x.style.display = "block";
      openIcon.style.display = "none";
      closeIcon.style.display = "block";
    }
  }