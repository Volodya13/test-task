import {ActionProps, Site, StateProps, Test} from "../utils/interfaces.ts";

const initialState: StateProps = {
  sites: [],
  tests: []
};

function dataReducer(state: StateProps, action: ActionProps) {
  switch (action.type) {
    case 'GET_SITES':
      return {...state, sites: action.payload as Site[]};
    case 'GET_TESTS':
      return {...state, tests: action.payload as Test[]};
    default:
      return state;
  }
}

export {initialState, dataReducer};
