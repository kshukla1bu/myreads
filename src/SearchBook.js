import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book'



class SearchBook extends Component{

    static propTypes = {
        moveBook : PropTypes.func.isRequired
     }

    state = {
      searchError: false,
      searchedBooks: [],
      query : ''
    }

    getBook = (event) => {
      const query = event.target.value;
      this.setState({ query });
      if (query) {
        BooksAPI.search(query.trim()).then((books) => {
          books.length > 0 
          ? this.setState({ searchedBooks: books, searchError: false })
          : this.setState({ searchedBooks: [], searchError: true });
        });
      } 
      else 
          this.setState({ searchedBooks: [], searchError: false });
    };

    render(){
        const { moveBook } = this.props
        const { query, searchedBooks, searchError } = this.state

        return(
            <div className="search-books">
            <div className="search-books-bar">
              <Link to='/'>
              <button className="close-search">Close</button>
              </Link>
              <div className="search-books-input-wrapper">
                <input 
                    type="text" 
                    placeholder="Search by title or author"
                    value={query}
                    onChange={this.getBook}/>

              </div>
            </div>
            <div className="search-books-results">
              { searchedBooks.length > 0 && (
                <ol className="books-grid">
                  { 
                    searchedBooks.map((book, index) =>(
                    book.shelf = 'none',
                      <li key = {index}>
                        <Book 
                          book = { book }
                          onClick = {moveBook}
                        />
                        </li>
                  ))}
              </ol>
              )}
              {searchError && (
                <center>
                  <h3>Your search did not returned any result</h3>
                  </center>
              )}
            </div>
          </div>
        )
    }
}

export default SearchBook