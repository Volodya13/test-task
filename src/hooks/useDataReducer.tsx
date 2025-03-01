import {useReducer} from "react";
import {dataReducer, initialState} from "../features/reducers.ts";
import {ActionProps, StateProps} from "../utils/interfaces.ts";

export function useDataReducer(): {state: StateProps, dispatch: React.ActionDispatch<[action: ActionProps]>} {
  const [state, dispatch] = useReducer(dataReducer, initialState);

  return {state, dispatch};
}

