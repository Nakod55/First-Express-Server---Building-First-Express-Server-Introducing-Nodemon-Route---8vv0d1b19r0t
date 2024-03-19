const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

//Using app.listen create your first express server on port 3000
app.listen(3000, () => console.log("Server is running at server 3000"));
module.exports = app;
