const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/api/message', (req, res) => {
  res.json({ message: 'Hello from the server!' });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});