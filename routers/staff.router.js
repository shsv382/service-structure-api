const express = require('express');
const { 
    getStaff,
    getEmployee,
    postEmployee,
    updateEmployee
} = require('../controllers/staff.controller');

const staffRouter = express.Router()

staffRouter.use((req, res, next) => {
    next();
})

staffRouter.post('/', postEmployee)
staffRouter.put('/:employeeId', updateEmployee)
staffRouter.get('/', getStaff);
staffRouter.get('/:employeeId', getEmployee);

module.exports = staffRouter;