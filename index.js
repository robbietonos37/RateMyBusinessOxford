const reviewForm = document.querySelector('#new-rating')

document.querySelector('#rating-number').addEventListener('keypress', (e) => {
    e.preventDefault()

})

const ratings = getSavedRatings()

reviewForm.addEventListener('submit', (e) => {
    e.preventDefault()
    let ratingNumberValue = document.querySelector('#rating-number').value
    let ratingTextBody = document.querySelector('#review-text').value
    const id = uuidv4()
    ratings.push({
        id: id,
        ratingNumber: ratingNumberValue,
        reviewText: ratingTextBody
    })
    saveRatings(ratings)

    reviewForm.reset()
})

/*
document.querySelector('#view-ratings').addEventListener('click', (e) => {

})
*/