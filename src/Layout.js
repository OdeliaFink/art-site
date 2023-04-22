import React from 'react';
import Footer from './components/Footer';

export const Layout = (props) => {
  return (
    <React.Fragment>
      <div>{props.children}</div>
      <Footer />
    </React.Fragment>
  );
};
