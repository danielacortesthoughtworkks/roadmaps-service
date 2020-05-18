const { Roadmap, Topic } = require('../../../database/models/index')
const getTopicsHandler = async function (request, reply) {
    const topics = await Topic.findAll({
        include: [
            {
                model: Roadmap,
                required: false,
            },
        ],
    })
    reply.send(topics)
}

const postTopicsHandler = async function (request, reply) {
    const topic = request.body
    const topicModel = await Topic.create(topic)
    reply.send(topicModel)
}

const deleteTopicsHandler = async function (request, reply) {
  const modelId = request.params.id
  Topic.destroy({
    where: {
        id: modelId
    }
})
  reply.send("Topic deleted")
}

module.exports = {
    getTopicsHandler,
    postTopicsHandler,
    deleteTopicsHandler
}