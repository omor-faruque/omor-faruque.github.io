const contentUrl = "../content/data.json";

function toggleMenu() {
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



function resetMobileMenu() {
  document.getElementById("menu-content").style.display = "none";;
  document.getElementById("menu-open").style.display = "block";
  document.getElementById("menu-close").style.display = "none";
}



function checkWindowWidth() {
  // Get the current window width
  const windowWidth = window.innerWidth;

  // Check if the window width is greater than 690px
  if (windowWidth > 690) {
    resetMobileMenu();
  }
}


document.addEventListener('DOMContentLoaded', function () {
  // Initial check on page load
  checkWindowWidth();

  // Add resize event listener
  window.addEventListener('resize', function () {
    checkWindowWidth();
  });

});


function updatePageContent() {
  fetch(contentUrl)
    .then(response => response.json())
    .then(data => {
      updateSkills(data.skills);
    })
    .catch(error => {
      console.error('Error fetching JSON:', error);
    })
}



