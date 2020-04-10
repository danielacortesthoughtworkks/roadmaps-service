const { roadmapsHandler } = require('../handlers/roadmapsHandler')
const { roadmapsSchema } = require('../schemas/roadmapsSchema')

module.exports = async function(fastify){
  fastify.route({
    method: 'GET',
    url: '/roadmaps',
    schema: roadmapsSchema,
    handler: roadmapsHandler,
  })
}
