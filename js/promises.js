// let wait = function (num) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('Here is your data: ...');
//         }, num);
//     })
// };
//
// wait(1000).then(() => console.log('You\'ll see this after 1 second'));
// wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));




fetch('https://api.github.com/users',
    {headers: {
            'Accept': 'application/vnd.github.v3+json',
            'Authorization': gitHubTokenUsers

            }}).then(function (username) {
    console.log(username);
});
