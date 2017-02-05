import reducer from '../../src/reducers/settings-reducer'
import settings from '../../src/reducers/settings-reducer'


describe('reducers', () => {
  it('should return the initial state', () => {
    expect( reducer(undefined, {}) ).toEqual([])
  })
})

describe('settings reducer', () => {

    it('should return an initial state', () => {
      expect(settings(undefined, {})).toEqual([]);
    });

    // it.skip('should accept action RECEIVE_FORECAST', () => {
    //   this.action = {
    //     type: 'RECEIVE_FORECAST',
    //     data: {
    //         forecastData: []
    //     },
    //   };
    //   expect(settings(this.action.data)).toEqual(this.action.data);
    // });
    //
    // it.skip('should accept action RECEIVE_FORECAST', () => {
    //   expect(
    //     reducer([], {
    //       type: 'RECEIVE_FORECAST',
    //       forecastData: {}
    //     })
    //   ).toEqual([
    //     {}
    //   ])
    // })
    //
    // it.skip('should accept action REMOVE_PIN', () => {
    //   expect(
    //     reducer([], {
    //       type: 'RECEIVE_PIN',
    //       pinID: 0
    //     })
    //   ).toEqual([])
    // })
  })

  describe('app reducer', function () {
      it('should return an initial state', () => {
        expect(settings(undefined, {})).toEqual([]);
      });
    });
