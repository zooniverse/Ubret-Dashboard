BaseView = require 'views/base_view'

Tools = require 'collections/tools'

Toolbox = require 'views/toolbox'
ToolWindow = require 'views/tool_window'

class DashboardView extends BaseView
  template: require './templates/layout/dashboard'
  subscriptions:
    'dashboard:initialized': 'onDashboardInit'
    'show-snap' : 'drawSnap'
    'stop-snap' : 'stopSnap'

  initialize: ->
    @toolboxView = new Toolbox
    @toolboxView.on 'create', @addToolModel
    @toolboxView.on 'remove-tools', @removeTools

  render: =>
    @$el.html @template()
    @assign
      '.toolbox': @toolboxView

    if @model
      @model.tools.each @createToolWindow
    @

  createToolWindow: (tool) =>
    toolWindow = new ToolWindow
      model: tool
      collection: @model.tools
    @$el.append toolWindow.render().el

  addToolModel: (type) =>
    @model.createTool type

  addTool: =>
    @createToolWindow @model.tools.last()

  removeTools: =>
    @$el.empty()
    @render()

  onDashboardInit: (model) =>
    @model = model
    @render()
    @model.tools.on 'add', @addTool
    @model.tools.on 'reset', @removeTools

  stopSnap: =>
    @snap.remove() if @snap

  drawSnap: (direction, dashHeight) =>
    console.log direction, dashHeight
    @snap.remove() if @snap
    @$el.append("""<div class="snap #{direction}"></div>""")
    @snap = @$('.snap')
    @snap.css 
      height: if direction in ['top-left', 'top-right', 'bottom-right', 'bottom-left'] then ((dashHeight / 2) - 20) else (dashHeight - 20)
      width: if direction in ['right', 'left', 'top-left', 'top-right', 'bottom-left', 'bottom-right']  then ((window.innerWidth / 2) - 20) else (window.innerWidth - 20)

  _setToolWindow: (toolWindow) ->
    ToolWindow = toolWindow


module.exports = DashboardView