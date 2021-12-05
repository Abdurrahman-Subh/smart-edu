const express = require('express');
const ejs = require('ejs');
const pageController = require('./controllers/pageController');
const app = express();

//Template Engine
app.set('view engine', 'ejs');

//MiddleWares
app.use(express.static('public'));

//Routing
app.get('/', pageController.getMainPage);

app.get('/about', pageController.getAboutPage);
app.get('/dashboard', pageController.getDashPage);
app.get('/courses', pageController.getCoursesPage);
app.get('/contact', pageController.getContactPage);

const port = 3000;

app.listen(port, () => {
  console.log(`App Listening On Port ${port}...`);
});
