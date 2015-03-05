require.config({
    baseUrl: '/assets/scripts',
    paths: {
        'angular': '../vendor/angular/angular',
        'uiRouter': '../vendor/ui-router/release/angular-ui-router',
        'ngDialog': '../vendor/ngDialog/js/ngDialog',
        'jquery': '../vendor/jquery/dist/jquery',
        'domReady': '../vendor/requirejs-domready/domReady',
        'ngResource': '../vendor/angular-resource/angular-resource',
    },
    shim: {
        'angular': {
            exports: 'angular'
        },
        'uiRouter':{
            deps: ['angular']
        },
        'ngDialog': {
            deps: ['angular']
        },
        'ngResource': {
            deps: ['angular']
        }
    },
    deps: [
        './bootstrap'
    ]
});