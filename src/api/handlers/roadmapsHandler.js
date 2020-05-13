const Sequelize = require('sequelize');
//const db = require('../../../database/models/index') 
const Roadmaps  = require('../../../database/models/roadmaps')
const roadmapsHandler = async function (request, reply) {
    //console.log(db);
    let roadmaps = await Roadmaps.findAll();
    reply.send({
        name: 'Frontend Developer',
        description: `${roadmaps}`
        
    })
}

module.exports = {
    roadmapsHandler,
}

