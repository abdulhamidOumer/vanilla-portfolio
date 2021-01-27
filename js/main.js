// Get the modal
var bioModal = document.getElementById('bioModal');
var readMoreButton = document.getElementById("readMoreButton");
var closeSpan = document.getElementById("closeBioModal");


readMoreButton.onclick = function() {
    bioModal.style.display = "block";
}

closeSpan.onclick = function() {
    bioModal.style.display = "none";
}


window.onclick = function(event) {
    if (event.target == bioModal) {
        bioModal.style.display = "none";
    }
}