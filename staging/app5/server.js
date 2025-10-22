
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3005;

app.get('/', (req, res) => {
  res.send('Hello from Staging App 5 🚀');
});

app.listen(PORT, () => {
  console.log(`Staging App 5 running on port ${PORT}`);
});
