function submitData(name, email) {
    return fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({
            name: `${name}`,
            email: `${email}`
        })
    })
        .then(function (resp) {
            return resp.json();
        })
        .then(function (obj) {
            document.body.innerHTML = obj['id'];
        })
        .catch(function (error) {
            alert("I can't do it capn', I don't have the power!");
            document.body.innerHTML = error.message;
        });
    
}