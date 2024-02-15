import React, { useContext } from 'react';
import { data } from '../App';

const ChildC = () => {
  const name = useContext(data);

  return (
    <div>
      <h1>this is a name: {name}</h1>
    </div>
  );
};

export default ChildC;
