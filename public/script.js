//deklarasi var
const header = document.querySelector('header')
const fixnav = header.offsetTop;
const hamburger = document.querySelector('#hamburger-btn');
const navigation = document.querySelector('#nav-menu');
const menu = document.querySelector(".menu");
const toggle = document.querySelector(".toggle");

toggle.addEventListener("click", () => {
    menu.classList.toggle("active");
})

//navbar fixed
window.onscroll = function () {

    if (window.pageYOffset > fixnav) {
        header.classList.add('navbar-fixed')
        // navigation.classList.add('navbar-fixed')
    } else {
        header.classList.remove('navbar-fixed')
        // navigation.classList.remove('navbar-fixed')
    }
}

//tombol hamburger && navigation
hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('hamburger-active');
    navigation.classList.toggle('hidden');

}
);
function validate() {
    let a = document.forms["form"]["email"].value;
    let b = document.forms["form"]["password"].value;
    let c = document.forms["form"]["repeat_password"].value;
    let d = document.forms["form"]["first_name"].value;
    let e = document.forms["form"]["last_name"].value;
    let f = document.forms["form"]["phone"].value;
    let g = document.forms["form"]["company"].value;
    let alert_success = document.querySelector("#success_alert");
    let alert_fail = document.querySelector("#fail_alert");
    if (a == "" || b == "" || c == "" || d == "" || e == "" || f == "" || g == "") {
        alert_failt.classList.remove("hidden");
        alert_failt.classList.add('alerts');
    } else {
        alert_success.classList.remove("hidden");
        alert_success.classList.add('alerts');
        return false;
    }

}

function moveservice() {
    var service = document.querySelector('#service');
    service.scrollIntoView({ behavior: 'smooth' })
}


