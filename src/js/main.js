import './lib/lib'

$('button').on('click', function () {
    $(this).toggleClass('active').toggleAttr('data-test', 'true')
});
