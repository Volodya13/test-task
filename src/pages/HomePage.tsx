import {useContext} from "react";
import {DataContext} from "../contextApi/DataContext";


function HomePage() {
  const {sites, tests} = useContext(DataContext);


  console.log(`Sites: ${sites}`);
  console.log(`Tests: ${tests}`);
  return (
    <>
      <h1>Sites</h1>
    </>
  );
}

export default HomePage;
