function sendMessage() {
    console.log('hello world');
}

function validateForm() {
    var valid = true;
    $('#name').html(function () {
        if(!$(this)[0].validity.valid) {
            var message = $(this)[0].validationMessage;
            $('#nameHelpBlock').html(function () {
                $(this)[0].innerHTML = message;
            });
            valid = false;
        }
    });
    $('#email').html(function () {
        if(!$(this)[0].validity.valid) {
            var message = $(this)[0].validationMessage;
            $('#emailHelpBlock').html(function () {
                $(this)[0].innerHTML = message;
            });
            valid = false;
        }
    });
    $('#message').html(function () {
        if(!$(this)[0].validity.valid) {
            var message = $(this)[0].validationMessage;
            $('#messageHelpBlock').html(function () {
                $(this)[0].innerHTML = message;
            });
            valid = false;
        }
    });
    return valid;
}

function cleanErrors() {
    $('#messageHelpBlock').html(function () {
        $(this)[0].innerHTML = '';
    });
    $('#emailHelpBlock').html(function () {
        $(this)[0].innerHTML = '';
    });
    $('#nameHelpBlock').html(function () {
        $(this)[0].innerHTML = '';
    });
}

$('#send_button').click(function () {

    cleanErrors();
    // sendMessage();
    if(validateForm()) {
        var data = {};
        $('#name').text(function () {
            data.name = $(this)[0].value;
        });
        $('#email').text(function () {
            data.email = $(this)[0].value;
        });
        $('#message').text(function () {
            data.message = $(this)[0].value;
        });
        $.post('http://localhost:3000/message', data, function (err, info) {
           alert('message sended');
           console.log(err);
           console.log(info);
        });
    }
});