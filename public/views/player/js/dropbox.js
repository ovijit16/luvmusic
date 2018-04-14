// upload to dropbox
function uploadFile() {
    // var ACCESS_TOKEN = document.getElementById('access-token').value;
    var ACCESS_TOKEN = "MyXjMD7lxrAAAAAAAAAB7uH0PeR2XEhNj8ZPnkIPtHc2ZVV4z2Ao0Yq1fqnfVtDB";
    var dbx = new Dropbox.Dropbox({ accessToken: ACCESS_TOKEN });
    var fileInput = document.getElementById('musicsrc');
    var file = fileInput.files[0];
    dbx.filesUpload({ path: '/' + file.name, contents: file })
        .then(function (response) {
            var results = document.getElementById('music_src-err');
            results.appendChild(document.createTextNode('File uploaded!'));
            console.log(response);
            // window.location.replace('/profile');
            var path = '/' + file.name;
            
            console.log('\nPath: ' + path);
            
        })
        .catch(function (error) {
            alert(error);
            console.error(error);
        });
    return false;
}

