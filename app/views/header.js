var GlobalMenu = require('views/global_menu'),
  ToolMenu = require('views/tool_menu');

var Header = Backbone.View.extend({
  el: "header",
  active: null,
  projects: require('config/projects'),

  events: {
    'click #zoom-in' : 'zoomIn',
    'click #zoom-out' : 'zoomOut',
    'click #examine' : 'examineMode',
    "click #menu" : "toggleMenu",
    "click #tool-menu" : "toggleToolMenu"
  },

  initialize: function() {
    this.activeProject = this.$('#current-project.name');
    this.projectSelect = this.$('#project-select');
    this.downArrow = this.$('.down-arrow');
    this.globalMenu = new GlobalMenu({model: this.model});
    this.toolMenu = new ToolMenu({model: this.model});

    this.listenTo(this.model, 'change:project', this.updateProject);
    this.listenTo(this.model, 'change:page', this.updatePageHeader);
    this.listenTo(this.model, 'change:currentDashboard', this.updatePageHeader);
  },

  examineMode: function() {
    var selected = this.model.get('currentDashboard').get("tools").chain()
      .filter(function(m) { return m.get('selected') })
      .pluck('id').value().join(',');
    if (selected === '')
      return;
    var url = location.hash + "/examine/" + selected;
    window.router.navigate(url, {trigger: true});
  },

  zoomIn: function(ev) {
    if ($(ev.target).hasClass('disabled'))
      return;
    var curZoom = this.model.get('currentDashboard').get('zoom') + 1;
    this.model.get('currentDashboard').set('zoom', curZoom);
  },

  zoomOut: function(ev) {
    if ($(ev.target).hasClass('disabled'))
      return;
    var curZoom = this.model.get('currentDashboard').get('zoom') - 1;
    this.model.get('currentDashboard').set('zoom', curZoom);
  },

  updatePageHeader: function() {
    var page = this.model.get('page');
    var dashboard = this.model.get('currentDashboard');
    if (page === 'dashboard' && !_.isUndefined(dashboard)) {
      this.$('#dashboard-controls').show();
      this.$('#current-dashboard').show()
        .text(dashboard.get("name") + " - ");
    } else {
      this.$('#current-dashboard').hide();
      this.$('#dashboard-controls').hide();
    }
  },

  toggleMenu: function() {
    if (this.toolMenu.$el.hasClass('active'))
      this.toggleToolMenu();
    this.$('#menu').toggleClass('active');
    this.globalMenu.toggle();
  },

  toggleToolMenu: function() {
    if (this.globalMenu.$el.hasClass('active'))
      this.toggleMenu();
    this.$('#tool-menu').toggleClass('active');
    this.toolMenu.toggle();
  },

  updateProject: function(state, project) {
    var projectText;
    // Hide Project Select in case it's open
    this.projectSelect.removeClass('active');

    // Update the Active Project
    if (!project) {
      projectText = 'No Project';
    } else {
      // Hide the Active Project from the List
      if (!_.isUndefined(this.hiddenProject))
        this.hiddenProject.show(); 
      this.hiddenProject = this.projectSelect.find('#' + project).hide();
      projectText = this.projects[project].name;
    }
    this.activeProject.text(projectText);
  }
});

module.exports = Header;
