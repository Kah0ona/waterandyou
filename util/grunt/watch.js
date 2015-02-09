// -------------------------------------
// Grunt watch
// -------------------------------------

module.exports = {

  // ----- Watch tasks ----- //
  all: {
    files: [
      'fixit_app/*',
	  'fixit_skin/*',
	],
    tasks: [
	  'clean:dist',
      'copy:all',
      'rsync:deploy'
    ]
  },
};

