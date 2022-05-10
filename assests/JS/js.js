document.querySelector('#getAllMon').addEventListener('click', getAllMon)
document.querySelector('#getMon').addEventListener('click', getMon)
document.querySelector('#dataType').onchange = function() {
    return document.querySelector('#dataType').value = this.value
}
document.querySelector('#cardSet').onchange = function() {
    return document.querySelector('#cardSet').value = this.value
}

//This function removes the created elements.FIGURE OUT HOW THIS WORKS.
function removeElements(elements) {
    for (var i = 0; i < elements.length; i++) {
        elements[i].parentNode.removeChild(elements[i]);
    }
}


function getMon() {
    let userMon = document.querySelector('input').value
    let userAttribute = document.querySelector('#dataType').value
    let set = document.querySelector('#cardSet').value
    let url = `https://digimoncard.io/api-public/search.php?n=${userMon}&color=${userAttribute}&set_name=${set}`

    fetch(url).then(res => res.json()).then(data => {
            console.log(data)

            removeElements(document.querySelectorAll('li'));
            //This removes the created elements.FIGURE OUT HOW THIS WORKS.
            console.log(set)
            data.forEach(obj => {
                let newLi = document.createElement('li');
                let newImg = document.createElement('img');
                newImg.src = obj.image_url;
                newLi.appendChild(newImg)
                document.querySelector('ul').appendChild(newLi)
            })
        })
        .catch(err => {
            console.log(`error ${err}`)
        })
}

function getAllMon() {
    let userMon = document.querySelector('input').value
    let url = `https://digimoncard.io/api-public/search.php?n=${userMon}`


    fetch(url).then(res => res.json()).then(data => {
            console.log(data)
            data.forEach(obj => {

                removeElements(document.querySelectorAll('li'));

                let newLi = document.createElement('li');
                let newImg = document.createElement('img');

                newImg.src = obj.image_url;

                newLi.appendChild(newImg)

                document.querySelector('ul').appendChild(newLi)
            })

        })
        .catch(err => {
            console.log(`error ${err}`)
        })

}