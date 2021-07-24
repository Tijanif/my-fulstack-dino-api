import React, { useState } from 'react';
import './dino.css';

const Dino = () => {
  console.log('I am running');
  const [dino, setDino] = useState('');
  const [dinoImage, setDinoImage] = useState(null);

  // Get Dinosaur name from Server
  async function getDinoName() {
    const res = await fetch('/dinoName');
    const data = await res.json();
    let dinoName = data[0].join(' ');
    return dinoName;
  }
  // Get Dinosaur Image from Server
  async function getDinoImage() {
    const res = await fetch('/dinoImage');
    const data = await res.json();
    let dinoImage = data.value[Math.floor(Math.random() * data.value.length)];
    let dinoImageUrl = dinoImage.thumbnailUrl;
    return dinoImageUrl;
  }

  const getDinosaurNameAndImage = () => {
    getDinoName().then((dinoName) => {
      setDino(dinoName);
      console.log(dinoName);
    });

    getDinoImage().then((dinoImage) => {
      setDinoImage(dinoImage);
      console.log(dinoImage);
    });
  };

  return (
    <div>
      <h1>Welcome to Dino Generator</h1>
      <button onClick={getDinosaurNameAndImage}>Click to get a Dinosaur</button>
      <div id='dinoName'>{dino}</div>
      <img src={dinoImage} alt={dino} />
    </div>
  );
};

export default Dino;
