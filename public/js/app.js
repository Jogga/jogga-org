define(['underscore', 'jquery', 'backbone'], function ( _, $, Backbone){
window.AppView = Backbone.View.extend({
	el: $('body'),
	events: {
		'click #add-friend': 'showPrompt',
	},
	showPrompt: function() {
		var friendName = prompt('Who is your friend?');
	}
});

var appView = new AppView;	
});
