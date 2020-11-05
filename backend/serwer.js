const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const passport = require("passport")
const passportLocal = require("passport-local").Strategy
const cookieParser = require("cookie-parser")
const bcrypt = require("bcryptjs")
const session = require("express-session")
const bodyParser = require("body-parser")
const User = require('./models/userModel')
const {use} = require("passport")

const port = 5000

const app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}))
app.use(session({
    secret: "secretcode",
    resave: true,
    saveUninitialized: true
}))
app.use(cookieParser("secretcode"))
app.use(passport.initialize())
app.use(passport.session())
require('./models/passportConfig')(passport)


// Routes
app.post("/zaloguj", (req, res, next) => {
    console.log(req.body)
    passport.authenticate("local", (err, user, info) => {
        if (err) throw err
        if (!user) res.send("Uzytkownik nie istnieje")
        else {
            req.logIn(user, err => {
                if (err) throw err
                res.send('Zalogowano')
            })
        }
    })(req, res, next)
})

app.post("/zarejestrujsie", (req, res) => {
    console.log(req.body)

    User.findOne({
        username: req.body.username
    }, async (err, doc) => {
        if (err) throw err
        if (doc) throw res.send("User Already Wxists")
        if (!doc) {
            const hashPassword = await bcrypt.hash(req.body.password, 10)
            console.log(hashPassword)
            const newUser = new User({
                username: req.body.username,
                password: hashPassword,
                email: req.body.email
            })
            await newUser.save()
            res.send("User Created!")
        }
    })
})


app.post("/user", (req, res) => {
    console.log(req.body)
})

app.listen(port, () => console.log(`Serwer działa na porcie ${port}`))

// setup mongoose

mongoose.connect("mongodb+srv://admin:admin@cluster0.hsckl.mongodb.net/<dbname>?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log("Mongoose Is Connected")
})