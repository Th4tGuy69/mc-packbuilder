console.debug("Init");

const remote = require('electron').remote;

document.getElementById("buttons").addEventListener("click", function (e) {
    var window = remote.getCurrentWindow();
    window.close();
});