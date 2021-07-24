const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');

const app = express();

// Get Dinosaur names from Dino Ipsum API
app.get('/dinoName', async (req, res) => {
  const fetchApi = await fetch(
    'https://alexnormand-dino-ipsum.p.rapidapi.com/?paragraphs=1&words=2&format=json',
    {
      method: 'GET',
      headers: {
        'x-rapidapi-key': '419efc62d7msh8186214d37ac7a1p1323fbjsn17dc140ebc41',
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
        'x-rapidapi-key': '419efc62d7msh8186214d37ac7a1p1323fbjsn17dc140ebc41',
        'x-rapidapi-host': 'bing-image-search1.p.rapidapi.com',
      },
    }
  );
  const dinoImageRes = await fetchApi.json();
  console.log(dinoImageRes);
  res.json(dinoImageRes);
});

// app.get('/api/customers', cors(), (req, res) => {
//   const customers = [
//     { id: 1, firstName: 'John', lastName: 'Doe' },
//     { id: 2, firstName: 'Brad', lastName: 'Traversy' },
//     { id: 3, firstName: 'Mary', lastName: 'Swanson' },
//   ];

//   res.json(customers);
// });

const port = 5000;
app.listen(port, () => `Server running on port ${port}`);
