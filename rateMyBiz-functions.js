const getSavedRatings = () => {
    const ratingsJSON = localStorage.getItem('ratings')

    if (ratingsJSON !== null) {
        return JSON.parse(ratingsJSON)
    }
    else {
        return []
    }
}

const saveRatings = (ratings) => {
    localStorage.setItem('ratings', JSON.stringify(ratings))
}

