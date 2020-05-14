const { Roadmap, Topic } = require('../../../database/models/index')
const roadmapsHandler = async function (request, reply) {
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

module.exports = {
    roadmapsHandler,
}
