// Require the framework and instantiate it
const roadmaps = require('./api/routes/roadmap')
const topic = require('./api/routes/topic')
const fastify = require('fastify')({ logger: true })

// Declare a route
fastify.get('/', async (request, reply) => {
    return { hello: 'world' }
})

// Run the server!
const start = async () => {
    try {
        fastify.register(roadmaps)
        fastify.register(topic)
        await fastify.listen(3000,"0.0.0.0")
        fastify.log.info(`server listening on ${fastify.server.address().port}`)
    } catch (err) {
        fastify.log.error(err)
        process.exit(1)
    }
}
start()
