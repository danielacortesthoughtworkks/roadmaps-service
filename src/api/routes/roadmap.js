const { getRoadmapsHandler, postRoadmapsHandler, deleteRoadmapsHandler } = require('../handlers/roadmapsHandler')
const { roadmapsSchema } = require('../schemas/roadmapsSchema')

module.exports = async function (fastify) {
    fastify.route({
        method: 'GET',
        url: '/roadmaps',
        schema: roadmapsSchema,
        handler: getRoadmapsHandler,
    })

    fastify.route({
        method: 'POST',
        url: '/roadmaps',
        schema: {},
        handler: postRoadmapsHandler
    })

    fastify.route({
        method: 'DELETE',
        url: '/roadmaps/:id',
        schema: {},
        handler: deleteRoadmapsHandler
    })
}
