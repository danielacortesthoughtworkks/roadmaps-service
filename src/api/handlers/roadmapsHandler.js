const { Roadmap, Topic } = require('../../../database/models/index')
const getRoadmapsHandler = async function (request, reply) {
    const roadmaps = await Roadmap.findAll({
        include: [
            {
                model: Topic,
                required: false,
            },
        ],
    })
    reply.send(roadmaps)
}

const postRoadmapsHandler = async function (request, reply) {
    const roadmap = request.body
    const roadmapModel = await Roadmap.create(roadmap)
    reply.send(roadmapModel)
}

const deleteRoadmapsHandler = async function (request, reply) {
    const modelId = request.params.id
    Roadmap.destroy({
      where: {
          id: modelId
      }
  })
    reply.send("Roadmap deleted")
  }

module.exports = {
    getRoadmapsHandler,
    postRoadmapsHandler,
    deleteRoadmapsHandler
}
