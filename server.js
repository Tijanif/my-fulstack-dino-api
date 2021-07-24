const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');

const app = express();

app.get('/dinoName', async (req, res) => {
  // run code stuff
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
