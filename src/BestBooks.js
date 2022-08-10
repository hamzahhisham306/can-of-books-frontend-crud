import axios from 'axios';
import React from 'react';
import List from './List';
import BookFormModal from './BookFormModal';
class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books:[]
    }
  }
  
  
  componentDidMount(){
    

    this.handlerBooks();
  }
  handlerBooks=async()=>{
    const booksdata=await axios.get('https://mongo-301curd.herokuapp.com/books');
    console.log(booksdata.data);
     this.setState({
      books:booksdata.data
     })
      
  }
  deleteBooks= async(id)=>{
    console.log(id)
   await axios.delete(`https://mongo-301curd.herokuapp.com/books/${id}`);
   this.handlerBooks();

  }
  createBook=async(e)=>{
    e.preventDefault();
    const newBook={
      'title':e.target.bookName.value,
      'description':e.target.description.value,
      'status':true,
     }
     await axios.post(`https://mongo-301curd.herokuapp.com/books`,{newBook});
     this.handlerBooks();
   console.log('creaeAF')
  }
  /* TODO: Make  a GET request to your API to fetch all the books from the database  */

  render() {
    console.log('books',this.state.books)

    /* TODO: render all the books in a Carousel */

    return (
      <>
  <BookFormModal createBook={this.createBook}/>
      <div className='book'>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

        {this.state.books.length?(
                      <List bookData={this.state.books} deleteBook={this.deleteBooks}/>
            // <CarouselBook books={this.state.books}/>
        ) : (
          <h3>No Books Found books is Empity :(</h3>
        )}
      </div>
      </>
    )
  }
}

export default BestBooks;
