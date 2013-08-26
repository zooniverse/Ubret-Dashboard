(function()  {
  "use strict";
  var Dashboard = this.Dashboard;
  var User = this.User;

  Dashboard.ToggleView = Backbone.View.extend({
    hide: function() {
      this.$el.hide();
    },

    show: function() {
      this.$el.show();
    }
  });

  Dashboard.IndexPage = Dashboard.ToggleView.extend({
    el: "#index", 

    initialize: function() {
      this.projectName = this.$('.name');
      this.listenTo(Dashboard.State, 'change:project', this.updateProject);
      User.on('initialized', _.bind(function() {
        this.listenTo(User.current.collections, 'add reset', this.updateCollections);
      }, this));
      this.updateProject(null, Dashboard.State.get('project'));
    },

    events: {
      'change select.project' : 'setProject',
      'click button#create-dashboard' : 'createDashboard'
    },

    createDashboard: function(ev) {
      User.current.dashboards
      .create({name: this.$('#dashboard-name').val(), project: Dashboard.State.get('project')});
    },

    setProject: function(ev) {
      if (ev.target.value === '')
        return;
      else
        Dashboard.State.set('project', ev.target.value);
    },

    updateCollections: function(_, collections) {
      collections.each(function(col) {
        this.$('select.talk-collections')
        .append('<option value="' + col.id + '">' + col.get('title') + '</option>');
      }, this);
    },

    updateProject: function(state, project) {
      if (!_.isUndefined(project)) {
        this.$('.project-selected').show();
        this.$('select.project').val(project);
        this.projectName.text(Dashboard.projects[project].name);
      } else {
        this.$('.project-selected').hide();
      }
    }
  });


  Dashboard.Saved = Dashboard.ToggleView.extend({
    el: "#saved",

    initialize: function() {
      this.collection = User.current.dashboards; 
    }
  });

  Dashboard.App = Backbone.View.extend({
    el: "#app",

    sections: {
      index: Dashboard.IndexPage, 
      dashboard: "#dashboard", 
      saved: Dashboard.Saved, 
      data: "#data"
    },

    initialize: function() {
      this.active = this.$('#index');
      this.listenTo(this.model, 'change:page', this.setActive);
    },

    setActive: function(state, active) {
      var section = this.sections[active];
      if (_.isUndefined(section))
        throw new Error("Section doesn't exist");
      else if (_.isFunction(section))
        this.sections[active] = new section();
      this.active.hide();
      this.active = this.sections[active];
      this.active.show();
    }

  });

  Dashboard.Header = Backbone.View.extend({
    el: "header",
    active: null,

    sections: {
      index: null,
      dashboard: "#nav-dashboard", 
      saved: "#nav-saved", 
      data: "#nav-data"
    },

    events: {
      "click #current-project" : 'toggleProjects'
    },

    initialize: function() {
      this.activeProject = this.$('#current-project .name');
      this.projectSelect = this.$('#project-select');
      this.listenTo(this.model, 'change:project', this.updateProject);
      this.listenTo(this.model, 'change:page', this.setActive);
      this.listenTo(this.model, 'change:currentDashboard', this.setDashboard);
    },

    toggleProjects: function() {
      this.projectSelect.toggle();
    },

    setActive: function(state, active) {
      active = this.sections[active];
      if (!_.isNull(this.active))
        this.active.removeClass("active");
      if (_.isNull(active))
        this.active = null;
      this.active = this.$(active);
      this.active.addClass("active");
    },

    setDashboard: function(state, id) {
      curAnchor = this.$('#current-dashboard a');
      curAnchor.attr('href', curAnchor.attr('href') + "/" + id);
    },

    updateProject: function(state, project) {
      var projectText;
      // Hide Project Select in case it's open
      this.projectSelect.hide();

      // Update Anchor Tags with new Project
      var anchors = this.$('span a');
      var hrefs = _.map(anchors, function(a) { 
        var href = a.getAttribute('href');
        href = href.split('/');
        return [_.first(href), project, _.last(href)].join('/');
      });
      anchors.each(function(i) {this.setAttribute('href', hrefs[i])});

      // Update the Active Project
      if (project === '') {
        projectText = 'No Project';
      } else {
        // Hide the Active Project from the List
        if (!_.isUndefined(this.hiddenProject))
          this.hiddenProject.show(); 
        this.hiddenProject = this.projectSelect.find('#' + project).hide();
        projectText = Dashboard.projects[project].name;
      }
      this.activeProject.text(projectText);
    }
  });
}).call(this);
