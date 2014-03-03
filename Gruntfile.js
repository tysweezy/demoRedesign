module.exports = function(grunt) {
	grunt.initConfig({
		pkg : grunt.file.readJSON('package.json'),
		concat : {
			css : {
				src : [
					'css/*'
				],

				dest : 'css/production.css'
			},

			js : {
				src : [
					'js/main.js'
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
					'js/production.min.js' : ['js/production.js'],
					'js/unslider.min.js' : ['js/unslider.js']
				}
			}
		},
	});

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.registerTask('default', ['concat:css', 'cssmin:css',
		'concat:js', 'uglify:js']);

};