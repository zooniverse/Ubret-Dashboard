var state = require("lib/state"),
  User = zooniverse.models.User;

module.exports = {
  tool_chain: {
    settings : {
      project: function() { return state.get('project'); },
      title: "Double Click to Edit Title",
      annotation : "Double Click to Edit Annotation"
    },
    persistedState: ['id', 'user', 'project', 'title', 'annotation']
  },
  table: {
    settings: {
      currentPage: 0,
      sortColumn: 'uid',
      sortOrder: 'a'
    },
    persistedState: ['currentPage', 'sortOrder', 'sortColumn', 'selection']
  },
  prompt: {
    settings: {},
    persistedState: ['statements']
  },
  scatterplot: {
    settings: {},
    persistedState: ['xAxis', 'yAxis', 'xMin', 'xMax', 'yMin', 'yMax', 'selection']
  },
  statistics: {
    settings: {},
    persistedState: ['key']
  },
  histogram: {
    settings: {},
    persistedState: ['xAxis', 'xMin', 'xMax', 'selection', 'bins']
  },
  subject_viewer: {
    settings: {currentPage: 0},
    persistedState: ['currentPage', 'selection']
  },
  spectra: {
    settings: {
      currentPage: 0, 
      bestFitLine: 'show', 
      fluxLine: 'show', 
      emissionLines: 'show'
    },
    persistedState: ['currentPage', 'bestFitLine', 'fluxLine', 'emissionLines']
  }
}
