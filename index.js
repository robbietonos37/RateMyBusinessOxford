document.querySelector('#rating-number').addEventListener('keypress', (e) => {
    e.preventDefault()

})

let ratings = [{
    ratingNumber: 0,
    reviewText: ''
}
]

document.querySelector('#new-rating').addEventListener('submit', function (e) {
    e.preventDefault()
    let ratingNumberValue = document.querySelector('#rating-number').value
    let ratingTextBody = document.querySelector('#review-text').value
    console.log(ratingNumberValue)
    console.log('what is going on')
    ratings.push({
        ratingNumber: ratingNumberValue,
        reviewText: ratingTextBody
    })

    saveRatings(ratings)

    this.reset()

})
