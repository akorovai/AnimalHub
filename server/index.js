const express = require("express");
const cors = require("cors");
const animalRouter = require('./routers/animalRoutes');

const app = express();

app.use('/', cors(),express.json(), animalRouter);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
