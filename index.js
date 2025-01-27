//Including lib
const express = require("express")
const mongoose = require("mongoose")
const handlebars_express = require("express-handlebars")
const Handlebars = require('handlebars')
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access')
const routes = require("./routes/routes")

//Env setting
const PORT = process.env.PORT || 4444
const app = express();

//Registration Template Engine
const hbs = handlebars_express.create({
    defaultLayout: "main",
    extname: "hbs",
    handlebars: allowInsecurePrototypeAccess(Handlebars)
    /*Для возможности доступа к объектам из hbs файлов
    требуется скачать и подключить handlebars (5,18 строки соответсвенно)
    */
})

app.engine("hbs",hbs.engine)
//Setting File extension
app.set('view engine', 'hbs')
//Setting folder for views files
app.set('views','views')
//Setting folder for staticfiles
app.use(express.static(__dirname + "/src/"))

app.use(express.urlencoded({extended: true}))

app.use(routes)

//Backend

async function Start(){
    try {
        await mongoose.connect('mongodb+srv://Orynik:Q1qqqqqq!@cluster0-ycbad.mongodb.net/School',{
            useNewUrlParser: true,
            useFindAndModify: false,
            useUnifiedTopology: true
        })

        app.listen(PORT, ()=>{
            console.log("Server has been started...")
        })
    } catch (e) {
        console.log(e)
    }
}

Start();