/**
 * Application setup and entry point
 */

// Configure requireJS options here
requirejs.config({
    //By default load any module IDs from js/lib
    baseUrl: 'js/lib',
    //except, if the module ID starts with "app",
    //load it from the js/app directory. paths
    //config is relative to the baseUrl, and
    //never includes a ".js" extension since
    //the paths config could be for a directory.
    paths: {
        app: '../app'
    }
});

requirejs(['app/helpButton', 'app/ajaxButton'],
		function (helpButton, ajaxButton) {
		    // app/ajaxButton and the app/helpButton modules are all
		    // loaded and can be used here now.
			helpButton.wire();
			ajaxButton.wire();
		});