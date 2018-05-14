const element = document.getElementById('gallery-heading');
element.remove();

const searchElement = document.createElement("input");
searchElement.setAttribute('type', 'text');
searchElement.setAttribute('id', 'search');
searchElement.setAttribute('name', 'user_search');
searchElement.setAttribute('placeholder', 'Search');
document.getElementById('search-bar').appendChild(searchElement);

lightbox.option({
    'alwaysShowNavOnTouchDevices': true
})

$('a').each(function() {
    let varible = $(this).attr('data-title');
    varible = varible.toUpperCase();
    $(this).css('display', 'inline');
});
