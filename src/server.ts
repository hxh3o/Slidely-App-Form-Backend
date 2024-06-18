import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import { submissionRouter } from './routes/submissionRoutes';

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (optional)
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/api', submissionRouter);

// Ping endpoint
app.get('/ping', (req, res) => {
  res.send('true');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
