$( document ).ready(function() {
    
    $('#contact-form').submit(function(e) {
        var name    = document.getElementById('recipient-name')
        var email   = document.getElementById('recipient-mail')
        var message = document.getElementById('recipient-message')

        // alert("variables cargadas")
    
        if (!name.value || !email.value || !message.value) {
        alertify.error("Please check your data");
        return false;
        } else {
        // $.ajax({
        //     method: 'POST',
        //     url: 'https://formspree.io/info@gabobigale.dev',
        //     data: $('#contact-form').serialize(),
        //     datatype: 'json'
        // });
        e.preventDefault();
        $(this).get(0).reset();
        alertify.success("Message sent");
        }
    });
});