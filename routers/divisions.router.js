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
divisionsRouter.put('/:divisionId', updateDivision)
divisionsRouter.get('/', getOrganization);
divisionsRouter.get('/:divisionId', getDivision);

module.exports = divisionsRouter;