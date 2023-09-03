const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'arry_t',
  database: 'visualizer',
});

connection.connect((err) => {
  if (err) {
    console.error('Failed to connect to the database:', err);
    return;
  }
  console.log('Connected to the database');
// Example route to store data
app.post('/api/data', (req, res) => {
    const data = req.body;
  
    // Store the data in the MySQL database
    connection.query('INSERT INTO data SET ?', data, (err, result) => {
      if (err) {
        console.error('Failed to store data:', err);
        res.status(500).json({ error: 'Failed to store data' });
        return;
      }
  
      res.status(200).json({ message: 'Data stored successfully' });
    });
  });
  
  // Example route to retrieve stored data
  app.get('/api/data', (req, res) => {
    // Retrieve data from the MySQL database
    connection.query('SELECT * FROM data', (err, rows) => {
      if (err) {
        console.error('Failed to retrieve data:', err);
        res.status(500).json({ error: 'Failed to retrieve data' });
        return;
      }
  
      res.status(200).json(rows);
    });
  });
  
  // Define API endpoints and handle data storage/retrieval operations here
});
