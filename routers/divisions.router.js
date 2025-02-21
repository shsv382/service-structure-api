const express = require('express');
const { 
    getOrganization,
    getDivision,
    updateDivision,
    postDivision,
    getGivisionStaff
} = require('../controllers/divisions.controller');

const divisionsRouter = express.Router()

divisionsRouter.use((req, res, next) => {
    next();
})

divisionsRouter.post('/', postDivision)
divisionsRouter.put('/:divisionId', updateDivision)
divisionsRouter.get('/', getOrganization);
divisionsRouter.get('/:divisionId', getDivision);
divisionsRouter.get('/:divisionId/staff', getGivisionStaff);

module.exports = divisionsRouter;