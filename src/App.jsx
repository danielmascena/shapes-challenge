import React from "react";
import Layout from "./views/layout/Layout";
import DisplayCoordirnates from "./views/shapes/DisplayCoordirnates";
import Container from "./views/shapes/Container";
import DrawParallelogram from "./views/shapes/DrawParallelogram";
import reducer from "./reducers/shapeReducer";
import { createStore } from "redux";
import { Provider } from "react-redux";

export const store = createStore(reducer);
const App = () => {
  return (
    <Provider store={store}>
      <Layout>
        <DisplayCoordirnates />
        <Container />
        {/* <DrawParallelogram /> */}
      </Layout>
    </Provider>
  );
};

export default App;
