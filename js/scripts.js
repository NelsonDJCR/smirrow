$(document).ready(function() {
  
    $('#exampleModal').modal('show')
});

$('#openmodal').click(function() {
    $('#moodal').modal('show')
});
$('#submitButton').click(function() {
    $('#email').addClass('animate__animated animate__backOutLeft')
    $('#password').removeClass('d-none')
    $('#password').addClass('animate__animated animate__backInRight')
    $('#submitButton').addClass('animate__animated animate__shakeX')
    $('#submitButton').text('Login')

});



$('#btn-register').click(function() {
    $('#register').removeClass('d-none')
    $('#register').addClass(' animate__fadeInRight')
    $('#login').addClass('  animate__fadeOutLeft')
    $('#register').removeClass(' animate__fadeOutRight')
});
$('#btn-redict-login').click(function() {
    
    $('#login').removeClass('  animate__fadeOutLeft')
    $('#login').addClass('  animate__fadeInLeft')
    $('#register').removeClass(' animate__fadeInRight')
    $('#register').addClass(' animate__fadeOutRight')

});