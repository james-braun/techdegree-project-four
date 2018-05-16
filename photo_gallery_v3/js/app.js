const element = document.getElementById('gallery-heading');
element.remove();

const searchElement = document.createElement("input");
searchElement.setAttribute('type', 'text');
searchElement.setAttribute('id', 'search');
searchElement.setAttribute('placeholder', 'Search');
searchElement.setAttribute('value', '');
document.getElementById('search-bar').appendChild(searchElement);

lightbox.option({
     'alwaysShowNavOnTouchDevices': true
});

$(document).ready(function() {
    let search_text = '';
    $('input').bind("keypress keydown", function ( event ) {
        // get a single character from the keyboard/
        let key_pressed = String.fromCharCode(event.which);

        // if key pressed is backspace remove a 
        // letter from the search string.
        // else add it to the string.
        if (event.type == 'keydown') {
            if (event.keyCode == 8) {
                search_text = search_text.slice(0, -1);
            } 
        }

        if (event.type == 'keypress') {
            if (key_pressed.match(/[^A-Z][^,][^.][^!][^ ]/) === null) {
                search_text = search_text + key_pressed;
            }
        }            
        // if key pressed is a number don't capitalize
        // it otherwise do.
        console.log(event.keyCode);
        console.log(key_pressed.match(/[^A-Z][^,][^.][^!][^ ]/));
        // if (key_pressed.match(/[^0-9]/) === null) {
        //     search_text = search_text.toUpperCase();
        // }
        console.log(search_text);
        // get capyion strings from anchor element
        // and test against search text and turn
        // image display on and off accordingly.
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

