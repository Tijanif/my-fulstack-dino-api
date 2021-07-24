import React, { useEffect } from 'react';
import './dino.css';

const Dino = () => {
  console.log('I am running');
  // const [dino, setDino] = useState;

  // const fetchData = () => {
  //   return fetch('https://randomuser.me/api/')
  //     .then((response) => response.json())
  //     .then((data) => console.log(data));
  // };

  async function getDinoName() {
    const res = await fetch('/dinoName');
    const data = await res.json();
    console.log(data);
  }

  // getDinoName();
  useEffect(() => {
    getDinoName();
  }, []);

  return (
    <div>
      <h1>Welcome to Dino Generator</h1>
    </div>
  );
};

export default Dino;
