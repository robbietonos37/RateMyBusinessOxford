let ratingNumberValue = document.querySelector('#rating-number')
let ratingTextBody = document.querySelector('#review-text')

document.querySelector('#edit-review').addEventListener('click', function () {
    // ratings.push({
    //     ratingNumber: ratingNumberValue.value,
    //     reviewText: ratingTextBody.value
    // })
    console.log(ratingNumberValue.value)
    console.log(ratingTextBody.value)
    ratingNumberValue.value = ''
    ratingTextBody.value = ''
})