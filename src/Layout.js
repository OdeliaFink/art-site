import React from 'react';

// import NavigationBar from './Navbar';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';

export const Layout = (props) => {
  return (
    <React.Fragment>
      {/* <NavigationBar /> */}

      <div>{props.children}</div>
      <Footer />
    </React.Fragment>
  );
};
