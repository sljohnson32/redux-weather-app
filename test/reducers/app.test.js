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

    // it('should accept action SET_ACTIVE_USER', () => {
    //   this.action = {
    //     type: 'SET_ACTIVE_USER',
    //     data: {
    //       id: 1,
    //       name: 'Taylor',
    //       password: 'password',
    //       email: 'tman2272@aol.com',
    //     },
    //   };
    //
    //   const newUserState = user(this.state, this.action);
    //   expect(newUserState).to.deep.equal(this.action.data);
    // });
  });
