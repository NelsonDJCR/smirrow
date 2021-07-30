$(document).ready(function() {
  
    // $('#exampleModal').modal('show')
});

$('.close-modal').click(function() {
    $('#modal-terms').modal('hide')
    $('#modal-recovery').modal('hide')
});

$('.open-modal-terms').click(function() {
    $('#modal-terms').modal('show')
});
$('.open-modal-recovery').click(function() {
    $('#modal-recovery').modal('show')
});
$('#submitButton').click(function() {
    $('#email').addClass('animate__animated animate__backOutLeft')
    $('#password').removeClass('d-none')
    $('#password').addClass('animate__animated animate__backInRight')
    $('#submitButton').addClass('animate__animated animate__shakeX')
    $('#submitButton').text('Login')

});

$('#btn-register').click(function() {
    $('#login').addClass('animate__fadeOutLeft')
    $('#type-register').removeClass('d-none')
    $('#type-register').removeClass('animate__fadeOutLeft')
    $('#type-register').removeClass('animate__fadeOutRight')
    $('#type-register').addClass('animate__fadeInRight')
});
$('#btn-redict-login').click(function() {
    $('#login').removeClass('  animate__fadeOutLeft')
    $('#login').addClass('  animate__fadeInLeft')
    $('#register').removeClass(' animate__fadeInRight')
    $('#register').addClass(' animate__fadeOutRight')
});

$('body').on('click', '.img-redirect', function() {
    $('#type-register').removeClass('animate__fadeInRight ')
    $('#type-register').addClass('animate__fadeOutLeft')
    $('#register').removeClass('d-none')
    $('#register').addClass(' animate__fadeInRight')
    $('#register').removeClass('animate__fadeOutRight')
});
$('#btn-redict-login-from-select').click(function() {
    $('#login').removeClass('  animate__fadeOutLeft')
    $('#login').addClass('  animate__fadeInLeft')
    
    $('#type-register').removeClass('animate__fadeInRight ')
    $('#type-register').addClass('animate__fadeOutRight')
});
