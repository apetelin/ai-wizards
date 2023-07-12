import express from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv';

dotenv.config({path: require('find-config')('.env')});
console.log(`process.env.PORT: ${process.env.PORT}`)

const app = express();
const port = process.env.PORT || 3000;

app.use(express.text());
app.use(cors({
    credentials: true,
  }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/aiwizards', require('./routes/aiwizardsRoutes'));

app.listen(port, () => console.log(`Server is listening on port ${port}`));

export default app;