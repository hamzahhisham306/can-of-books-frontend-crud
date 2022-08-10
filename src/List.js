import React, { Component } from 'react'
import {Link} from 'react-router-dom';
 class List extends Component {
  render() {
    return (
      <ul>
        {
            this.props.bookData.map((item, index)=>{
             return(
                <li key={index}>
               {item.title}
              <button onClick={()=>this.props.deleteBook(item._id)}>Delete</button>
               <Link to={`/books/${item._id}`}>Update</Link>
               </li>
             )
            })
        }
    
      </ul>
    )
  }
}

export default List
