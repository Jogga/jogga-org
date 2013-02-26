define(['underscore', 'jquery', 'backbone'], function( _, $, Backbone){
// Beginning of Module

var Profile = Backbone.Model.extend();

var ProfileList = Backbone.Collection.extend({
	model: Profile,
	url: '/data/data.json'
});

var ProfileView = Backbone.View.extend({
	el: '#profiles',
	template: _.template($('#profileTemplate').html()),
	render: function(eventName) {
		_.each(this.model.models, function(profile) {
			var profileTemplate = this.template(profile.toJSON());
			$(this.el).append(profileTemplate);
		}, this);
		return this;
	}
});

var profiles = new ProfileList();
var profilesView = new ProfileView({model: profiles});
profiles.fetch();
profiles.bind('reset', function () {
	console.log(profiles);
});

});
