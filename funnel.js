const discover_page = document.getElementById('discover').classList;
const invest_page = document.getElementById('invest').classList;

function toggleDiscover() {
    discover_page.toggle("visible-scroller-page")
}

function closeDiscover() {
    discover_page.remove("visible-scroller-page")
}

function toggleInvest() {
    invest_page.toggle("visible-scroller-page")
}

function closeInvest() {
    invest_page.remove("visible-scroller-page")
}
