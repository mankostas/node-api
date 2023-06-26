import express from 'express';
import cors from 'cors';
import { errorMiddleware } from './middleware/errorHandling';
import { articleRoutes } from './routes/api/V1/articleRoutes';
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


// // Test Insert in db
// db.initialize().then(async () => {

//     console.log("Inserting a new user into the database...")
//     const article = new Event()
//     article.id = 1
//     article.title = "Test Event"
//     article.description = "Test article description"
//     article.eventDate = new Date('2023-08-15 05:00:00');
//     article.location = "Kreontos 27"
//     await db.manager.save(article)
//     console.log("Saved a new user with id: " + article.id)

//     console.log("Loading users from the database...")
//     const users = await db.manager.find(Event)
//     console.log("Loaded users: ", users)

//     console.log("Here you can setup and run express / fastify / any other framework.")

// }).catch(error => console.log(error))


 export default app;

