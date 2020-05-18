const { getTopicsHandler, postTopicsHandler, deleteTopicsHandler } = require('../handlers/topicsHandler')
const { topicsSchema } = require('../schemas/topicsSchema')

module.exports = async function (fastify) {
    fastify.route({
        method: 'GET',
        url: '/topics',
        schema: topicsSchema,
        handler: getTopicsHandler,
    })

    fastify.route({
        method: 'POST',
        url: '/topics',
        schema: {},
        handler: postTopicsHandler
    })

    fastify.route({
        method: 'DELETE',
        url: '/topics/:id',
        schema: {},
        handler: deleteTopicsHandler
    })
}