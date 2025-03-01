import {useEffect, createContext} from "react";
import {getSites, getTests} from "../services/api";
import {useDataReducer} from "../hooks/useDataReducer.tsx";

type Props = {
  children: React.ReactNode;
}

export const DataContext = createContext({sites: [], tests: [], dispatch: () => null});

function DataProvider({children}: Props) {
  const {state, dispatch} = useDataReducer();

  useEffect(() => {
    (async () => {
      const sites = await getSites();
      dispatch({type: 'GET_SITES', payload: sites});
    })();

    (async () => {
      const tests = await getTests();
      dispatch({type: 'GET_TESTS', payload: tests});
    })();
  }, [dispatch]);

  return (
    <DataContext.Provider value={{state, dispatch}}>
      {children}
    </DataContext.Provider>
  );
}

export default DataProvider;
