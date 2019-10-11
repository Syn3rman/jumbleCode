const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const session = require('express-session');
app.use(cookieParser());
// Use heroku env variable or port 7000
const port = process.env.PORT || 7000;
app.listen(port,function(){console.log('Hey, listening on port %s', port);});

app.set('trust proxy',true);

//sessions
app.use(session({
    secret: 'Enter_secret_here',
    resave: true,
    saveUninitialized: true
}));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// body parser middleware
app.use(express.json());
// url encoding
app.use(express.urlencoded({extended:false}));
    
// Routes
app.use('/',require('./server'));
