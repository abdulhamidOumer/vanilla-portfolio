// Get the modal
var bioModal = document.getElementById('bioModal');
var readMoreButton = document.getElementById("readMoreButton");

readMoreButton.addEventListener('click', scrollToBio);

function scrollToBio(e) {
    // bioModal.style.display = "block";
    e.preventDefault();
    const offsetTop = document.querySelector('#shortBio').offsetTop;

    scroll({
        top: offsetTop,
        behavior: 'smooth'
    })
}