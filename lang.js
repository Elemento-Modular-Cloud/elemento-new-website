function changeLang(language, el) {
    var container = document.querySelector('.chooseLang').classList;
    el = el.classList;
    
    if (container.contains('open')) {
        container.remove('open');
        if (!el.contains('chosen')) {
            
            document.querySelector('.chooseLang .chosen').classList.remove('chosen');
            el.add('chosen');
            
            console.log(language + ' chosen')
            // your code
            
        }
        return;
    }
    
    container.add('open');
    
}