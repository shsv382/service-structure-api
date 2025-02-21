const express = require('express');
const path = require('path');
const cors = require('cors')
const bodyParser = require('body-parser')
const divisionsRouter = require('./routers/divisions.router');
const staffRouter = require('./routers/staff.router');

const app = express();

const PORT = 4000;

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use((req, res, next) => {
    setTimeout(() => {
        next()
    }, 1000)
})
app.use(express.json());
app.use('/divisions', divisionsRouter);
app.use('/staff', staffRouter);

// app.use('/signup', authRouter.signup);
// app.use('/login', authRouter.login);
// app.use('/auth', authRouter);

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.status(200).json('Сервер включен!');
});

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
})