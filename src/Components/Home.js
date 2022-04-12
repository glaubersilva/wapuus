import React from "react";
//import { useNavigate } from 'react-router-dom';
import Feed from "./Feed/Feed";
import Head from "./Helpers/Head";

const Home = () => {
    //const navigate = useNavigate();

    //navigate('/login');

    return (
        <section className="container mainContainer">
            <Head title="Home" description="A space to share your Wappus" />
            <Feed />
        </section>
    );
};

export default Home;
