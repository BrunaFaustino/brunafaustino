import express from 'express';
import { resourceRoutes } from './routes';
import { setupDatabase } from './database';

const app = express();
const port = 3000;

app.use(express.json());

// Setup routes
app.use('/resources', resourceRoutes);

// Setup database
setupDatabase();

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
