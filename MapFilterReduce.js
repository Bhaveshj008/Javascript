
// let arr = [2,3,4,5,6,7,8]
// let newArr = arr.filter((num)=>{ return num>3})
// console.log(newArr);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004, pages: 320, author: 'Author A' },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008, pages: 250, author: 'Author B' },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007, pages: 400, author: 'Author C' },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010, pages: 300, author: 'Author D' },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014, pages: 350, author: 'Author E' },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010, pages: 280, author: 'Author F' },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996, pages: 450, author: 'Author G' },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016, pages: 370, author: 'Author H' },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989, pages: 200, author: 'Author I' },
    { title: 'Book Ten', genre: 'Fiction', publish: 2000, edition: 2020, pages: 330, author: 'Author J' },
    // Add more books as needed for a larger dataset
];

 // let HindiBooks= books.filter((bk)=>bk.genre==='History')
 // console.log(HindiBooks.map(obj=>obj.title))
   let HindiBooks= books.filter((bk)=>bk.genre==='History' && bk.publish>=1980).map(obj=>obj.title)
   console.log(HindiBooks)


//List all Fiction books:
//Use filter to get books with the genre 'Fiction'.

let FictionBk = books.filter(function (bk) {
    return bk.genre === 'Fiction'
})
console.log("Fiction Books:\n", FictionBk);
console.log("\n\n------------------------------------------\n\n");
// Get titles of all books published before the year 2000:
// Use filter to find books published before 2000, then use map to extract their titles.
let publishBefore2000 = books.filter(bk => bk.publish < 2000).map(bk => bk.title)
console.log("Books Publish Before Year 2000 : \n", publishBefore2000);
console.log("\n\n------------------------------------------\n\n");
//  Find all books with an edition year after 2010:
// Use filter to get books with an edition year greater than 2010.

let EditionAfter2010 = books.filter(bk => bk.edition > 2010)
console.log("Books having edition year After 2010:\n", EditionAfter2010);
console.log("\n\n------------------------------------------\n\n");

//Get an array of book titles along with their genres:
//Use map to transform each book object to a new object containing only the title and genre properties.

let titleGenere = books.map(bk => ({
    title: bk.title,
    genre: bk.genre
}))
console.log("Books title with Genre:\n", titleGenere);
console.log("\n\n------------------------------------------\n\n");

//Find all Non-Fiction books and list their titles:
//Use filter to get books with the genre 'Non-Fiction', then use map to extract their titles.

let NonfictionBooks = books.filter(bk => bk.genre === 'Non-Fiction').map(bk => bk.title)
console.log("Non Fiction Book titles:\n", NonfictionBooks);
console.log("\n\n------------------------------------------\n\n");

//List all books that have their edition year at least 10 years after their publish year:
//Use filter to find books where the edition year is at least 10 years after the publish year.

let Edition_After_10years = books.filter(bk => bk.edition - bk.publish >= 10)
console.log("Edition after 10 years:\n", Edition_After_10years);
console.log("\n\n------------------------------------------\n\n");

// Create a list of books published in the 1980s:
// Use filter to get books published between 1980 and 1989.

let PublishedIn1989 = books.filter(bk => bk.publish === 1989)
console.log("Books Publish in 1989: \n", PublishedIn1989);
console.log("\n\n------------------------------------------\n\n");

// Get the titles of Science books published after 2005:
// Use filter to find Science books published after 2005, then use map to extract their titles.

let ScienceAfter_2005 = books.filter(bk => bk.genre === 'Science' && bk.publish > 2005).map(bk => bk.title)
console.log("Science books published after 2005\n:", ScienceAfter_2005);
console.log("\n\n------------------------------------------\n\n");

//Find all books with editions in the 21st century:
//Use filter to get books with edition years from 2001 onwards.

let EditionIn21st = books.filter(bk => bk.edition > 2000)
console.log("books with editions in the 21st century:\n", EditionIn21st)
console.log("\n\n------------------------------------------\n\n");

//List titles of History books and their publish years:
//Use filter to find History books, then use map to transform each book object to a new object containing only the title and publish properties.

let HistoryBooksWithPublishYear = books.filter(bk => bk.genre === 'History').map(bk => ({
    title: bk.title,
    publishYear: bk.publish
}))
console.log("History books and their publish years:\n", HistoryBooksWithPublishYear);
console.log("\n\n------------------------------------------\n\n");



//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

let myarr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let sumAll = myarr.reduce((acc, curval) => {
    console.log(acc, ":", curval)

    return acc + curval
}, 0)
console.log(sumAll)
console.log("\n\n------------------------------------\n\n")
// Calculate the total number of pages across all books:
// Use reduce to sum up the pages property of all book objects.

let sumOfPages = books.reduce((acc, book) => {
    return acc + book.pages
}, 0)
console.log("total number of pages across all books: ", sumOfPages);
console.log("\n\n------------------------------------\n\n")

//Find the average number of pages per book:
//Use reduce to calculate the total number of pages, then divide by the total number of books to get the average.

let avgPages = books.reduce((acc, book) => {
    return (acc + book.pages)
}, 0)
avgPages = avgPages / books.length
console.log(avgPages);
console.log("\n\n------------------------------------\n\n")

//Count the number of books in each genre:
//Use reduce to build an object where each key is a genre and each value is the count of books in that genre.

let booksEachGenre = books.reduce((acc, book) => {
    // If the genre is not yet a key in the accumulator object, initialize it with a count of 1
    if (!acc[book.genre]) {


        acc[book.genre] = 1;
    } else {
        // If the genre already exists in the accumulator object, increment its count
        acc[book.genre]++;
    }
    return acc;
}, {});

console.log("books available in each genre: \n", booksEachGenre);
console.log("\n\n------------------------------------\n\n")

let bookWithMostPages = books.reduce((acc, book) => {
    // If acc is empty or the current book has more pages than the acc book, update acc


    if (!acc || book.pages > acc.pages) {
        return book;
    } else {

        return acc;
    }
}, null); // Initialize acc as null

console.log("Book with most pages: \n", bookWithMostPages);
console.log("\n\n------------------------------------\n\n")

//Calculate the total number of books published before the year 2000:
//Use reduce to count books where the publish year is less than 2000.

let publishYrLessThan2000 = books.reduce((acc, book) => {
    if (book.publish < 2000) {
        acc++;
    }
    return acc
}, 0)
console.log("total number of books published before the year 2000:\n", publishYrLessThan2000);

console.log("\n\n------------------------------------\n\n")

//Determine the earliest publish year of any book:
//Use reduce to find the minimum publish year across all books.

let EarliestPublish = books.reduce((acc, book) => {
    if (acc === null || book.publish < acc) {
        return book
    }
    return acc;
}, null)
console.log("earliest publish year of any book:\n", EarliestPublish);
console.log("\n\n------------------------------------\n\n")
