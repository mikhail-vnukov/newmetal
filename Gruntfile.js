module.exports = function(grunt) {
	 
	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		// Metadata.
		meta: {
			basePath: '.',
			assets: 'assets',
			scss: 'assets/scss/',
			js: 'assets/js/',
			deployPath: 'css/',
			name: 'newMetal',
			version: '0.0.1',	
		},
		 
		banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
		'<%= grunt.template.today("yyyy-mm-dd") %>\n' +
		'* Copyright (c) <%= grunt.template.today("yyyy") %> ',
		 
		// Task configuration.
		sass: {
			dist: {
				files: {
					'<%= meta.deployPath %>main.css': '<%= meta.scss %>main.scss'
				}
			}
		},
		 
		watch: {
			scripts: {
				files: [
					'<%= meta.scss %>/**/*.scss',
					'<%= meta.js %>/**/*.js',
				],
				tasks: ['sass', 'concat']
			},
			options: {
			  livereload: 35730,
			}
		},
		uglify: {
			options: {
				beautify: false
			},
			build: {
			  src: 'js/main.js',
			  dest: 'js/main.min.js'
			}
		},
		concat: {
		  js: {
		    src: ['<%= meta.js %>/vendor/*.js', '<%= meta.js %>/*.js'],
		    dest: 'js/main.js'
		  }
		},
		autoprefixer: {
			dist: {
				files: {
					'<%= meta.deployPath %>main.prefixed.css' : '<%= meta.deployPath %>main.css'
				}
			}
		},
		 
	});
	 
	// These plugins provide necessary tasks.
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-autoprefixer');


	// Default task.
	grunt.registerTask('default', ['sass', 'concat', 'uglify', 'autoprefixer']);
	 
};