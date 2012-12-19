BaseView = require 'views/base_view'

class TablePageSettings extends BaseView
  className: 'table-settings'
  template: require './templates/table_settings'

  events:
    'click button.next' : 'nextPage'
    'click button.prev' : 'prevPage'

  initialize: ->
    @page = @model.settings.get('currentPage')

  render: =>
    @$el.html @template()
    @

  nextPage: =>
    @page = @page + 1
    @model.settings.set 'currentPage', @page

  prevPage: =>
    @page = @page - 1
    @model.settings.set 'currentPage', @page

module.exports = TablePageSettings
