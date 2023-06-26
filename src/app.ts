import express from 'express';
import cors from 'cors';
import { errorMiddleware } from './middleware/errorHandling';
import { articleRoutes } from './routes/api/V1/eventRoutes';
import { db } from "./includes/db"
// import { Event } from "./entities/Event"


// Express
const app = express();
// Cross Origin
app.use(cors());
// JSON Middleware
app.use(express.json());
// Routes
app.use('/api/v1/events', articleRoutes);
// Error handling middleware
app.use(errorMiddleware);
// Express Port
const port = process.env.PORT || 3000;
process.env.TZ = "Europe/Athens";

app.get('/' , (req,res) => {
  res.send('Server is running')
})

db.initialize();

// Init Server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

 export default app;

