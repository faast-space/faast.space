import '../node_modules/@fortawesome/fontawesome-free/js/all'
console.info('Hello FaastSpace !')

document.addEventListener('DOMContentLoaded', () => {
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0)

    if ($navbarBurgers.length === 0) {
        return
    }

    // Add a click event on each of them
    $navbarBurgers.forEach(el => {
        el.addEventListener('click', () => {
            const target = el.dataset.target
            const $target = document.getElementById(target)

            el.classList.toggle('is-active')
            $target.classList.toggle('is-active')
        })
    })

})