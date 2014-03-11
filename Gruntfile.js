module.exports = function(grunt) {
	grunt.initConfig({
		pkg : grunt.file.readJSON('package.json'),
		concat : {
			css : {
				src : [
					'css/normalize.css',
					'css/style.css',
					'css/owl.theme.css',
					'css/owl.transitions.css',
					'css/owl.carousel.css'
				],

				dest : 'css/production.css'
			},

			js : {
				src : [
					'js/main.js',
					'js/slider.js'
				],

				dest : 'js/production.js'
			}
		},
		
		cssmin : {
			css : {
				src : 'css/production.css',
				dest : 'css/production.min.css'
			}
		},

		uglify : {
			js : {
				files : {
					'js/production.min.js' : ['js/production.js']
				}
			}
		},

		watch : {
			files: ['css/*', 'js/*'],
			tasks: ['concat', 'cssmin', 'uglify']
		},
	});

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.registerTask('default', ['concat:css', 'cssmin:css',
		'concat:js', 'uglify:js']);



};