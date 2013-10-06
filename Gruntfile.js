'use strict';

module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        
        connect: {
            livereload: {
                options: {
                    port:9001
                }
            }
        },
        watch: {
            files: ['*.css', '*.html', '*.js'],
            tasks: [],
            options: {
                livereload: true
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['connect','watch']);

};