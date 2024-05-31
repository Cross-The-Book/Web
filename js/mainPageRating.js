$(document).ready(function() {
    $('#rate-book-form').submit(function(event) {
        event.preventDefault();
        const rating = $('#rating').val();
        $('#user-rating').text(`내 평점: ${rating}`);
    });
});

