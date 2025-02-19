const { divisions, organization } = require('../models/divisions.model');

function getOrganization(req, res) {
    res.json(organization)
}

function getDivisions(req, res) {
    res.json(divisions)
}

function getDivision(req, res) {
    const id = Number(req.params.divisionId);
    const division = divisions.find(f => f.id === id);
    if (division) {
        res.status(200).json(division)
    } else {
        res.status(404).json({error: "Подразделение не найдено"})
    }
}

function updateDivision(req, res) {
    const id = Number(req.params.divisionId);
    const division = divisions.find(f => f.id === id);
    const divisionIndex = divisions.indexOf(f => f.id === id);
    if (divisionIndex >= 0) {
        const newDivision = {
            id: req.body.id,
            name: req.body.name,
            childrenID: divisions[divisionIndex].childrenID.concat(req.body.childrenID),
            parentID: req.body.parentID ? req.body.parentID : null,
        }
        divisions[divisionIndex] = newDivision
        res.status(200).json(newDivision)
    } else {
        res.status(404).json({error: "Подразделение не найдено"})
    }
}

function postDivision(req, res) {
    if (!req.body.name) {
        return res.status(400).json({error: "Некорректный формат данных"})
    }
    const newDivision = {
        id: divisions[divisions.length-1].id + 1,
        name: req.body.name,
        childrenID: [],
        parentID: req.body.parentID ? req.body.parentID : null,
    }
    divisions.push(newDivision);
    res.status(200).json(newDivision)
}

module.exports = {
    getDivisions,
    getOrganization,
    getDivision,
    postDivision,
}