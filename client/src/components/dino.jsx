import React, { useEffect } from 'react';
import './dino.css';

const Dino = () => {
  console.log('I am running');
  // const [dino, setDino] = useState;

  async function getDinoName() {
    const res = await fetch('/dinoName');
    const data = await res.json();
    let dinoName = data[0].join(' ');
    console.log('I am dino name:', dinoName);
  }

  // useEffect(() => {
  //   getDinoName();
  // }, []);

  const getDinosaur = () => {
    getDinoName();
  };

  return (
    <div>
      <h1>Welcome to Dino Generator</h1>
      <button onClick={getDinosaur}>Click to get a Dinosaur</button>
    </div>
  );
};

export default Dino;
