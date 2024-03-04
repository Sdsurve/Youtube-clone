var menuBtn = document.querySelector("menuBtn");
var sidebar = document.querySelector("sidebar");

menuBtn.onclick = function() {
    sidebar.classList.toggle('small-sidebar');
}