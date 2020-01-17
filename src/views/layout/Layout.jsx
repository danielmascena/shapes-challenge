import React from "react";

import { connect } from "react-redux";
import Header from "./Header";
import Footer from "./Footer";

const mapStateToProps = state => ({
  count: state.count
});
let Layout = ({ children, count }) => {
  return (
    <React.Fragment>
      <Header />
      {children}
      <Footer />
    </React.Fragment>
  );
};

Layout = connect(mapStateToProps)(Layout);

export default Layout;
