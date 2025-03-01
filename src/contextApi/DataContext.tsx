import {useEffect, createContext} from "react";
import {getSites, getTests} from "../services/api";
import {useDataReducer} from "../hooks/useDataReducer.tsx";
import {ActionProps, Site, Test} from "../utils/interfaces.ts";

type Props = {
  children: React.ReactNode;
}

interface DataContextType {
  state: {
    sites: Site[];
    tests: Test[];
  };
  dispatch: (action: ActionProps) => void;
}

const defaultValue: DataContextType = {
  state: {
    sites: [],
    tests: []
  },
  dispatch: () => {}
}

export const DataContext = createContext<DataContextType>(defaultValue);


function DataProvider({children}: Props) {
  const {state, dispatch} = useDataReducer();

    useEffect(() => {
      Promise.all([getSites(), getTests()])
        .then(([sites, tests]) => {
          dispatch({type: 'GET_SITES', payload: sites as Site[]});
          dispatch({type: 'GET_TESTS', payload: tests as Test[]});
        })
        .catch(err => console.log(err));
    }, [dispatch]);

  return (
    <DataContext.Provider value={{state, dispatch}}>
      {children}
    </DataContext.Provider>
  );
}

export default DataProvider;
