const element = document.getElementById('gallery-heading');
element.remove();

const searchElement = document.createElement("input");
searchElement.setAttribute('type', 'text');
searchElement.setAttribute('id', 'search');
searchElement.setAttribute('name', 'user_search');
searchElement.setAttribute('placeholder', 'Search');
searchElement.setAttribute('onkeypress', 'function(){ return this.value }');
searchElement.setAttribute('value', '');
document.getElementById('search-bar').appendChild(searchElement);

$(document).ready(function() {
    $('input').keypress(function(e) {
        let keyPessed = $(e).char;
        console.log(keyPressed);
        let text = document.getElementById('search').value;
        text = text.toUpperCase();
        // if (text.endsWith(`\b`)) {
        //     text.pop()
        // }
        
        $('a').each(function() {
            let varible = $(this).attr('data-title');
            if (varible) {
                console.log('varible ' + varible);
                varible = varible.toUpperCase();
                console.log('varible ' + varible);
                if (varible.includes(text) == true) {
                    $(this).css('display', 'inline');
                } else {
                    $(this).css('display', 'none');
                };
            };
        });
    });
});


// lightbox.option({
//     'alwaysShowNavOnTouchDevices': true
// });
