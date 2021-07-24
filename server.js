if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');

const app = express();

const api_key = process.env.API_KEY;
// Get Dinosaur names from Dino Ipsum API
app.get('/dinoName', async (req, res) => {
  const fetchApi = await fetch(
    'https://alexnormand-dino-ipsum.p.rapidapi.com/?paragraphs=1&words=2&format=json',
    {
      method: 'GET',
      headers: {
        'x-rapidapi-key': api_key,
        'x-rapidapi-host': 'alexnormand-dino-ipsum.p.rapidapi.com',
      },
    }
  );
  const dinoNameRes = await fetchApi.json();
  console.log(dinoNameRes);
  res.json(dinoNameRes);
});

// Get Dinosaur imgage from Bing Image search API
app.get('/dinoImage', async (req, res) => {
  const fetchApi = await fetch(
    'https://bing-image-search1.p.rapidapi.com/images/search?q=dinosaur&count=10',
    {
      method: 'GET',
      headers: {
        'x-rapidapi-key': api_key,
        'x-rapidapi-host': 'bing-image-search1.p.rapidapi.com',
      },
    }
  );
  const dinoImageRes = await fetchApi.json();
  console.log(dinoImageRes);
  res.json(dinoImageRes);
});

const port = 5000;
app.listen(port, () => `Server running on port ${port}`);
