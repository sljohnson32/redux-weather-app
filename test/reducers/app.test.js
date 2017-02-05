import reducer from '../../src/reducers/settings-reducer'
import settings from '../../src/reducers/settings-reducer'

describe('reducers', () => {
  it('should return the initial state', () => {
    expect( reducer(undefined, {}) ).toEqual([])
  })
})

describe('settings reducer', function () {

    it('should return an initial state', () => {
      expect(settings(undefined, {})).toEqual([]);
    });

    it('should accept action RECEIVE_FORECAST', () => {
      expect(
        reducer({}, {
          type: 'RECEIVE_FORECAST',
          forecastData: {}
        })
      ).toEqual(
        [{}]
      )

    })
  })

  describe('app reducer', function () {
      it('should return an initial state', () => {
        expect(settings(undefined, {})).toEqual([]);
      });
    });
