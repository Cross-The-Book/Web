$(document).ready(function() {
    $('#search-form').submit(function(event) {
        event.preventDefault();
        const searchTerm = $('#search-input').val().toLowerCase();
        
        $('.article').each(function() {
            const title = $(this).data('title').toLowerCase();
            const author = $(this).data('author').toLowerCase();
            
            if (title.includes(searchTerm) || author.includes(searchTerm)) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    });
});