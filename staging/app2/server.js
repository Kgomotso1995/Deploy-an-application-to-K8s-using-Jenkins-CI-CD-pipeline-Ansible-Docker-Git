
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3002;

app.get('/', (req, res) => {
  res.send('Hello from Staging App 2 🚀');
});

app.listen(PORT, () => {
  console.log(`Staging App 2 running on port ${PORT}`);
});
