document.querySelector('#getMon').addEventListener('click', getMon)
document.querySelector('#dataType').onchange = function() {
    return document.querySelector('#dataType').value = this.value
}

//This function removes the created elements.FIGURE OUT HOW THIS WORKS.
function removeElements(elements) {
    for (var i = 0; i < elements.length; i++) {
        elements[i].parentNode.removeChild(elements[i]);
    }
}

function getMon() {
    let userMon = document.querySelector('#monName').value.toLowerCase();
    let userColor = document.querySelector('#dataType').value;
    let url = `https://digimoncard.io/api-public/search.php?n=${userMon}&color=${userColor}`;


    fetch(url).then(res => res.json()).then(data => {
            console.log(data)

            removeElements(document.querySelectorAll('li'));
            //This removes the created elements.FIGURE OUT HOW THIS WORKS.
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