const mobileNavBtn = document.querySelector('.fa-bars');
const mobileMainNav = document.querySelector('.mobile-main-nav');
const dropDownBtn = document.querySelector('.mobile');
const dropDownContent = document.querySelector('.mobile-content');
const dropDownCross = document.getElementById('nav_close');

function displayMobileNav() {
	mobileMainNav.classList.toggle('display-flex');
}

function dropdownTest() {
	dropDownContent.classList.toggle('display-block');
}

function navClose() {
	if (dropDownContent.classList.contains('display-block')) {
		mobileMainNav.classList.remove('display-flex');
		dropDownContent.classList.remove('display-block');
	} else if (
		!dropDownContent.classList.contains('displayblock') &&
		mobileMainNav.classList.contains('display-flex')
	) {
		mobileMainNav.classList.remove('display-flex');
	} else {
		return;
	}
}

mobileNavBtn.addEventListener('click', displayMobileNav);
dropDownBtn.addEventListener('click', dropdownTest);
dropDownCross.addEventListener('click', navClose);
