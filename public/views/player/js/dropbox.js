// upload to dropbox
function uploadFile() {
    // var ACCESS_TOKEN = document.getElementById('access-token').value;
    var ACCESS_TOKEN = "MyXjMD7lxrAAAAAAAAAB7uH0PeR2XEhNj8ZPnkIPtHc2ZVV4z2Ao0Yq1fqnfVtDB";
    var dbx = new Dropbox.Dropbox({ accessToken: ACCESS_TOKEN });
    var fileInput = document.getElementById('photo');
    var file = fileInput.files[0];
    dbx.filesUpload({ path: '/' + file.name, contents: file })
        .then(function (response) {
            var results = document.getElementById('results');
            results.appendChild(document.createTextNode('File uploaded!'));
            console.log(response);
            // photo_name = file.name;
            // alert(photo_name);
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

function previewPhoto() {
    var preview = document.getElementById('preview-photo'); //selects the query named img
    var file = document.getElementById('photo').files[0]; //sames as here
    var reader = new FileReader();

    reader.onloadend = function () {
        preview.src = reader.result;
    }

    if (file) {
        reader.readAsDataURL(file); //reads the data as a URL
    } else {
        preview.src = "";
    }
}

previewPhoto();
