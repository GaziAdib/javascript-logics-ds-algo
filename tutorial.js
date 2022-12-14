const users = ['adib', 'choya', 'tushi', 'malkova', 'faria', 'najifa', 'prince', 'choiti', 'maya', 'fahad'];


const teams = [
    {
        id: 1,
        qty: 10,
        worth: 5000,
        title: 'dev',
        members: [
            'adib',
            'choya',
            'tushi',
            'malkova'
        ]
    },
    {
        id: 2,
        qty: 3,
        worth: 6000,
        title: 'design',
        members: [
            'faria',
            'najifa',
            'prince'
        ]
    },
    {
        id: 3,
        qty: 2,
        worth: 8000,
        title: 'graphics',
        members: [
            'choiti',
            'maya',
            'fahad'
        ]
    }
]



// chaning and filter and some compare 2 arrays info


const devTeam = teams.find((item) => item.title === 'dev');
console.log(devTeam);


const usersNotInDevTeam = users.filter((user) => !devTeam.members.some((member) => member === user))
console.log(usersNotInDevTeam);

// string split 

const tags = 'react ,nodejs ,express ,mongo';
console.log(typeof (tags));

const tagArr = tags.split(' ,');
console.log(tagArr);









// const getAllMembersInGraphicsTeam = teams.filter((item) => item.title === 'graphics').forEach((el) => {
//     console.log(el.members)
// })







// Find Index

// const findDesignTeamIndex = teams.findIndex((item) => item.title === 'graphics');
// console.log(findDesignTeamIndex);



// const findAdibInTeamMembers = teams.find((t) => t.members.includes('adib'));
// console.log(findAdibInTeamMembers.title);




const totalWorth = teams.reduce((acc, item) => acc + (item.worth * item.qty), 0);
console.log(totalWorth);

// FIND


