
//import React from 'react';

import FancyButton from "./FancyButton.jsx";
import Nav from "./Nav.jsx"

// Destructuring 'text' directly from the incoming props object
//import Message from "./Message";


const App = () => {
  return (
    <div className="mx-auto items-center bg-gray-200">
      <Nav />
    <h1 className="text-center text-5xl py-10 text-red-800">Wellcome to React</h1>

    <FancyButton text='jiaul'  />
    <FancyButton text='click' />
    <FancyButton text='submit' />
    </div>
  );
};

export default App;