requirejs.config({
	paths: {
		backbone: 'lib/backbone',
		underscore: 'lib/underscore',
		jquery: 'lib/jquery-1.9.1.min'
	},
	shim: {
		'backbone': {
			deps: ['jquery', 'underscore'],
			exports: 'Backbone'
		},
		
		underscore: {
			exports: '_'
		}
	}
});

require([
	'app',
], function(){
});
