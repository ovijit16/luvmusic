
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
            window.location.replace('/profile');
        })
        .catch(function (error) {
            alert(error);
            console.error(error);
        });
    return false;
}

// function previewPhoto() {
//     var preview = document.getElementById('preview-photo'); //selects the query named img
//     var file = document.getElementById('photo').files[0]; //sames as here
//     var reader = new FileReader();

//     reader.onloadend = function () {
//         preview.src = reader.result;
//     }

//     if (file) {
//         reader.readAsDataURL(file); //reads the data as a URL
//     } else {
//         preview.src = "";
//     }
// }

// previewPhoto();


// List of files in dropbox
var CLIENT_ID = '42zjexze6mfpf7x';

// Parses the url and gets the access token if it is in the urls hash
function getAccessTokenFromUrl() {
    // return utils.parseQueryString(window.location.hash).access_token;
    return "MyXjMD7lxrAAAAAAAAAB7uH0PeR2XEhNj8ZPnkIPtHc2ZVV4z2Ao0Yq1fqnfVtDB";
}

// If the user was just redirected from authenticating, the urls hash will
// contain the access token.
function isAuthenticated() {
    return !!getAccessTokenFromUrl();
}

// Render a list of items to #files
function renderItems(items) {
    var filesContainer = document.getElementById('files');
    items.forEach(function (item) {
        var li = document.createElement('li');
        li.innerHTML = item.name;
        item_name = item.name;
        filesContainer.appendChild(li);
    });
}

// This example keeps both the authenticate and non-authenticated setions
// in the DOM and uses this function to show/hide the correct section.
function showPageSection(elementId) {
    document.getElementById(elementId).style.display = 'block';
}

if (isAuthenticated()) {
    showPageSection('authed-section');

    // Create an instance of Dropbox with the access token and use it to
    // fetch and render the files in the users root directory.
    var dbx = new Dropbox.Dropbox({ accessToken: getAccessTokenFromUrl() });
    dbx.filesListFolder({ path: '' })
        .then(function (response) {
            renderItems(response.entries);
        })
        .catch(function (error) {
            console.error(error);
        });
} else {
    showPageSection('pre-auth-section');

    // Set the login anchors href using dbx.getAuthenticationUrl()
    var dbx = new Dropbox.Dropbox({ clientId: CLIENT_ID });
    var authUrl = dbx.getAuthenticationUrl('http://localhost:3000/');
    document.getElementById('authlink').href = authUrl;
}