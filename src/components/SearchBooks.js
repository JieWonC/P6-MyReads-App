import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Book from './Book'
import * as BooksAPI from '../BooksAPI'

class SearchBooks extends Component {

    state = {
        query: '',
        searchedBooks: []
    }

    updateQuery = (event) => {
        let query = event.target.value
        this.setState({query})
        this.updateSearchedBooks(query)
    }

    updateSearchedBooks = (query) => {
        if (query) {
            BooksAPI.search(query).then((searchedBooks) => {
                if (searchedBooks.error) {
                    this.setState({ searchedBooks: [] })
                } else {
                    this.setState({ searchedBooks: searchedBooks })
                }
            })
        } else {
            this.setState({ searchedBooks: [] })
        }
    }

    isBookOnShelf(currentBook) {
        let bookOnShelf = this.props.books.find(function(book) {
            return book.id === currentBook.id
        })

        return bookOnShelf
    }

    searchedResult = () => {
        if (!this.state.searchedBooks.error && this.state.searchedBooks.length > 0) {
            return this.state.searchedBooks.map(book =>
                <Book
                    key={book.id}
                    book={this.isBookOnShelf(book) || book}
                    changeShelf={this.props.changeShelf}
                />
            );
        }
    }

    render() {
        return (
            <div className='search-books'>
                <div className='search-books-bar'>
                    <Link className='close-search' to='/'>Close</Link>
                    <div className='search-books-input-wrapper'>
                        <input
                            value={this.state.query}
                            onChange={this.updateQuery}
                            type='text'
                            placeholder='Search by title or author'
                        />
                    </div>
                </div>
                <div className='search-books-results'>
                    <ol className='books-grid'>
                        { this.searchedResult() }
                    </ol>
                </div>
            </div>
        )
    }
}

export default SearchBooks;
