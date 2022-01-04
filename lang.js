const langitems_en = document.querySelectorAll("[lang=en]");
const langitems_it = document.querySelectorAll("[lang=it]");
const container = document.querySelector('.chooseLang').classList;

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
}

function useIT() {
    makeInvisible(langitems_en);
    makeVisible(langitems_it);
}

function changeLang(language, el) {    
    el = el.classList;
    if (container.contains('open')) {
        container.remove('open');
        if (!el.contains('chosen')) {
            
            document.querySelector('.chooseLang .chosen').classList.remove('chosen');
            el.add('chosen');
            
            console.log(language + ' chosen')
            
            if(language === "it"){
                useIT();
            }

            if(language === "en"){
                useEN();
            }
            
        }
        return;
    }
    container.add('open');
}

useEN();
