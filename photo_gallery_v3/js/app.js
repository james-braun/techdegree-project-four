const element = document.getElementById('gallery-heading');
element.remove();

const searchElement = document.createElement("input");
searchElement.setAttribute('type', 'text');
searchElement.setAttribute('id', 'search');
searchElement.setAttribute('placeholder', 'Search');
searchElement.setAttribute('value', '');
document.getElementById('search-bar').appendChild(searchElement);

// lightbox.option({
//      'alwaysShowNavOnTouchDevices': true
// });

$(document).ready(function() {
    let text = '';
    $('input').keydown(function ( event ) {
        let keyPressed = String.fromCharCode(event.which);
        if (event.which == 8) {
            text = text.slice(0, -1);
        } else {
            text = text + keyPressed.toUpperCase();
        };
    
        
        $('a').each(function() {
            let varible = $(this).attr('data-title');
            if (varible) {
                varible = varible.toUpperCase();
                if (varible.includes(text) === true) {
                    $(this).css('display', 'inline');
                } else {
                    $(this).css('display', 'none');
                };
            };
        });
    });
});

