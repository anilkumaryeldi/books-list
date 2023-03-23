import {Component} from 'react'
import {Switch, Route} from 'react-router-dom'
import BooksContext from '../../context/BooksContext'

import BookList from '../BookList'
import BookForm from '../BookForm'

import './index.css'

const booksSample = require('./books.json')

console.log(booksSample)

class Books extends Component {
  state = {
    booksList: [...booksSample],
  }

  addBook = book => {
    this.setState(prev => ({booksList: [...prev.booksList, book]}))
  }

  render() {
    const {booksList} = this.state
    return (
      <BooksContext.Provider value={{booksList, addBook: this.addBook}}>
        <div className="bg-container">
          <Switch>
            <Route exact path="/" component={BookList} />
            <Route exact path="/add-book" component={BookForm} />
          </Switch>
        </div>
      </BooksContext.Provider>
    )
  }
}

export default Books
