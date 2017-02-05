import reducer from '../../src/reducers/settings-reducer'

describe('todos reducer', () => {
  it('should return the initial state', () => {
    expect( reducer(undefined, {}) ).toEqual([])
  })
})
