import * as actions from '../../src/actions'

describe('actions', () => {
  it('should create an action to remove pin', () => {
    const forecastData = []
    const expectedAction = {
     type: 'RECEIVE_FORECAST',
     forecastData: []
    }
    expect(actions.receiveForecast(forecastData)).toEqual(expectedAction)
  })
})
