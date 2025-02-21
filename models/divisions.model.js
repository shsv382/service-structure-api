const divisions = {
    "1": {
        "id": 1,
        "name": "Научно-техническое объединение",
        "acronym": "НТИ",
        "childrenID": [
            5, 13
        ]
    },
    "2": {
        "id": 2,
        "name": "Служба случайных связей и интересов",
        "acronym": "СССИ",
        "childrenID": [
            3,
            6
        ]
    },
    "3": {
        "id": 3,
        "name": "Управление интернет-телевидения и обогащения",
        "acronym": "УИТО",
        "parentID": 2,
        "childrenID": [
            7,
            10
        ]
    },
    "4": {
        "id": 4,
        "name": "Образовательное управление",
        "acronym": "ОУ",
        "childrenID": []
    },
    "5": {
        "id": 5,
        "name": "Особый отдел",
        "parentID": 1,
        "childrenID": []
    },
    "6": {
        "id": 6,
        "name": "Управление правильного питания",
        "acronym": "УПП",
        "parentID": 2,
        "childrenID": [
            11,
            12
        ]
    },
    "7": {
        "id": 7,
        "name": "1 отделение",
        "parentID": 3,
        "childrenID": [
            9
        ]
    },
    "8": {
        "id": 8,
        "name": "2 направление",
        "parentID": 9,
        "childrenID": []
    },
    "9": {
        "id": 9,
        "name": "3 группа",
        "parentID": 7,
        "childrenID": [
            8
        ]
    },
    "10": {
        "id": 10,
        "name": "2 группа",
        "parentID": 3,
        "childrenID": []
    },
    "11": {
        "id": 11,
        "name": "3 группа",
        "parentID": 6,
        "childrenID": []
    },
    "12": {
        "id": 12,
        "name": "4 группа",
        "parentID": 6,
        "childrenID": []
    },
    "13": {
        "id": 13,
        "name": "Управление очень интересных игр",
        "acronym": "УОПИ",
        "childrenID": [14],
        "parentID": 1
    },
    "14": {
        "id": 14,
        "name": "Отдел карт",
        "acronym": "ОК",
        "childrenID": [],
        "parentID": 13
    },
    "lastIndex": 12,
}

const organization = () => {
    const roots = [];

    Object.values(divisions).forEach(dept => {
        if (dept.id) {
            dept.children = [...dept.childrenID.map(child => divisions[child])]
            if (!dept.parentID || !Number(dept.parentID)) {
                roots.push(dept);
            }
        }
    })
    return roots
}

// const organization = {
//     id: 0,
//     name: '',
//     chiefID: 0,
//     parentID: 0,
//     children: [
//     {
//         id: 1,
//         name: 'Научно-техническое объединение',
//         acronym: 'НТИ',
//         chiefID: 1,
//         parentID: 0,
//         children: [
//         {
//             id: 5,
//             name: 'Особый отдел',
//             chiefID: 17,
//             parentID: 1,
//             children: [],
//         }
//         ]
//     },
//     {
//         id: 2,
//         name: 'Служба случайных связей и интересов',
//         acronym: 'СССИ',
//         chiefID: 5,
//         parentID: 0,
//         children: [
//         {
//             id: 3,
//             name: 'Управление интернет-телевидения и обогащения',
//             acronym: 'УИТО',
//             chiefID: 9,
//             parentID: 2,
//             children: [
//             {
//                 id: 7,
//                 name: '1 отделение',
//                 chiefID: 25,
//                 parentID: 3,
//                 children: [
//                 {
//                     id: 9,
//                     name: '3 группа',
//                     chiefID: 33,
//                     parentID: 7,
//                     children: [
//                     {
//                         id: 8,
//                         name: '2 направление',
//                         chiefID: 29,
//                         parentID: 9,
//                         children: []
//                     },
//                     ],
//                 },
//                 ],
//             },
//             {
//                 id: 10,
//                 name: '2 группа',
//                 chiefID: 37,
//                 parentID: 3,
//                 children: []
//             }
//             ],
//         },
//         {
//             id: 6,
//             name: 'Управление правильного питания',
//             acronym: 'УПП',
//             chiefID: 21,
//             parentID: 2,
//             children: [
//             {
//                 id: 11,
//                 name: '3 группа',
//                 chiefID: 41,
//                 parentID: 6,
//                 children: []
//             },                 
//             {
//                 id: 12,
//                 name: '4 группа',
//                 chiefID: 45,
//                 parentID: 6,
//                 children: []
//             }
//             ],
//         },
//         ],
//     },
//     {
//         id: 4,
//         name: 'Образовательное управление',
//         acronym: 'ОУ',
//         chiefID: 13,
//         parentID: 0,
//         children: [],
//     },
//     ],
// };

module.exports = { 
    divisions,
    organization
 };