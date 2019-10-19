# MyReads Project

This is the final assessment project for Udacity's React Fundamentals course.

## TL;DR 

To run the project right away:

* install all project dependencies with `npm install`
* start the development server with `npm start`

## What You're Getting
 app.
package.json # npm package manager file. It's unlikely that you'll need to modify this.
public
   favicon.ico
   index.html
src
 App.css # Styles for the app.
 App.js # This is the root of your app. Contains App Component.
 App.test.js # Used for testing. Provided with Create React App. Testing is encouraged, but not required.
 BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
 ListBooks.js # React Component to List Books according to shelf name.
 Book.js # React Component to display a book.
 SearchBook.js # React Component to List Books according to shelf name.
 index.css # Global styles.
 index.js # It is used for DOM rendering only.
 icons # Helpful images for this app.
  add.svg
  arrow-back.svg
  arrow-drop-down.svg
 

## Backend Server

To simplify your development process, a backend server is provided with method signatures. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query)
```

* query: `<String>`
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.


## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

