const express = require('express');
const app = express();
const port = 3000;

// Welcome route
app.get('/', (req, res) => {
  res.json({ message: "Welcome to Express" });
});

// Users route
app.get('/users', (req, res) => {
  // Mock user data
  const users = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
    { id: 3, name: 'Bob Johnson' }
  ];
  res.json(users);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
