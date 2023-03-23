import {Component} from 'react'

import BooksContext from '../../context/BooksContext'

import './index.css'

class BookForm extends Component {
  state = {
    name: '',
    author: '',
    pages: '',
  }

  render() {
    const {name, author, pages} = this.state
    return (
      <BooksContext.Consumer>
        {value => {
          const {addBook} = value
          const onSubmitBook = () => {
            const book = {...this.state}
            addBook(book)
            const {history} = this.props
            history.replace('/')
          }
          return (
            <form className="book-form">
              <label htmlFor="name">BOOK NAME</label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={e => this.setState({name: e.target.value})}
              />
              <label htmlFor="author">AUTHOR</label>
              <input
                id="author"
                type="text"
                value={author}
                onChange={e => this.setState({author: e.target.value})}
              />
              <label htmlFor="pages">PAGES</label>
              <input
                id="pages"
                type="text"
                value={pages}
                onChange={e => this.setState({pages: e.target.value})}
              />
              <button type="submit" onClick={onSubmitBook}>
                Add Book
              </button>
            </form>
          )
        }}
      </BooksContext.Consumer>
    )
  }
}

export default BookForm
