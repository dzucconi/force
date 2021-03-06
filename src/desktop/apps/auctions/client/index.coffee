{ CURRENT_AUCTIONS, UPCOMING_AUCTIONS } = require('sharify').data
Auctions = require '../../../collections/auctions.coffee'
Clock = require '../../../components/clock/view.coffee'
ModalPageView = require '../../../components/modal/page.coffee'
MyActiveBids = require '../../../components/my_active_bids/view.coffee'
CurrentUser = require '../../../models/current_user.coffee'
myActiveBidsTemplate = -> require('../templates/my_active_bids.jade') arguments...
{ openAuthModal } = require '../../../lib/openAuthModal'
{ ModalType } = require "@artsy/reaction/dist/Components/Authentication/Types"
{ AuthIntent, ContextModule } = require "@artsy/cohesion"

setupClocks = ($clocks, auctions) ->
  auctions.map (auction) ->
    new Clock(modelName: 'Auction', model: auction, el: $clocks.filter("[data-id='#{auction.id}']"))
      .start()

module.exports.init = ->
  user = CurrentUser.orNull()

  currentAuctions = new Auctions CURRENT_AUCTIONS
  setupClocks $('.af-clock'), currentAuctions

  upcomingAuctions = new Auctions UPCOMING_AUCTIONS
  setupClocks $('.js-apu-clock'), upcomingAuctions

  new MyActiveBids(
    user: user
    el: $('.auctions-my-active-bids')
    template: myActiveBidsTemplate
  ).start()

  $('.js-auctions-learn-link').click (e) ->
    e.preventDefault()
    new ModalPageView width: '700px', pageId: 'auction-info'

  $('.js-sign-up-button').click (e) ->
    e.preventDefault()
    openAuthModal(ModalType.signup, {
      intent: AuthIntent.signup
      destination: location.href
      contextModule: ContextModule.auctionsInfo
    })
