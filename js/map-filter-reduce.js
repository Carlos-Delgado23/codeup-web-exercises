const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];


const threeLangOrMore = users.filter(year => year.languages.length >=3);

// console.log(threeLangOrMore);


const userEmails = users.map(user => user.email);
// console.log(userEmails);

let totalYears = users
    .map(user => user.yearsOfExperience)
    .reduce((a, b) => a + b / users.length, 0);

// console.log(totalYears);

let longest = users
    .map(user => user.email)
    .reduce((longest, user) => longest.length > user.length ? longest : user, '');

console.log(longest);

let listUsers = users.map(user => user.name)
    .reduce((userA, userB) => `${userA} ${userB},`, 'Your instructors are: ');
console.log(listUsers);



let uniqueLang = users
    .reduce((languages, usersLang) => {

        usersLang.languages.forEach(function (language) {
           if (languages.includes(language)){
           } else {
                    languages.push(language);
           }
       });
        return languages

    }, []);
        console.log(uniqueLang);