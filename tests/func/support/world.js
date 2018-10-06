const { setWorldConstructor, Given, Then, When, Before } = require('cucumber')
const { state, fixtures, httpApi, cli } = require('@ekino/veggies')
const hooks = require('@ekino/veggies/src/extensions/fixtures/hooks') //TODO: expose hooks in fixtures so you can use fixtures.hooks instead
const stateDefinitions = require('@ekino/veggies/src/extensions/state/definitions')
const httpApiDefinitions = require('@ekino/veggies/src/extensions/http_api/definitions')
const cliDefinitions = require('@ekino/veggies/src/extensions/cli/definitions')

setWorldConstructor(function() {
    state.extendWorld(this)
    fixtures.extendWorld(this)
    httpApi.extendWorld(this)
    cli.extendWorld(this)
})

stateDefinitions({Given, When})
hooks({Before})
httpApiDefinitions({ baseUrl: 'http://localhost:3000' })({Given, Then, When})
cliDefinitions({Given, Then, When})
