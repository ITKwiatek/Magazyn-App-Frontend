
function searchOrder() {

    var input = document.getElementById('searchProjectInput');
    var filter = input.value.toUpperCase();
    var elements = document.getElementsByClassName('orderName');
    var cards = document.getElementsByClassName('cardContainer');

    for(i=0; i<elements.length; i++) {
        text = elements[i].textContent.toUpperCase();
        if(text.indexOf(filter) > -1) {
            cards[i].style.display = "";
        } else {
            cards[i].style.display = "none";
        }
    }
}