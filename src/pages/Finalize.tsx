import {useNavigate, useParams} from "react-router";
import {useContext} from "react";
import {DataContext} from "../contextApi/DataContext.tsx";

function Finalize() {
  const {state} = useContext(DataContext);
  const navigate = useNavigate();
  const {testId} = useParams();

  const test = state.tests.find(t => t.id === Number(testId));


  return (
    <div>
      <h1>Finalize</h1>
      <p>{test?.name}</p>
      <button onClick={() => navigate(-1)}>Back</button>
    </div>
  )
}

export default Finalize;
