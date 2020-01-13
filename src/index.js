import React from "react";
import { render } from "react-dom";
import Layout from "./views/layout/layout";
import Parallelogram from "./views/shapes/parallelogram";
import Coordinates from "./views/shapes/coordirnates";

import "./index.css";

render(
  <Layout>
    <Coordinates />
    <Parallelogram />
  </Layout>,
  document.getElementById("root")
);
