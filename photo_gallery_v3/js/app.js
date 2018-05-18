
// select and remove H1 element.
const element = document.getElementById('gallery-heading');
element.remove();

const searchElement = document.createElement("input");
searchElement.setAttribute('type', 'text');
searchElement.setAttribute('id', 'search');
searchElement.setAttribute('placeholder', 'Search');
searchElement.setAttribute('value', '');
searchElement.setAttribute('name', 'user_search');

// turn off auto complete features of computers.
searchElement.setAttribute('autocomplete', 'off');
searchElement.setAttribute('autocorrect', 'off');
searchElement.setAttribute('autocapitalize', 'off');
searchElement.setAttribute('spellcheck', 'false');

// add input element to the webpage.
document.getElementById('search-bar').appendChild(searchElement);

// show arrows on all mobile devices.
lightbox.option({
     'alwaysShowNavOnTouchDevices': true
});

$(document).ready(function() {
    // initialize text that searches the captions.
    let search_text = '';

    // initialize varible that tracts the location of the cursor.
    let index = 0;

    // initailize flag to tell if "special" keys are pressed.
    let flag = false;
    
    $('input').bind("touchend keypress keydown click", function ( event ) {
        
        // get a pressed key.
        let key_pressed = String.fromCharCode(event.which);
        
        // disable control key.
        if (event.ctrlKey) {
            event.preventDefault();
        }

        // disable command key on a mac.
        if (event.metaKey && (key_pressed != 91) && (key_pressed != 92)) {
            event.preventDefault();
        }
        
        if (event.type == 'keydown') {

            // if key pressed is backspace.
            if (event.keyCode == 8) {
                flag = true;

                // if not at the beginning or end of a line. remove character.
                if ((search_text.length > index) && (index > 0)) {
                    search_text = search_text.substring(0, index - 1) + search_text.substring(index);
                    index -= 1;
                } else

                // if at the end of a non null string.
                if ((search_text.length == index) && (index > 0)) {
                    index -= 1;
                    search_text = search_text.slice(0, index);
                }
            } else
            
            // if the enter key is pressed do nothing.
            if (event.keyCode == 13) {
                event.preventDefault();
                flag = true;
            } else 

            // if the home key or the up arrow key is pressed.
            // go to the beginning of the line.
            if ((event.keyCode == 36) || (event.keyCode == 38)) {
                index = 0;
                flag = true;
            } else

            // if the right arrow key is pressed.
            // move left.
            if ((event.keyCode == 37) && (index > 0)) {
                index -= 1;
                flag = true;
            } else

            // if the end or down arrow key is pressed.
            // go to the end of the line.
            if ((event.keyCode == 35) || (event.keyCode == 40)) {
                index = search_text.length;
                flag = true;
            } else 

            // if the right arrow key is pressed.
            // move right.
            if ((event.keyCode == 39) && (index < search_text.length)) {
                index += 1;
                flag = true;
            } else

            // if the delete key is pressed and cursor
            // not at end of line delete a character.
            if (event.keyCode == 46) {
                flag = true;
                if (index < search_text.length) {
                    search_text = search_text.substring(0, index) + search_text.substring(index + 1);
                }
            }    
        }
        
        if ((event.type == 'keypress') && (key_pressed !== '')) {
        
            // if the web browser is firefox fix issue
            if ((navigator.userAgent.search("Firefox") >= 0) && (flag)) {
                key_pressed = '';
                flag = false;
                index -= 1;
            }

            // add a character to the seach sstring a cursor location.
            search_text = search_text.slice(0, index) + key_pressed + search_text.slice(index);
            index += 1;
        }  
        
        // on mouse click clear the search field.
        if (event.type == 'click') {
            index = 0;
            search_text = '';
            document.getElementById('search').value = '';
        }
       
        // on finger touch clear the search field.
        if (event.type == 'touchend') {
            index = 0;
            search_text = '';
            document.getElementById('search').value = '';                        
        }

        // set the search string to upper case.
        search_text = search_text.toUpperCase();
        
        // search the caption string with the search stirng.
        // and set the proper display values for the images.
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

