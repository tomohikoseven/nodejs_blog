var posts = [
  { title: 'title0', body: 'body0' },
  { title: 'title1', body: 'body1' },
  { title: 'title2', body: 'body2' }
];

exports.index = function( req, res ) {
  res.render('posts/index', {posts: posts} );
}

exports.show = function( req, res ) {
  res.render('posts/show', {post: posts[req.params.id] });
}

exports.edit = function( req, res ) {
  res.render('posts/edit', {post: posts[req.params.id], id: req.params.id });
}

exports.destroy = function( req, res ) {
  posts.splice(req.body.id,1);
  res.redirect('/');
}

exports.update = function( req, res ) {
  posts[req.body.id] = {
    title: req.body.title
   ,body : req.body.body
  };
  res.redirect('/');
}

exports.new = function( req, res ) {
  res.render('posts/new');
}

exports.create = function( req, res ) {
  post = {
    title: req.body.title
    , body: req.body.body
  }
  posts.push(post);
  res.redirect('/');
}

