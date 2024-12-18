const express = require('express');
const app = express();
app.use(express.static('public'));
app.get('/api/data', (req, res) => {
  res.json([
    {month: "Jan", sales: Math.random() * 100},
    {month: "Feb", sales: Math.random() * 100},
    {month: "Mar", sales: Math.random() * 100}
  ]);
});
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});