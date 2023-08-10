const sidebar = document.querySelector(".sidebar");
const closeBtn = document.querySelector(".close-btn");
const sidebarToggle = document.querySelector(".sidebar-toggle");

sidebarToggle.addEventListener("click", function() {
    sidebar.classList.toggle("show-sidebar")
})

closeBtn.addEventListener("click", function() {
    sidebar.classList.remove("show-sidebar")
})