import React, {useEffect} from 'react';
import Layout from './Layout';
import FormAdduser from '../components/FormAdduser';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../features/AuthSlice";

const Adduser = () => {
  const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isError, user } = useSelector((state) => state.auth);

    useEffect(() =>{
      dispatch(getMe());
    }, [dispatch]);

    useEffect(() =>{
      if(isError){
        navigate("/");
      }
      if(user && user.role !=="admin"){
        navigate("/dashboard");
      }
    }, [isError, user, navigate]);

  return (
    <div>
        <Layout>
            <FormAdduser />
        </Layout>
    </div>
  )
}

export default Adduser;