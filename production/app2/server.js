
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

app.get('/', (req, res) => {
  res.send('Hello from Production App 2 🚀');
});

app.listen(PORT, () => {
  console.log(`Production App 2 running on port ${PORT}`);
});
