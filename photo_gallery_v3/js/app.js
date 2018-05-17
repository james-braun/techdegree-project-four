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
    let index = 0;
    $('input').bind("keypress keydown click", function ( event ) {
        
        let key_pressed = String.fromCharCode(event.which);

        if (event.type == 'keydown') {
            if (event.keyCode == 8) {
                if ((search_text.length > index) && (index > 0)) {
                    search_text = search_text.substring(0, index) + search_text.substring(index + 1);
                    index -= 1;
                } else
                if ((search_text.length == index) && (index > 0)) {
                    index -= 1;
                    search_text = search_text.slice(0, index);
                }
            } else
            if (event.keyCode == 13) {
                event.preventDefault();
                key_pressed = null;
            } else 
            if ((event.keyCode == 36) || (event.keyCode == 38)) {
                index = 1;
            } else
            if ((event.keyCode == 37) && (index > 0)) {
                index -= 1;
            } else
            if ((event.keyCode == 35) || (event.keyCode == 40)) {
                index = search_text.length;
            } else 
            if ((event.keyCode == 39) && (index < search_text.length)) {
                index += 1
            } else
            if (event.keyCode == 46) {
                if (index < search_text.length) {
                    search_text = search_text.substring(0, index) + search_text.substring(index + 1);
                }
            }
        }
        
        if (event.type == 'keypress') {
            search_text = search_text.slice(0, index) + key_pressed + search_text.slice(index);           
            index += 1;
        }  
                
        if (event.type == 'click'){
            let val = document.getElementById('search').value;
            index = val.slice(0, document.getElementById('search').selectionStart).length;
        }
       
        search_text = search_text.toUpperCase();
        console.log('index ' + index + ' search text ' + search_text + ' length ' + search_text.length);
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

