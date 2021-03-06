var Dashboard = require("models/dashboard"),
  State = require('lib/state'),
  User = zooniverse.models.User;

var Router = Backbone.Router.extend({
  routes: {
    '': 'index',
    ':project(/)' : 'setProject',
    ':project/dashboards(/)' : 'showSaved',
    ':project/data(/)' : 'showData',
    ':project/dashboards/new(/)' : 'newDashboard',
    ':project/dashboards/:id(/)' : 'showDashboard',
    ':project/dashboards/:id/children(/)' : 'showDashboardChildren',
    ':project/dashboards/:id/copy(/)' : 'copyDashboard',
    ':project/dashboards/:id/examine/:toolIds' : 'examineMode',
    ':project/subjects/:subjects(/:name)' : 'dashboardFromSubjects',
    ':project/collections/:collections(/:name)' : 'dashboardFromCollections'
  },

  initialize: function(userPromise) {
    this.userPromise = userPromise;
  },

  index: function() {
    this.setProjectState('');
    this.setPage('index');
  },

  setProjectState: function(project) {
    State.set('project', project);
  },

  setPage: function(page) {
    State.set('page', page);
  },

  setProject: function(project) {
    this.setProjectState(project);
    this.setPage('index');
  },

  showSaved: function(project) {
    this.setProjectState(project);
    this.setPage('saved');
  },

  showData: function(project) {
    this.setProjectState(project);
    this.setPage('data');
  },

  newDashboard: function(project) {
    this.setProjectState(project);
    this.setPage('new');
  },

  showDashboard: function(project, id) {
    this.setProjectState(project);
    this.setPage('dashboard');
    this.loadDashboard(id);
  },

  loadDashboard: function(id) {
    if (User.current && User.current.dashboards) {
      if (User.current.dashboards.isEmpty()) {
        return User.current.promises.dashboards.then(_.bind(_.partial(this.loadDashboard, id), this));
      } else {
        State.set('currentDashboard', User.current.dashboards.get(id));
        State.set('currentDashboardId', id);
      };
    } else if (this.userPromise.state() !== 'pending') {
      var dashboardModel = new Dashboard({id: id})
      return dashboardModel.fetch().then(_.bind(function() {
        State.set('currentDashboard', dashboardModel);
        State.set('currentDashboardId', dashboardModel.id);
      }, this));
    } else {
      return this.userPromise.then(_.bind(_.partial(this.loadDashboard, id), this));
    }
  },

  examineMode: function(project, id, ids) {
    State.set('examine', ids.split(','));
    this.setProjectState(project);
    this.setPage('examine');
    var promise = this.loadDashboard(id);
    if (!promise) { 
      State.set('examineMode', true);
    } else {
      promise.then(_.bind(function() {
        State.set('examineMode', true);
      }, this))
    }
  },

  dashboardFromSubjects: function(project, subjects, name) {
    this.setProjectState(project);
  },

  dashboardFromCollections: function(project, collections, name) {
    this.setProjectState(project);
  },

  showDashboardChildren: function(project, id) {
    this.setProjectState(project);
    this.loadDashboard(id);
    this.setPage('children');
  }
});

module.exports = Router;
