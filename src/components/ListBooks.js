import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Book from './Book'
import BookShelf from './BookShelf'

class ListBooks extends Component{

    showSelectedBook(shelfTitle) {
        return this.props.books
            .filter(book => book.shelf === shelfTitle)
            .map(book => (
                <Book
                    key={book.id}
                    book={book}
                    changeShelf={this.props.changeShelf}
                />
            ));
    }

    render() {
        return (
            <div className='list-books'>
                <div className='list-books-title'>
                    <h1>MyReads</h1>
                </div>
                <div className='list-books-content'>
                    <div>
                        <BookShelf title='Current Reading' selectedBook={this.showSelectedBook('currentlyReading')} />
                        <BookShelf title='Want to Read' selectedBook={this.showSelectedBook('wantToRead')} />
                        <BookShelf title='Read' selectedBook={this.showSelectedBook('read')} />
                    </div>
                    <div className='open-search'>
                        <Link to='/search'>Add a book</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default ListBooks;
