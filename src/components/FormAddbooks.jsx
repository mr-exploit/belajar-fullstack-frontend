import React, {useState} from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import URLConf from "../URLconf";

const FormAddbooks = () => {
    const [namabuku, setNamabuku] = useState("");
    const [harga, setHarga] = useState("");
    const [tipe, setTipebuku] = useState("");
    const [msg, setMsg] = useState("");
    const navigate = useNavigate();

    const saveBooks = async(e) => {
        e.preventDefault();
        try {
            await axios.post(`${URLConf}/belajar`, {
                namabuku: namabuku,
                harga: harga,
                tipe: tipe,
            });
            navigate("/books");
        } catch (error) {
            if(error.response){
                setMsg(error.response.data.msg);
            }
        }
    };

  return (
    <div>
    <h1 className="title">Buku</h1>
      <h2 className="subtitle">Add New Buku</h2>
      <div className="card is-shadowless">
          <div className="card-content">
              <div className="content">
              <form onSubmit={saveBooks}>
                      <p className="has-text-centered">{msg}</p>
                  <div className="field">
                      <label className="label">Nama Buku</label>
                      <div className="control">
                          <input 
                          type="text" 
                          className="input" 
                          value={namabuku}
                          onChange={(e) => setNamabuku(e.target.value)}
                          placeholder='Product Name' 
                          />
                      </div>
                  </div>
                  <div className="field">
                      <label className="label">Harga</label>
                      <div className="control">
                          <input 
                          type="text" 
                          className="input" 
                          value={harga}
                          onChange={(e) => setHarga(e.target.value)}
                          placeholder='Harga' 
                          />
                      </div>
                  </div>
                  <div className="field">
                      <label className="label">Tipe Buku</label>
                      <div className="control">
                          <input 
                          type="text" 
                          className="input" 
                          value={tipe}
                          onChange={(e) => setTipebuku(e.target.value)}
                          placeholder='Tipe' 
                          />
                      </div>
                  </div>
                  <div className="field">
                      <div className="control">
                          <button type="submit" className="button is-success ">
                              Save
                          </button>    
                      </div>
                  </div>
              </form> 
              </div>
          </div>
      </div>
  </div>
  )
}

export default FormAddbooks;
