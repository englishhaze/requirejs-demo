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

// Start the main app logic.
requirejs(['jquery', 'app/module'],
function   ($,        module) {
    //jQuery, app/module are all loaded and can be used here now.
	
});
