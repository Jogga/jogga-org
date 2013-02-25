define([
	'jquery',
	'underscore',
	'backbone',
	'views/projects/list',
	'views/users/list'
], function($, _, Backbone, Session, ProjectListView, UserListView){
	var AppRouter = Backbone.Router.extend({
		routes: {
			
			'/projects': 'showProjects',
			'/users': 'showUsers',
			
			'*actions': 'defaultAction'
		}
	});
	
	var initialize = function(){
		var appRouter = new AppRouter;

		appRouter.on('showProjects', function(){
			var projectListView = new ProjectListView();
			projectListView.render();
		});
		
		appRouter.on('showUsers', function(){
			var userListView = new UserListView();
			userListView.render();
		});

		appRouter.on('defaultAction', function(actions){
			console.log('No route: ', actions);
		});
		Backbone.history.start();
	};
	return {
		initialize: initialize
	};
});
