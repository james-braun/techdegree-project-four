const element = document.getElementById('gallery-heading');
element.remove();

const searchElement = document.createElement("input");
searchElement.setAttribute('type', 'text');
searchElement.setAttribute('id', 'search');
searchElement.setAttribute('placeholder', 'Search');
searchElement.setAttribute('value', '');
searchElement.setAttribute('name', 'user_search');
searchElement.setAttribute('autocomplete', 'off');
document.getElementById('search-bar').appendChild(searchElement);

lightbox.option({
     'alwaysShowNavOnTouchDevices': true
});

$(document).ready(function() {
    let search_text = '';
    $('input').bind("keypress keydown", function ( event ) {
        
        let key_pressed = String.fromCharCode(event.which);

        if (event.type == 'keydown') {
            console.log(event.keyCode);
            if (event.keyCode == 8) {
                search_text = search_text.slice(0, -1);
            }
            if ((event.keyCode == 13) || (event.keyCode == 36) || (event.keyCode == 37) || (event.keyCode == 38)) {
                event.preventDefault();
                key_pressed = null;
            } 
        }

        if (event.type == 'keypress') {
            search_text = search_text + key_pressed;
        }      
       
        search_text = search_text.toUpperCase();
        
        $('a').each(function() {
            let caption_string = $(this).attr('data-title');
            if (caption_string) {
                caption_string = caption_string.toUpperCase();
                if (caption_string.includes(search_text) === true) {
                    $(this).css('display', 'inline');
                } else {
                    $(this).css('display', 'none');
                }
            }
        });
    });
});

