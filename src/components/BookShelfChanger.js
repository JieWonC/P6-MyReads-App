import React, { Component } from 'react'

class BookShelfChanger extends Component {

    state = {
        shelf: this.props.book.shelf || 'none'
    }

    changeShelf = (event) => {
        this.props.changeShelf(this.props.book, event.target.value)
        this.setState({ shelf: event.target.value })
    }

    render() {
        return (
            <div className='book-shelf-changer'>
                <select value={ this.state.shelf } onChange={ this.changeShelf }>
                    <option value='move' disabled>Move to...</option>
                    <option value='currentlyReading'>Currently Reading</option>
                    <option value='wantToRead'>Want to Read</option>
                    <option value='read'>Read</option>
                    <option value='none'>None</option>
                </select>
            </div>
        )
    }
}

export default BookShelfChanger;
