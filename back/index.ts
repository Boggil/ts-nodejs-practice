import * as express from 'express';

const app = express();
const prod: boolean = process.env.NODE_ENV === 'production';

app.set('port', prod ? process.env.PORT : 3065);
app.get('/', (req, res, next) => {
  res.send('react nodebrind running!');
});

app.listen(app.get('port'), () => {
  console.log(`server is running on ${app.get('port')}`);
});