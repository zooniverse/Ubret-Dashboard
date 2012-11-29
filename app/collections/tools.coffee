Tool = require 'models/tool'

class Tools extends Backbone.Collection
  model: Tool

  url: =>
    "/dashboards/#{@dashboard_id}/tools"

  initialize: ->
    @.on 'bind-tool', @bindTool

  bindTool: (outTool, inTool) ->
    outToolModel = @find (tool) ->
      tool.channel is outToolModel
    inTool.bindTool outToolModel

module.exports = Tools
