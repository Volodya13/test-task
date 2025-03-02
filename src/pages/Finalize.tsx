import {useContext} from "react";
import {DataContext} from "../contextApi/DataContext.tsx";
import {Test} from "../utils/interfaces.ts";

function Finalize() {
  const {tests} = useContext(DataContext) as unknown as {tests: Test[]};
  return (
    <div>
      <h1>Results</h1>
      <p>Test id: {tests.map(({name}: Pick<Test, 'name'>) => (
        <span key={name}>{name}</span>
      ))}</p>
    </div>
  )
}

export default Finalize;
