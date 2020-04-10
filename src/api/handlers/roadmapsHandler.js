const roadmapsHandler = function (request, reply) {
  reply.send({ name: 'Roadmap1', description: 'Holi' })
}

module.exports = {
  roadmapsHandler,
}
