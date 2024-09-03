import React from 'react';
import { RotatingLines } from 'react-loader-spinner';

const Spinner = () => {
  return (
    <RotatingLines
      strokeColor="white"
      strokeWidth="5"
      animationDuration="10"
      width="96"
      visible={true}
    />
  );
};

export default Spinner;
