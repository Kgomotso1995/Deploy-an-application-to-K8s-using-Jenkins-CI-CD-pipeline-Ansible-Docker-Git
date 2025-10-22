
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3003;

app.get('/', (req, res) => {
  res.send('Hello from Staging App 3 🚀');
});

app.listen(PORT, () => {
  console.log(`Staging App 3 running on port ${PORT}`);
});
