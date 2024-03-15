const express = require('express');
const app = express();
const path = require('path');
const { PrismaClient } = require('@prisma/client');
const client = new PrismaClient();

app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, 'client/dist/index.html'))
);
app.use('/assets', express.static(path.join(__dirname, '/client/dist/assets')));

app.get('/api/notes', (req, res, next) => {
  res.send([{ txt: 'hi' }]);
});

const init = async () => {
  const foo = await client.note.create({
    data: {
      txt: 'foo',
    },
  });
  const notes = await client.note.findMany();
  console.log(notes);
  console.log('seed some data');
  const port = process.env.PORT || 3001;
  app.listen(port, () => {
    console.log(`listening on ${port}`);
  });
};

init();
