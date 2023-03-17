import React, {useState, useEffect} from 'react';
import axios from "axios";
import { useNavigate, useParams} from 'react-router-dom';
import URLConf from "../URLconf";

const FormEditbooks = () => {
    const [namabuku, setNamabuku] = useState("");
    const [harga, setHarga] = useState("");
    const [tipe, setTipebuku] = useState("");
    const [msg, setMsg] = useState("");
    const navigate = useNavigate();
    const {id} = useParams();

    useEffect(()=>{
        const getBooksById = async () =>{
            try {
                const response = await axios.get(`${URLConf}/belajar/${id}`);
                setNamabuku(response.data.namabuku);
                setHarga(response.data.harga);
                setTipebuku(response.data.tipebuku);
            } catch (error) {
                if(error.response){
                    setMsg(error.response.data.msg);
                }
            }
        }
        getBooksById();
    }, [id]);

    const updatebooks = async(e) => {
        e.preventDefault();
        try {
            await axios.patch(`${URLConf}/belajar/${id}`, {
                nama: namabuku,
                harga: harga,
                tipe: tipe
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
    <h1 className="title">Books</h1>
      <h2 className="subtitle">Edit Books</h2>
      <div className="card is-shadowless">
          <div className="card-content">
              <div className="content">
              <form onSubmit={updatebooks}>
                  <p className="has-text-centered">{msg}</p>
                  <div className="field">
                      <label className="label">Nama Buku</label>
                      <div className="control">
                          <input 
                          type="text" 
                          className="input" 
                          value={namabuku}
                          onChange={(e) => setNamabuku(e.target.value)}
                          placeholder='Nama Buku'
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
                          placeholder='Tipe Buku' 
                          />
                      </div>
                  </div>
                  <div className="field">
                      <div className="control">
                          <button type="submit" className="button is-success ">
                             Update
                          </button>    
                      </div>
                  </div>
              </form> 
              </div>
          </div>
      </div>
  </div>
  )
};

export default FormEditbooks;
