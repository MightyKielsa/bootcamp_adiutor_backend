import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());
app.listen(PORT);

app.get('/', (req, res) => {
  res.json({ sucess: true, payload: 'Hello home page' });
});

app.get('/users/:id', (req, res) => {
  //payload will be query on all of the notes of the user based on req.params.id
  //pool.query('Select * from notes join profile on notes.userID=profile.userID')
  res.json({ sucess: true, payload: 'you wish' });
});
