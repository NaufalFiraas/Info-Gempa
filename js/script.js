const toggleHeading = document.getElementsByClassName('toggle')[0];
const headingMenu = document.getElementsByClassName('heading-menu')[0];

toggleHeading.addEventListener('click', function () {
    this.classList.toggle('clicked');
    headingMenu.classList.toggle('clicked');
});