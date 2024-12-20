const express = require('express');
const app = express();
app.use(express.json());

const connectDB = require('./database/todoDatabase');
connectDB();

const todoRoutes = require('./routes/todo.routes');
app.use('/api/v1/todo', todoRoutes);



app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

// Create   POST
// Read     GET 
// Update   PUT
// Delete   DELETE

