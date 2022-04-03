import React, { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Homepage from './components/homepage';
import Tourtravels from './components/tours';
import handleWindowResize from './components/handleWindowResize';
import Cafes from './components/cafe';
import Clothing from './components/clothing';
const App = () => {
  let { height, width } = handleWindowResize();
    return (
      <>
        <div
          style={{
            height: height,
            width: width,
            position: 'fixed',
            zIndex: -10,
            backgroundColor: 'rgba(0, 38, 31, 1)'
          }}
        ></div>
        <Navbar />
        <Switch>
         <Route exact path='/toursTravels' component={Tourtravels} />
         <Route exact path='/cafe' component={Cafes} />
         <Route exact path='/clothing' component={Clothing} />
          <Route exact path='/' component={Homepage} />
        </Switch>
      </>
    );

};

export default App;

