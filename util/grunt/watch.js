// -------------------------------------
// Grunt watch
// -------------------------------------

module.exports = {

  // ----- Watch tasks ----- //
  all: {
    files: [
      'fixit_app/**',
	  'fixit_skin/default/css/*',
	],
    tasks: [
	  'clean:dist',
      'copy:all',
      'rsync:deploy'
    ]
  },
};

