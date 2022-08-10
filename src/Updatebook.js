import axios from 'axios';
import React,{useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';

 function Updatebook() {
    const {id} = useParams();
    const [book, setBook]=useState("");

  async function bookData(){
    const {data}=await axios.get(`https://mongo-301curd.herokuapp.com/books/${id}`);
    setBook(data);
    console.log(data[0].description);
  }
const updataBook=async (e)=>{
    const data={
        'title':e.target.bookName.value,
        'description':e.target.descrption.value,
        'status':true
    }
    await axios.put(`https://mongo-301curd.herokuapp.com/books/${id}`, {data});
}
  useEffect(()=>{
    bookData();   

  },[])
    return (
        <form onSubmit={updataBook} className='formmodle'>
        <br/>
        <label htmlFor=''>Book Name         :</label>
        <input type='test'id='bookName'  defaultValue={book[0]?.title}/>
        <br/><br/>
        <label htmlFor=''>Book description :</label>
        <input type="text" name='' id="descrption" defaultValue={book[0]?.description} />
        <br/><br/>
        <button type='submit'>Save</button>
      </form>
    )
  
}

export default Updatebook
