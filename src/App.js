import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchBooks from './components/SearchBooks'
import ListBooks from './components/ListBooks'
import { Route } from 'react-router-dom'

class BooksApp extends React.Component {

    state = {
        books: []
    }

    componentDidMount() {
        BooksAPI.getAll().then(books => this.setState({books}))
    }

    changeShelf = (newBook, newShelf) => {
        BooksAPI.update(newBook, newShelf).then(() => {
            newBook.shelf = newShelf
            this.setState(state => ({
              books: state.books.filter(book => book.id !== newBook.id).concat([newBook])
            }))
        })
    }

    render() {
        return (
            <div className='app'>
                <Route exact path='/' render={() => (
                    <ListBooks
                        books={this.state.books}
                        changeShelf={this.changeShelf}
                    />
                )}
                />
                <Route path='/search' render={() => (
                    <SearchBooks
                        books={this.state.books}
                        changeShelf={this.changeShelf} />
                )}
                />
            </div>
        )
    }
}

export default BooksApp
