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
    let index = -1;

    $('input').bind("keypress keydown", function ( event ) {
        
        let key_pressed = String.fromCharCode(event.which);

        if (event.type == 'keydown') {
            if (event.keyCode == 8) {
                search_text = search_text.slice(0, index - 1) + search_text.slice(index + 1);
                index -= 1;
            } else
            if (event.keyCode == 13) {
                event.preventDefault();
                key_pressed = null;
            } else 
            if ((event.keyCode == 36) || (event.keyCode == 38)) {
                index = 0;
            } else
            if (event.keyCode == 37) {
                index -= 1;
            } else
            if ((event.keyCode == 35) || (event.keyCode == 40)) {
                index = search_text.length;
            } else 
            if ((event.keyCode == 39) && (index < search_text.lenght)){
                index += 1
            }
        }

        if (event.type == 'keypress') {
            index += 1;
            console.log(search_text);
            search_text = search_text.slice(0, index) + key_pressed + search_text.slice(index);           
            console.log(search_text);
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

