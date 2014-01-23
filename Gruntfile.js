"use strict";

module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		jshint : {
			options : {
				jshintrc : "jshintrc.json"
			},
			all : [ "Gruntfile.js", "tasks/**/*.js" ]
		}
	});

	grunt.loadNpmTasks("grunt-contrib-jshint");

	// Load local tasks.
	grunt.loadTasks("tasks");

	// Default task.
	grunt.registerTask("default", [ "jshint" ]);

};