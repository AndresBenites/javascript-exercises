const getTheTitles = function(bookArr) {
    bookTitles = [];
    for (i=0; i < bookArr.length; i++){
        bookTitles[i] = bookArr[i].title;
    }
    return bookTitles;
}

module.exports = getTheTitles;
