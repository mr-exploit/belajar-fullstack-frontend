import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import axios from "axios";
import URLConf from "../URLconf";

const Listbooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(()=>{
    getBooks();
  },[]);

  const getBooks = async () =>{
      const response = await axios.get(`${URLConf}/belajar`);
      setBooks(response.data);
  };

  const deleteBooks = async (belajarId) =>{
      await axios.delete(`${URLConf}/belajar/${belajarId}`);
      getBooks();
  };

  return (
    <div>
      <h1 className="title">Books</h1>
        <h2 className="subtitle">List of Books...</h2>
        <Link to="/books/add" className="button is-primary mb-2">Add New</Link>
        <table className='table is-striped is-fullwidth'>
            <thead>
                <tr>
                    <th>No</th>
                    <th>Nama buku</th>
                    <th>Harga</th>
                    <th>tipe buku</th>
                    <th>Dibuat oleh</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
              {books.map((belajar, index) =>(
                <tr key={belajar.uuid}>
                    <td>{index + 1}</td>
                    <td>{belajar.namabuku}</td>
                    <td>{belajar.harga}</td>
                    <td>{belajar.tipebuku}</td>
                    <td>{belajar.user.name}</td>
                    <td>
                      <Link to={`/books/edit/${belajar.uuid}`} className="button is-small is-info mr-3">Edit</Link>
                      <button onClick={()=> deleteBooks(belajar.uuid) } className="button is-small is-danger">Delete</button>
                      </td>   
                </tr>
              ))}
            </tbody>
        </table> 
    </div>
  )
}

export default Listbooks;
