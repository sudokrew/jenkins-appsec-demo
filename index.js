const express = require('express');
const session = require('express-session');
const app = express();

const PORT = process.env.PORT || 3000;
const COOKIE_SECRET = process.env.COOKIE_SECRET || 'testcookie';
const DOMAIN = process.env.DOMAIN || 'localhost';

const cookieOptions = {
  domain: DOMAIN,
  httpOnly: true,
  expires: false,
  // path: "/admin",
  sameSite: true
}

if (process.env.NODE_ENV === 'production') {
  app.set('trust proxy', 1); // trust first proxy
  cookieOptions.secure = true; // serve secure cookies
}

app.use(session({
  secret: COOKIE_SECRET,
  resave: false,
  rolling: true,
  saveUninitialized: false,
  cookie: cookieOptions
}));

app.get('/', (req, res) => {
  const msg = {
    msg: "Hello, Jenkins...."
  }
  return res.status(200).json(msg);
})

app.get('/admin', (req, res) => {
  if (!req.session.loggedIn) return res.status(401).send();

  return res.json({ msg: "Hello admin!"});
});

app.post('/login', (req, res) => {
  req.session.loggedIn = true;
  return res.redirect('/admin');
});

module.exports = app.listen(PORT, () => {
  console.log(`Application started on port ${PORT}`);
});