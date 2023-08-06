const bizTitle = document.querySelector('#biz-title')
const reviewsToView = document.querySelector('#reviews')

const renderHead = function () {
    const reviews = getSavedRatings()
    reviews.forEach((review) => {
        let rating = review.ratingNumber
        let text = review.reviewText
        const ratingNumber = document.createElement('label')
        ratingNumber.textContent = rating
        const reviewText = document.createElement('p')
        reviewText.textContent = text
        reviewsToView.appendChild(ratingNumber)
        reviewsToView.appendChild(reviewText)
    })


}

renderHead()