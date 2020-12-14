const express = require('express');

//for locating partials
const hbs = require('hbs');

// to be able to use partials in my handlebars templates
// I need to tell the hbs engine where to look for thiem
hbs.registerPartials(__dirname + '/views/partials');

const app = express();

// prerequisite to use handlebars templates
app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

// set default properties
app.locals.pageTitle = 'default page';

//make public folder available
app.use(express.static('public'));

app.get('/about', function(request, response) {
    response.render('about', {
        pageTitle: 'About',
        layout: 'layout.hbs'
    });
});
app.get('/works', function(request, response) {
    response.render('works', {
        pageTitle: 'Works'
    });
});
app.get('/gallery', function(request, response) {
    response.render('gallery', {
        pageTitle: 'Gallery'
    });
});
app.get('*', function(request, response) {
    response.render('home', {
        pageTitle: 'Home',
        layout: '/layout'
    });
});

app.listen(3000);