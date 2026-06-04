
//import React from 'react';

import FancyButton from "./FancyButton";

// Destructuring 'text' directly from the incoming props object
//import Message from "./Message";


const App = () => {
  return (
    <div className="mx-auto items-center bg-gray-200">
      {/* Passing the 'text' prop correctly */}
      {/* <Message />
      <Message />

      <Message text="Hi I am Jiaul Hoque" /> */}
    <h1 className="text-center text-5xl py-10 text-red-800">Wellcome to React</h1>

    <FancyButton text='jiaul' />
    <FancyButton text='click' />
    <FancyButton text='submit' />
    </div>
  );
};

export default App;