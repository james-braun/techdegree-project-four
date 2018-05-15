const element = document.getElementById('gallery-heading');
element.remove();

const searchElement = document.createElement("input");
searchElement.setAttribute('type', 'text');
searchElement.setAttribute('id', 'search');
searchElement.setAttribute('name', 'user_search');
searchElement.setAttribute('placeholder', 'Search');
searchElement.setAttribute('onkeypress', 'getInput()');
searchElement.setAttribute('value', '');
document.getElementById('search-bar').appendChild(searchElement);

lightbox.option({
    'alwaysShowNavOnTouchDevices': true
})

function getInputs() {
    return 'mountain';
}


let inputString = getInputs().toUpperCase();
$('a').each(function() {
    let varible = $(this).attr('data-title').toUpperCase();
    if (varible.includes(inputString) === true) {
        $(this).css('display', 'inline');
    } else {
        $(this).css('display', 'none');
    }
});


