const { roadmapsSchema } = require('../../schemas/roadmapsSchema')
const { roadmapsHandler } = require('../../handlers/roadmapsHandler')
const roadmap = require('../../routes/roadmap')

jest.mock('../../handlers/roadmapsHandler')

const fastifyMock = {
    route: jest.fn(),
}

test('Should get roadmaps', async () => {
    await roadmap(fastifyMock)

    expect(fastifyMock.route).toHaveBeenCalledWith({
        method: 'GET',
        url: '/roadmap',
        schema: {
            schema: {
                response: {
                    200: {
                        type: 'object',
                        properties: {
                            name: { type: 'string' },
                            description: { type: 'string' },
                        },
                    },
                },
            },
        },
        handler: roadmapsHandler,
    })
})
