const express = require('express');
const path = require('path');
const divisionsRouter = require('./routers/divisions.router');
const staffRouter = require('./routers/staff.router');

const app = express();

const PORT = 4000;

app.use((req, res, next) => {
    const start = Date.now();
    next();
    const delta = Date.now() - start;
    console.log(`${req.method} ${req.url} ${delta}ms`);
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