_ = require 'underscore'
Backbone = require 'backbone'
qs = require 'querystring'

module.exports = class FilterRouter extends Backbone.Router

  initialize: (options) ->
    _.extend @, options
    @params.on 'change', @navigateArtworkParams
    @setupRoutes()

  setupRoutes: ->
    @route "#{@urlRoot}/artworks", 'artworks'
    @route "#{@urlRoot}/artworks*", 'artworks'

  navigateArtworkParams: =>
    @navigate "#{@urlRoot}/artworks?" + qs.stringify(@params.toJSON())

  artworks: ->
    queryParams = qs.parse(location.search.replace(/^\?/, ''))
    @params.set(_.extend queryParams, { page: 1 }).trigger('reset')