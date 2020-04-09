const { roadmapsHandler } = require('../roadmapsHandler')

const reply = {
  send: jest.fn()
}

it('should returns a hello world when request is fine', () => {
  roadmapsHandler({}, reply)
  
  expect(reply.send).toHaveBeenCalledWith({
    hello: 'world'
  })
})