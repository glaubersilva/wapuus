import React from 'react';
//import { useNavigate } from 'react-router-dom';
import Feed from './Feed/Feed';

const Home = () => {

    //const navigate = useNavigate();

    //navigate('/login');

    return (
        <section className="container mainContainer">
          <Feed />          
        </section>
    )
}

export default Home;
