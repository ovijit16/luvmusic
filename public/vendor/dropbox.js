var dbx = new Dropbox({ accessToken: MyXjMD7lxrAAAAAAAAAB7uH0PeR2XEhNj8ZPnkIPtHc2ZVV4z2Ao0Yq1fqnfVtDB });

dbx.usersGetCurrentAccount()
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.error(error);
    });

dbx.filesListFolder({path: ''})
.then(function(response) {
    console.log(response.entries);
})
.catch(function(error) {
    console.error(error);
});