/* kicks off app when the DOM is loaded */
window.addEventListener("load", generateGrid);



// globale variabler
// let myData = null; //til data objekt opgaven
const myImages = [
    "assets/img/elephant.jpg",
    "assets/img/standard_tiger.jpg",
    "assets/img/Brachypelma_smithi.jpg",
    "assets/img/koala.jpg",
    "assets/img/great-white.jpg"
]; // til array opgaven, byg dit array af billed urlér her.

const myApp = document.getElementById("app")



function generateGrid() {
    clearApp();

    myImages.map((imageUrl) => {

        createCard(imageUrl);
    })
}

function createCard(myUrl) {

    let myArticalTag = document.createElement('article');
    myArticalTag.classList.add('galleryCard')
    let myImageTag = document.createElement('img');
    myImageTag.src = myUrl;
    myImageTag.addEventListener('click', clickSmall);

    myArticalTag.appendChild(myImageTag);

    myApp.appendChild(myArticalTag);
}


function clickSmall(myEvent) {
    let myUrl = myEvent.target.src;
    buldBig(myUrl);
}

function buldBig(myUrl) {
    clearApp();

    let myArticalTag = document.createElement('article');
    myArticalTag.classList.add('detailView')
    
    let myImageTag = document.createElement('img');
    myImageTag.src = myUrl;
    myImageTag.addEventListener('click', generateGrid);

    myArticalTag.appendChild(myImageTag);

    myApp.appendChild(myArticalTag);
}

function clearApp() {
    myApp.innerHTML = "";
}

