module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      files: ['Gruntfile.js', 'routes/*.js', 'modules/*.js'],
      options: {
        globals: {
          jQuery: true
        }
      }
    },
    compass: {
			dist: {
				options: {
					sassDir: 'sass',
					cssDir: 'public/stylesheets'
				}
			}
		},
    shell: {
      launchServer: {
        command: 'npm start'
      }
    },
    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint'],
      css: {
				files: '**/*.scss',
				tasks: ['compass']
			}
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['jshint', 'compass', 'shell:launchServer']);
  grunt.registerTask('noserver', ['jshint', 'compass']);

};
