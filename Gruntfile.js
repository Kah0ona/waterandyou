// *************************************
//
//   Gruntfile
//   -> Grunt's main configuration
//
// *************************************

module.exports = function (grunt) {

  // -------------------------------------
  // Load all grunt tasks from util/grunt
  // -------------------------------------

  require('load-grunt-config')(grunt, {
    configPath: process.cwd() + '/util/grunt'
  });

  // -------------------------------------
  // Register the grunt tasks
  // -------------------------------------
  grunt.registerTask('develop', 'Watches two directories, and copies its output to a target dist directory.', [
	  'clean:dist',
	  'copy:all',
	  'watch'
  ]);

  grunt.registerTask('deploy', 'Deploys the whole dist dir to the server.', [
	  'clean:dist',
	  'copy:all',
	  'rsync:deploy'

  ]);
};



