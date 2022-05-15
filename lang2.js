const langitems_en = document.querySelectorAll("[lang=en]");
const langitems_it = document.querySelectorAll("[lang=it]");
const container = document.querySelector('.chooseLang').classList;
const it_btn = document.getElementById('it-lang').classList;
const en_btn = document.getElementById('en-lang').classList;
const contentlight = document.getElementById('content-light');
const contentdark = document.getElementById('content-dark');
const investlight = document.getElementById('invest-light');
const investdark = document.getElementById('invest-dark');
const xmlhttp = new XMLHttpRequest();

function getHTML(url) {
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open('get', url, true);
        xhr.onload = function () {
            var status = xhr.status;
            if (status == 200) {
                resolve(xhr.responseText);
            } else {
                reject(status);
            }
        };
        xhr.send();
    });
}

var en_content_page = '';
var it_content_page = '';
var en_invest_page = '';
var it_invest_page = '';

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

async function useEN() {
    makeInvisible(langitems_it);
    makeVisible(langitems_en);
    if(en_content_page === ''){
        console.debug("Lazy loading EN page");
        en_content_page = await getHTML("content_en.html");
    }
    if(en_invest_page === ''){
        console.debug("Lazy loading EN page");
        en_invest_page = await getHTML("invest_en.html");
    }

    contentlight.innerHTML = '';
    contentdark.innerHTML = '';
    contentlight.innerHTML = en_content_page;
    contentdark.innerHTML = en_content_page;
    investlight.innerHTML = en_invest_page;
    investdark.innerHTML = en_invest_page;
    en_btn.add('chosen');
    it_btn.remove('chosen');
}

async function useIT() {
    makeInvisible(langitems_en);
    makeVisible(langitems_it);
    if(it_content_page === ''){
        console.debug("Lazy loading IT page");
        it_content_page = await getHTML("content_it.html");
    }
    if(it_invest_page === ''){
        console.debug("Lazy loading IT page");
        it_invest_page = await getHTML("invest_it.html");
    }

    contentlight.innerHTML = '';
    contentdark.innerHTML = '';
    contentlight.innerHTML = it_content_page;
    contentdark.innerHTML = it_content_page;
    investlight.innerHTML = it_invest_page;
    investdark.innerHTML = it_invest_page;
    it_btn.add('chosen');
    en_btn.remove('chosen');
}

async function changeLang(language) {
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
