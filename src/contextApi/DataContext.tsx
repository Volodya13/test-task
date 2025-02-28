import {useState, useEffect, createContext} from "react";
import {getSites, getTests} from "../services/api.ts";
import {Site, Test} from "../utils/interfaces.ts";

type Props = {
  children: React.ReactNode;
}

export const DataContext = createContext({}) as unknown as React.Context<{sites: Site[], tests: Test[]}>;

function DataProvider({children}: Props) {
  const [sites, setSites] = useState<Site[]>([]);
  const [tests, setTests] = useState<Test[]>([]);

  useEffect(() => {
    if (sites.length) {
      getSites().then((data) => setSites(data));
    } else {
      throw new Error('Something went wrong')
    }
    if (tests.length) {
      getTests().then((data) => setTests(data));
    } else {
      throw new Error('Something went wrong')
    }

    return;
  }, [sites, tests]);


  return (
    <DataContext.Provider value={{sites, tests}}>
      {children}
    </DataContext.Provider>
  );
}

export default DataProvider;
