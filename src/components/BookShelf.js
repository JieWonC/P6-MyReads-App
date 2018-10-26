import React, {Component } from 'react'

class BookShelf extends Component {

    render() {
        return (
            <div className='bookshelf'>
                <h2 className='bookshelf-title'>{this.props.title}</h2>
                <div className='bookshelf-books'>
                    <ol className='books-grid'>
                        {this.props.selectedBook}
                    </ol>
                </div>
            </div>
        )
    }
}

export default BookShelf;
