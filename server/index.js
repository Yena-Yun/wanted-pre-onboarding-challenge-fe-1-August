import { createConnection } from 'models/db';
import app from './app';

createConnection();

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Server Listening on ${port}...`);
});
