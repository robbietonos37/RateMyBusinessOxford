const toReviewButtons = document.querySelectorAll('.view-reviews')

toReviewButtons.forEach(function (apt) {
    apt.addEventListener('click', (event) => {
        event.preventDefault()
        location.assign('/view-reviews.html')
    })
})