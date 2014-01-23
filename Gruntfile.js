"use strict";

module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        jshint : {
            options : {
                jshintrc : "jshintrc.json"
            },
            all : [ "Gruntfile.js", "tasks/**/*.js" ]
        },
        clean : {
            test : ["tmp"]
        },
        nodeunit: {
            tests: ["test/*_test.js"]
        },
        targz: {
            sqlite3: {
                files: {
                    "tmp":   "test/input/sqlite3-nw.tgz"
                }
            }
        }
    });

    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.loadNpmTasks("grunt-contrib-nodeunit");
    grunt.loadNpmTasks("grunt-contrib-clean");

    // Load local tasks.
    grunt.loadTasks("tasks");

    // Default task.
    grunt.registerTask("default", [ "jshint" ]);

    grunt.registerTask("test", ["jshint", "clean", "targz", "nodeunit"]);

};