const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  const msg = {
    msg: "Hello, Jenkins...."
  }
  return res.status(200).json(msg);
})

module.exports = app.listen(port, () => {
  console.log(`Application started on port ${port}`);
});