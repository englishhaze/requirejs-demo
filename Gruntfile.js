/**
 * Grunt file to deploy application files into a folder called deploy.
 * The folder will be cleared and recreated every time the task is run.
 */
module.exports = function(grunt) {

	// Configuration options go in here
	grunt.config.init({
		
		// copyFiles task options in here
		copyFiles : {
			options: {
				deployDirectory: 'deploy',
				manifest: ['index.html', 'stylesheets/', 'js/']
			},
		},
		
		// Enable reference to properties on named file by property (pkg)
		pkg: grunt.file.readJSON('package.json')	
	});
	
	
	/**
	 * Task to clean the deploy folder , create it again and copy files
	 */
	grunt.registerTask('deploy', 'Deploys files',
			['clean','createFolder', 'copyFiles', 'makeReadme']);
	
	
	/**
	 * Register a task to make the deploy directory
	 */
	grunt.registerTask('createFolder', 'Create the deploy folder', function() {
		// Use the deployDirectory config. option
		grunt.config.requires('copyFiles.options.deployDirectory');
		this.requires('clean');
		
		// Make the deploy directory with the built in grunt.file.mkdir task
		grunt.file.mkdir(grunt.config.get('copyFiles.options.deployDirectory'));
	});
	
	
	/**
	 * Register a task to clean up the deploy directory
	 */
	grunt.registerTask('clean', 'Delete the deploy folder and its contents', function() {
		// Use the deployDirectory config. option
		grunt.config.requires('copyFiles.options.deployDirectory');
		// Delete the deploy directory with the built in grunt.file.delete task
		grunt.file.delete(grunt.config.get('copyFiles.options.deployDirectory'));
	});
	
	
	/**
	 * Register a task to copy files to the working directory
	 */
	grunt.registerTask('copyFiles', function() {
		
		var files, deployDirectory;
		
		// This task is dependent on clean and createFolder tasks having run
		this.requires(['clean', 'createFolder']);
		
		//grunt.config.requires('copyFiles.options.manifest');
		//grunt.config.requires('copyFiles.options.deployDirectory');
		// alternative method to avoid hard coding task name
		this.requiresConfig(this.name + '.options.manifest');
		this.requiresConfig(this.name + '.options.deployDirectory');
		
		// Get configuration options
		//files = grunt.config.get('copyFiles.options.manifest');
		//deployDirectory = grunt.config.get('copyFiles.options.deployDirectory');
		// Alternative method to avoid hard coding 
		files = this.options().manifest;
		deployDirectory = this.options().deployDirectory;
		
		files.forEach(function(item) {
		  recursiveCopy(item, deployDirectory);	
		});
		
	});
	
	
	/**
	 * Register a task to create a readme.txt file
	 */
	grunt.registerTask('makeReadme', function() {
		
		// This task is dependent on clean and createFolder tasks having run
		this.requires(['clean', 'createFolder', 'copyFiles']);
		grunt.config.requires('copyFiles.options.deployDirectory');

		var deployDirectory = grunt.config.get('copyFiles.options.deployDirectory');

		// Make a readme.txt using properties from package.json
		var content = '<%=pkg.name %> version <%= pkg.version %>';
		content = grunt.template.process(content);
		grunt.file.write(deployDirectory + '/readme.txt', content);
		
	});
	
	
	/**
	 * Recursively copy files from folders
	 */
	var recursiveCopy = function(source, destination) {
		if(grunt.file.isDir(source)) {
			grunt.file.recurse(source, function(file) {
				recursiveCopy(file, destination);
			});
		} else {
			  grunt.log.writeln('Copying ' + source + ' to ' + destination);
			  grunt.file.copy(source, destination + '/' + source);
		};
	};
};


