var sass = require('node-sass');

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
    sass: {
			dist: {
				files: {
          'public/stylesheets/style.css' : 'sass/style.scss'
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
				tasks: ['grunt-sass']
			}
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.registerTask('default', ['jshint', 'sass', 'shell:launchServer']);
  grunt.registerTask('noserver', ['jshint', 'sass']);

};
