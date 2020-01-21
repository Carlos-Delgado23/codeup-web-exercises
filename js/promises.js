let wait = (num) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, num);
    })
};

wait(1000).then(() => console.log('You\'ll see this after 1 second'));
wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));



function lastCommit(username) {
let url = `https://api.github.com/users/${username}/events/public`


    fetch(url, {
            headers: {
                'Accept': 'application/vnd.github.v3+json',
                'Authorization': `token ${gitHubTokenUsers}`
            }
        })
        .then(data => data.json())
        .then(data => data.find(event => event.type === "PushEvent"))
        .then(event => event.created_at)
        .then(date => console.log(date));
}

console.log(lastCommit('carlos-delgado23'));