const toReviewButtons = document.querySelectorAll('.view-reviews')

let head = 'bro fuck this shit'
toReviewButtons.forEach(function (apt) {
    apt.addEventListener('click', (event) => {
        event.preventDefault()
        let brobro = 'dude fuck you'
        location.assign('/view-reviews.html')

    })

})

head = brobro