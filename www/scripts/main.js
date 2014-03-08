requirejs.config({
    baseUrl: 'scripts',
    paths: {
        'jquery': 'lib/jquery-1.10.1.min',
        'bootstrap': 'lib/bootstrap.min'
    },
    shim: {
        'jquery': {
            exports: '$'
        },
        'bootstrap': {
            deps: ['jquery']
        }
    }
});

define(['jquery', 'bootstrap'], function($) {
    $('#myOutput').text("If you see this then the RequireJS javascript appears to be working ʕ•(ㅅ)•ʔ");
    $('#myButton').show();
});