import React, { createContext } from 'react';
import ChildA from './components/ChildA';

// Create a new context
const data = createContext();

function App() {
  const name = "harshita";

  return (
    <data.Provider value={name}>
      <ChildA />
    </data.Provider>
  );
}

export default App;
export { data }; // Export the context for use in other files
