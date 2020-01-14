import React, { useReducer } from "react";
import Layout from "./views/layout/Layout";
import DrawParallelogram from "./views/shapes/DrawParallelogram";
import DisplayCoordirnates from "./views/shapes/DisplayCoordirnates";
import reducer, { initialState } from "./reducers/shapeReducer";
import ShapeContext from "./contexts/ShapeContext";

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <ShapeContext.Provider
      value={{ shapeState: state, shapeDispatch: dispatch }}
    >
      <Layout>
        <DisplayCoordirnates />
        <DrawParallelogram />
      </Layout>
    </ShapeContext.Provider>
  );
};

export default App;
