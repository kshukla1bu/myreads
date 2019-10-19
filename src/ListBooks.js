import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Book from './Book'



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
                                                <Book 
                                                book = { book }
                                                onClick = {onUpdate}
                                                />
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