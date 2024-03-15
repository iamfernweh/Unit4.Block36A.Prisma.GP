const express = require('express');
const app = express();

const init = () => {
  console.log('seed some data');
  const port = process.env.PORT || 3001;
  app.listen(port, () => {
    console.log(`listening on ${port}`);
  });
};

init();
