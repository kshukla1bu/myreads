import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const imageNotFound = 'https://nucomltd.com/wp-content/themes/gecko/assets/images/placeholder.png'


class ListBooks extends Component
{
    static propTypes = {
        books: PropTypes.array.isRequired,
        onUpdate : PropTypes.func.isRequired
     }
    
    render(){
        const { books, onUpdate } = this.props
        const showCurrently = books.filter(b => b.shelf.toLowerCase()==='currentlyReading'.toLowerCase())
        const showWantTo = books.filter(b => b.shelf.toLowerCase()==='wantToRead'.toLowerCase())
        const showRead = books.filter(b => b.shelf.toLowerCase() === 'read'.toLowerCase())
        const shelf = [{name: 'Currently Reading', data : showCurrently},
                       {name: 'Want to Read', data : showWantTo},
                       {name: 'Read', data : showRead} ]
        return(
                <div className="list-books-content">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                {
                    shelf.map((shelf) => (
                        <div className="list-books-content">
                            <div> 
                                <div className="bookshelf">
                                    <h2 className="bookshelf-title">{shelf.name}</h2>
                                    <div className="bookshelf-books">
                                    <ol className="books-grid">
                                    {
                                        shelf.data.map((book) =>(
                                            <li key = {book.title}>
                                                <div className="book">
                                                    <div className="book-top">
                                                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks ? book.imageLinks.thumbnail : imageNotFound})` }}></div>
                                                        <div className="book-shelf-changer">
                                                            <select value = {book.shelf} onChange = {event => onUpdate(book, event.target.value)}>
                                                                <option value="move" disabled>Move to...</option>
                                                                <option value="currentlyReading">Currently Reading</option>
                                                                <option value="wantToRead">Want to Read</option>
                                                                <option value="read">Read</option>
                                                                <option value="none">None</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="book-title">{book.title}</div>
                                                    <div className="book-authors">{book.authors}</div>
                                                </div>
                                            </li>
                                        ))
                                    }
                                    </ol>
                                </div>        
                            </div>
                        </div>   
                    </div>
                ))}
                <div className="open-search"> 
                    <Link to='/search'><button>Add a book</button></Link>
                </div>

            </div>
        )
    }

    
}

export default ListBooks