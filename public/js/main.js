requirejs.config({
	paths: {
		backbone: 'lib/backbone',
		underscore: 'lib/underscore',
		jquery: 'lib/jquery-1.9.1.min'
	},
	shim: {
		'backbone': {
			deps: ['underscore'],
			exports: 'backbone'
		},
		'underscore': {
			exports: '_'
		}
	}
});

requirejs(['backbone', 'jquery'],
function(backbone, $){
	// Initialize...
	console.log('energy!');
});
