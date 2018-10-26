import React, { Component } from 'react'
import BookShelfChanger from './BookShelfChanger'

class Book extends Component {

    state = {
        shelf: this.props.book.shelf || 'none'
    }

    render() {
        const {book} = this.props
        const bookCover = (this.props.book.imageLinks && `url(${this.props.book.imageLinks.thumbnail})`);

        return (
            <li>
                <div className='book'>
                    <div className='book-top'>
                        <div className='book-cover' style={{ width: 128, height: 193, backgroundImage: bookCover }}></div>
                        <BookShelfChanger
                            book={this.props.book}
                            changeShelf={this.props.changeShelf}
                        />
                    </div>
                    <div className='book-title'>{ book.title }</div>
                    <div className='book-authors'>{ book.authors ? book.authors.join(', ') : '' }</div>
                </div>
            </li>
        )
    }
}

export default Book;
