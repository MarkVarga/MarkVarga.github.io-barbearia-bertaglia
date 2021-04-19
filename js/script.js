/**NAV SCRIPTS START**/

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function openMenu() {
  let x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
/**NAV SCRIPTS END**/

/**GLIDER SCRIPTS START**/
window.addEventListener("load", function () {
  new Glider(document.querySelector(".glider"), {
    slidesToShow: 1,
    slidesToScroll: 1,
    scrollLock: true,
    dots: ".dots",
    draggable: true,
    arrows: {
      prev: ".glider-prev",
      next: ".glider-next",
    },
  });
});
/**GLIDER SCRIPTS END**/

// Initialize and add the map
function initMap() {
  // The location of barbearia
  const barbearia = { lat: -22.017838318329957, lng: -47.89256216576925 };
  // The map, centered at barbearia
  const map = new google.maps.Map(document.getElementById("googleMap"), {
    zoom: 18,
    center: barbearia,
  });
  // The marker, positioned at barbearia
  const marker = new google.maps.Marker({
    position: barbearia,
    map: map,
  });
}

/**SERVICES SECTION START**/
const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActiveClasses();
    panel.classList.add("active");
  });
});

function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}
/**SERVICES SECTION END**/
