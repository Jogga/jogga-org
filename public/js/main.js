requirejs.config({
	paths: {
		backbone: 'lib/backbone',
		underscore: 'lib/underscore',
		jquery: 'lib/jquery-1.9.1.min'
	},
//	shim: {
//		'backbone': {
//			deps: ['underscore', 'jquery'],
//			exports: 'backbone'
//		},
//		'underscore': {
//			exports: '_'
//		},
//		'jquery': {
//			exports: '$'
//		}
//	}
	shim: {
		'app': {
			deps: ['underscore', 'jquery', 'backbone'],
			exports: 'App'
		}
	}
});

require([
	'app',
], function(){
});
