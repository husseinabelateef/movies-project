import React from 'react';
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux';
const Home = (props) => {
const language = useSelector((state)=>state.language.lang)
    const history = useHistory()
    console.log(history);
    function redirectToPro() {
        // props.history.push('/products');
        history.push('/products')
    }
    return (
        <div>
            <h1>Home</h1>
            <h1>language : {language}</h1>
            <button className="btn btn-danger" onClick={() => redirectToPro()}> go to products</button>
        </div>
    );
};

export default Home;