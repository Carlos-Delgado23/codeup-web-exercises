(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */
var person = {
        firstName: "Carlos",
        lastName: "Delgado III",
        sayHello: function() {
                console.log("Hello from " + this.firstName + " " + this.lastName + "!");
            }
    };

    console.log(person.firstName) // "Carlos"
    console.log(person.lastName) // "Delgado III"


    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */
person.sayHello();

    console.log("====================");


    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320},
    ];
shoppers.forEach(function (shopper) {
        if (shopper.amount >= 200){
            console.log(shopper.name + ", total before discount $" + shopper.amount + " and total after discount=" +
                " $" + (shopper.amount - (shopper.amount * .12)));
        } else {
            console.log(shopper.name + ", sorry. No discount applied. " + shopper.amount);
        }
    });



    console.log("====================");


    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */
var books = [
        {title: "The 10X Rule",
        author: {
            firstName: "Grant",
            lastName: "Cardone"
        }},
        {title: "The 4-hour Workweek",
            author: {
                firstName: "Timothy",
                lastName: "Ferriss"
            }},
        {title: "Think and Grow Rich",
            author: {
                firstName: "Napoleon",
                lastName: "Hill"
            }},
        {title: "Rich Dad Poor Dad",
            author: {
                firstName: "Robert",
                lastName: "Kiyosaki"
            }},
        {title: "The Little Book of Common Sense Investing ",
            author: {
                firstName: "John",
                lastName: "Bogle"
            }}
    ];



    books.forEach(function (book) {
        console.log(book.title);
        console.log(book.author.firstName);
        console.log(book.author.lastName);
});




    console.log("====================");


    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

    // for (var i = 0; i<=4; i++){
    //     console.log("Book # " + (i+1));
    //     console.log("Title: " + books[i].title);
    //     console.log("Author: " + books[i].author.firstName + " " + books[i].author.lastName);
    // };

    console.log("========== BONUS ==========");
    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */
    var creatBook = function (title, authorFirstName, authorLastName) {
        var book = {};
        book.title = title;
        book.author = {};
        book.author.firstName = authorFirstName;
        book.author.lastName = authorLastName;
        return book;
    };
    books.push(creatBook("Leviathan", "Scott", "Westfield"));
    books.push(creatBook("Levi", "Scotty", "Westy"));


    var showBookInfo = function (book, i) {
        console.log("Book # " + (i+1));
        console.log("Title: " + books[i].title);
        console.log("Author: " + books[i].author.firstName + " " + books[i].author.lastName);
    };
    books.forEach(showBookInfo);




})();