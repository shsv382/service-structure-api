const staff = require('../models/staff.model');

function getStaff(req, res) {
    res.json(staff)
}

function getEmployee(req, res) {
    const id = Number(req.params.employeeId);
    const employee = staff.find(f => f.id === id);
    if (employee) {
        res.status(200).json(employee)
    } else {
        res.status(404).json({error: "Сотрудник не найден"})
    }
}

function postEmployee(req, res) {
    if (
        !req.body.firstName ||
        !req.body.lastName ||
        !req.body.birthday
    ) {
        return res.status(400).json({error: "Некорректный формат данных"})
    }
    const newEmployee = {
        id: staff[staff.length-1].id + 1,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        divisionID: req.body.divisionID,
        role: req.body.role,
        birthday: new Date(req.body.birthday),
        startDate: new Date(req.body.startDate),
    }
    staff.push(newEmployee);
    res.status(200).json(newEmployee)
}

module.exports = {
    getStaff,
    getEmployee,
    postEmployee,
}