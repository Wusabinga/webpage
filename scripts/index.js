"use strict";
const modalBtn = document.querySelector('.modal__button');
const modalBackdrop = document.querySelector('.modal__backdrop');
const getCookie = function getCookie(name) {
    const nameValue = name + '=';
    const decodedCookie = decodeURIComponent(document.cookie);
    const splittedCookies = decodedCookie.split(';');
    for (let i = 0; i < splittedCookies.length; i++) {
        let cookie = splittedCookies[i];
        while (cookie.charAt(0) === ' ') {
            cookie = cookie.substr(1);
        }
        if (cookie.indexOf(name) === 0) {
            return cookie.substring(nameValue.length, cookie.length);
        }
    }
    return '';
};
const checkCookie = function checkCookie(name) {
    const firstVisitCookie = getCookie(name);
    if (firstVisitCookie === 'false') {
        if (modalBackdrop) {
            modalBackdrop.style.display = 'none';
        }
    }
    else {
        document.cookie = 'firstVisit = false';
    }
};
checkCookie('firstVisit');
if (modalBtn && modalBackdrop) {
    modalBtn.addEventListener('click', () => {
        modalBackdrop.style.display = 'none';
    });
}
let anne;
//# sourceMappingURL=index.js.map