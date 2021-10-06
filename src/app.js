const express = require('express');
const app = express();
const port = 3000
const path  = require('path');
const hbs = require('hbs')
// public static path
const staticPath = (path.join(__dirname,'../public'));
const template_path = (path.join(__dirname,'../templates/views'));
const partials_path = (path.join(__dirname,'../templates/partials'));

app.set('view engine', 'hbs'); //views hbs engine
app.set('views',template_path )
hbs.registerPartials(partials_path)

app.use(express.static(staticPath))



// routing
app.get("/", (req,res) =>{
    res.render('index')
})
app.get("/about", (req,res) =>{
    res.render('about.hbs')
})
app.get("/weather", (req,res) =>{
    res.render('weather')
})
app.get("*", (req,res) =>{
    res.render('404error',{
        errorMsg : 'opps! page not Found'
    })
})

app.listen(port,()=>{
    console.log(`listening to the port ${port}`);
})
