import React from 'react'
import * as BooksAPI from './BooksAPI'
import ListBooks from './ListBooks'
import SearchBook from './SearchBook'
import { Route } from 'react-router-dom'
import './App.css'
class BooksApp extends React.Component {
  state = {
    books : [],
    searchedBooks : []
  }

  componentDidMount(){
    BooksAPI.getAll().then((books)=>{
      this.setState(() => ({
        books
      }))
    })
  }

  changeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then((book) => {
      this.setState((currentState) => ({
        books: currentState.books.concat([book])
      }))
    }).then((res) => {
      this.getData()
    });
  }

  updateShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(res => {
      this.getData()
    });
  }

  getData(){
    BooksAPI.getAll().then((books)=>{
      this.setState(() => ({
        books
      }))
    })
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <ListBooks 
          books = {this.state.books} 
          onUpdate = {this.updateShelf} 
        />
        )} />
  
      <Route 
      path = '/search'
      render = {() => (
         <SearchBook
          book = {this.state.books}
          moveBook = {this.changeShelf}
        />
      )} />
      </div>
    )
  }
}

export default BooksApp
