const { roadmapsHandler } = require('../roadmapsHandler')

const reply = {
    send: jest.fn(),
}

it('should return frontend developer description when request is okay', () => {
    roadmapsHandler({}, reply)

    expect(reply.send).toHaveBeenCalledWith({
        name: 'Frontend Developer',
        description:
            'Step by step guide to becoming a modern frontend developer',
    })
})
