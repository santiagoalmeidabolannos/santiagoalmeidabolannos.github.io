function validateForm() {
    var valid = true;

    var $name = $('#name');
    var $email = $('#email');
    var $message = $('#message');

    if(!$name.prop('validity').valid) {
        $('#nameHelpBlock').html($name.prop('validationMessage'));
        valid = false;
    }
    if(!$email.prop('validity').valid) {
        $('#emailHelpBlock').html($email.prop('validationMessage'));
        valid = false;
    }
    if(!$message.prop('validity').valid) {
        $('#messageHelpBlock').html($message.prop('validationMessage'));
        valid = false;
    }

    return valid;
}

function cleanErrors() {
    $('#messageHelpBlock').html('');
    $('#emailHelpBlock').html('');
    $('#nameHelpBlock').html('');
}

$('#send_button').click(function (ev) {
    ev.preventDefault();
    cleanErrors();

    if(validateForm()) {
        var data = {
            name: $('#name').val(),
            email: $('#email').val(),
            message: $('#message').val()
        };
        // i am working on my digital ocean droplet
        alert('I am working on my Digital Ocean droplet, please contact me using my email address.')
        $.post('http://localhost:3000/message', data, function (data, status) {
           if(status === 'success') {
               $('#confirmModal').modal();
           }
           else {
               console.log('Error on post request!!!');
           }
        });
    }
});