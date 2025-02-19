const express = require('express');
const { 
    getOrganization,
    getDivisions,
    getDivision,
    updateDivision,
    postDivision
} = require('../controllers/divisions.controller');

const divisionsRouter = express.Router()

divisionsRouter.use((req, res, next) => {
    next();
})

divisionsRouter.post('/', postDivision)
divisionsRouter.put('/divisionId', updateDivision)
divisionsRouter.get('/', getDivisions);
divisionsRouter.get('/structured', getOrganization);
divisionsRouter.get('/:DivisionId', getDivision);

module.exports = divisionsRouter;