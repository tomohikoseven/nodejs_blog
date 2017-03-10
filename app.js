var express    = require('express'),
  app = express(),
  post = require('./routes/post');

var bodyParser = require('body-parser');
var methodOverride = require('method-override');

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride('_method'));

// routing
app.get('/', post.index);
app.get('/posts/:id([0-9]+)', post.show);
app.get('/posts/new', post.new);
app.post('/posts/create', post.create);
app.get('/posts/:id/edit', post.edit);
app.post('/posts/:id', post.update);
app.post('/posts/:id/del', post.destory);

/*
app.put('/posts/:id', post.update);
app.get('/new', function(req, res){
  res.render('new');
});
*/

app.listen(3000);
console.log("server starting...");
