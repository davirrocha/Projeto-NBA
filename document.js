let eats = document.querySelector(".east")
let west = document.querySelector(".west")
let eastList = ''
let westList = ''


eastOptions.forEach(item => {
    eastList += `
        <li>
            <a href="${item.link}" target="_blank">
            <img src="${item.img}">
             </a>
            </li>
        `
    eats.innerHTML = eastList


})


westOptions.forEach(item => {
    westList += `
        <li>
            <a href="${item.link}" target="_blank">
            <img src="${item.img}">
            </a>
        </li>
    `
    west.innerHTML = westList
})