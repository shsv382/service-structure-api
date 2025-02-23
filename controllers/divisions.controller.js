const { divisions, organization } = require('../models/divisions.model');
const staff = require('../models/staff.model')

function getOrganization(req, res) {
    const org = organization()
    res.json(org)
}

function getDivisions(req, res) {
    res.json(divisions)
}

function getDivision(req, res) {
    const id = Number(req.params.divisionId);
    const division = Object.values(divisions).find(f => f.id == id);
    if (division) {
        res.status(200).json(division)
    } else {
        res.status(404).json({error: "Подразделение не найдено"})
    }
}

function updateDivision(req, res) {
    const id = Number(req.params.divisionId);
    const division = divisions[id];
    if (!division) {
        res.status(404).json({error: "Подразделение не найдено"})
    } else {
        if (req.body.name) division.name = req.body.name
        if (req.body.acronym) division.acronym = req.body.acronym
        res.status(200).json(division)
    }
}

function postDivision(req, res) {
    if (!req.body.name) {
        return res.status(400).json({error: "Некорректный формат данных"})
    }
    const newDivision = {
        id: divisions["lastIndex"] + 1,
        name: req.body.name,
        acronym: req.body.acronym || '',
        childrenID: [],
        parentID: req.body.parentID ? req.body.parentID : null,
    }
    divisions["lastIndex"] += 1
    divisions[divisions["lastIndex"]] = newDivision;
    if (req.body.parentID) {
        const id = Number(req.body.parentID);
        const parent = Object.values(divisions).find(f => f.id == id);
        parent.childrenID.push(newDivision.id)
    }
    res.status(200).json(newDivision)
}

function getChildrenIds(id) {
    let children = [];
    const division = Object.values(divisions).find(f => f.id == id);

    if (division && division.childrenID) {
        for (let childID of divisions[id].childrenID) {
            children.push(childID);
            children = children.concat(getChildrenIds(childID));
        }
    }
    return children;
}

function getGivisionStaff(req, res) {
    const id = Number(req.params.divisionId);
    const division = Object.values(divisions).find(f => f.id == id);
    if (division) {
        let ids = [division.id].concat(getChildrenIds(division.id));
        let output = staff.filter(employee => ids.indexOf(employee.divisionID) >= 0)
        res.status(200).json(output)
    } else {
        res.status(404).json({error: "Подразделение не найдено"})
    }
}

module.exports = {
    getDivisions,
    getOrganization,
    getDivision,
    postDivision,
    updateDivision,
    getGivisionStaff,
}