const express = require('express');
const cors = require('cors');
const ytdl = require('ytdl-core');
const app = express();

app.use(cors());

app.get('/download', (req, res) => {
  const url = req.query.url;
  ytdl(url, { filter: format => format.container === 'mp4' })
    .pipe(res);
});

app.get('/', (req, res) => {
  res.send('Hello, this is the YouTube Video Downloader server!');
});
app.listen(4000, () => {
  console.log('Server is running on port 4000');
});
