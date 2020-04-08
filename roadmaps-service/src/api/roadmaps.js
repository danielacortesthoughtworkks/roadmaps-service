module.exports = async function(fastify){
  fastify.route({
    method: 'GET',
    url: '/hello',
    schema: {

    },
    handler: function (request, reply) {
      reply.send({ hello: 'world' })
    }
  })
}
