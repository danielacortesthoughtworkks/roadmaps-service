const { roadmapsSchema } = require('../../schemas/roadmapsSchema')
const { roadmapsHandler } = require('../../handlers/roadmapsHandler')
const roadmaps = require('../../routes/roadmaps')

jest.mock('../../handlers/roadmapsHandler')

const fastifyMock = {
    route: jest.fn(),
}

test('Should get roadmaps', async () => {
    await roadmaps(fastifyMock)

    expect(fastifyMock.route).toHaveBeenCalledWith({
        method: 'GET',
        url: '/roadmaps',
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
