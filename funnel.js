const discover_page = document.getElementById('discover').classList;

function toggleDiscover() {
    discover_page.toggle("visible-scroller-page")
}

function closeDiscover() {
    discover_page.remove("visible-scroller-page")
}
