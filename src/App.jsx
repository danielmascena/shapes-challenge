import React, { useReducer } from "react";
import Layout from "./views/layout/layout";
import Parallelogram from "./views/shapes/parallelogram";
import Coordinates from "./views/shapes/coordirnates";
import { reducer, initialState } from "./reducers/shapeReducer";

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Layout>
      <Coordinates />
      <Parallelogram />
    </Layout>
  );
};

export default App;
