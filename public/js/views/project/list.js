define([
	'jquery',
	'underscore',
	'backbone',
	'text!templates/project/list.html'
], function($, _, Backbone, projectListTemplate){
	var ProjectListView = Backbone.View.extend({
		el: $('#container'),
		render
