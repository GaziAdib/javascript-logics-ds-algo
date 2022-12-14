// const users = ['adib', 'choya', 'tushi', 'malkova', 'faria', 'najifa', 'prince', 'choiti', 'maya', 'fahad'];

// const teams = [
//     {
//         id: 1,
//         worth: 5000,
//         title: 'dev',
//         members: [
//             'adib',
//             'choya',
//             'tushi',
//             'malkova'
//         ]
//     },
//     {
//         id: 2,
//         worth: 6000,
//         title: 'design',
//         members: [
//             'faria',
//             'najifa',
//             'prince'
//         ]
//     },
//     {
//         id: 3,
//         worth: 8000,
//         title: 'graphics',
//         members: [

//         ]
//     }
// ]











// const totalWorth = teams.reduce((acc, item) => acc + item.worth, 0);
// console.log(totalWorth);


// const devTeam = teams?.find((item) => item.title === 'dev');
// console.log(devTeam);

// const getMembersNotInDevTeam = users?.filter((u) => !devTeam.members?.some((m) => m === u))

// console.log(getMembersNotInDevTeam);

// const adibInWhichTeamIndex = teams?.findIndex((team) => team.members.includes('adib'));
// console.log('adib in team : ', adibInWhichTeamIndex);

// const adibInWhichTeam = teams?.find((team) => team.members.includes('adib'));
// console.log('adib in team : ', adibInWhichTeam.title);


// const names = ['a ', 'b ', 'c '];

// tags = 'dev,design,programming,web,coding,react,javascript'
// console.log(typeof (tags));

// const tagarr = tags.split(',');

// // console.log(tagarr[0]);

// tagarr.forEach(element => {
//     console.log(element)
// });

// // names.forEach(element => {
// //     console.log(element.split(','));
// // });

// const allMembersInDev = teams.filter((item) => item.title === 'dev')
// console.log(allMembersInDev);

// const memebersInDev = allMembersInDev.forEach((element) => {
//     console.log(element.members)
// })



const two_dim_array = [
    'class 1',
    'three students',
    [
        'anik',
        'adib',
        'afra'
    ],
    'class 2',
    '4 students',
    [
        'choiti',
        'mehjabin',
        ['c1', 'c2', 'c3']
    ]

]

console.log(two_dim_array.flat(2))