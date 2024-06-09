import express from "express";
import appRoutes from './routes';
import initialiseDatabase from "./database";

const app = express();
const port = 8080;

app.use(express.json());
initialiseDatabase();

// Here, we are adding a path to receive requests for appRoutes...
app.use('/v1', appRoutes);

app.listen(port, () => {
  console.log(`Running at http://localhost:${port} on local...`);
});

process.on('SIGINT', () => {
  console.log('SIGINT signal received; closing database connection.');
  db.close((err) => {
    if (err) {
        console.error('Could not close database: ', err.message);
    } else {
        console.log('Closed the SQLite database connection.');
    }
    process.exit(0);
});});