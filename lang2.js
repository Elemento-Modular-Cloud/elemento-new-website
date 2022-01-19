const langitems_en = document.querySelectorAll("[lang=en]");
const langitems_it = document.querySelectorAll("[lang=it]");
const container = document.querySelector('.chooseLang').classList;
const it_btn = document.getElementById('it-lang').classList;
const en_btn = document.getElementById('en-lang').classList;
const contentlight = document.getElementById('content-light');
const contentdark = document.getElementById('content-dark');

function loadPage(href){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", href, false);
    xmlhttp.send();
    return xmlhttp.responseText;
}

var en_page = '';
var it_page = '';

function makeVisible(items) {
    items.forEach(item => {
        item.classList.remove("lang-disable")
    });
}

function makeInvisible(items) {
    items.forEach(item => {
        item.classList.add("lang-disable")
    });
}

function useEN() {
    makeInvisible(langitems_it);
    makeVisible(langitems_en);
    if(en_page === ''){
        console.debug("Lazy loading EN page");
        en_page = loadPage("content_en.html");
    }

    contentlight.innerHTML = '';
    contentdark.innerHTML = '';
    contentlight.innerHTML = en_page;
    contentdark.innerHTML = en_page;
    en_btn.add('chosen');
    it_btn.remove('chosen');
}

function useIT() {
    makeInvisible(langitems_en);
    makeVisible(langitems_it);
    if(it_page === ''){
        console.debug("Lazy loading IT page");
        it_page = loadPage("content_it.html");
    }

    contentlight.innerHTML = '';
    contentdark.innerHTML = '';
    contentlight.innerHTML = it_page;
    contentdark.innerHTML = it_page;
    it_btn.add('chosen');
    en_btn.remove('chosen');
}

function changeLang(language) {
    if (container.contains('open')) {
        container.remove('open');
        it_btn.remove('chosen');
        en_btn.remove('chosen');
        if(language === "it"){
            useIT();
        }

        if(language === "en"){
            useEN();
        }
        return;
    }
    container.add('open');
}

var userLang = navigator.language || navigator.userLanguage;
console.log(userLang)
userLang.includes("it")?useIT():useEN();
