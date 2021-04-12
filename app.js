const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const port = 3000
app.set('views', __dirname + '/public/views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use('/assets', express.static(__dirname + '/assets'));
app.get('/scripts/phaser.min.js', function(req, res) {
  res.sendFile(__dirname + '/node_modules/phaser/dist/phaser.min.js');
});

app.get('/scripts/game.js', function(req, res) {
  res.sendFile(__dirname + '/app/game.js');
})

app.get('/', (req, res) => {
  res.render('index.html')
})

app.listen(port, () => {
  console.log(`Game app listening at http://localhost:${port}`)
})
