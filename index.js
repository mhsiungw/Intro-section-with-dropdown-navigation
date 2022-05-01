;['.nav__features', '.nav__company'].forEach((className) => {
    document.querySelector(className).addEventListener('click', (e) => {
        document.querySelector(className).classList.toggle('active')
    })
})

document.querySelector('.toggle--label').addEventListener('click', (e) => {
    document.querySelector('.nav__list-container').classList.toggle('active')
})
