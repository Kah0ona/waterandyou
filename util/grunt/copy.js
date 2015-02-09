// -------------------------------------
// Grunt copy
// -------------------------------------

module.exports = function (grunt) {

  return {
    // ----- Copy code files ----- //
    all: {
      files: [
		  {
			cwd: 'fixit_app/',
			src: '**',
			dest: 'dist/htdocs/app/design/frontend/unique',
			expand: true
		  }, {
		  
			cwd: 'fixit_skin/',
			src: '**',
			dest: 'dist/htdocs/skin/frontend/unique',
			expand: true
		  }
  	  ]
    }
  }
}; 

