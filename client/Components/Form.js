import React from 'react';
import axios from 'axios';

const Form = ({create})=> {
    const getPost = async() => {
        const res = await axios.get('/api/matches/new')
        create(res);
    }
    return (
        <div className='input'>
            <h2>Register</h2>
            <form method='POST' action={ '/api/matches/new'} id='register'>
                <input type='text' name='userName' placeholder='your name'></input>
                <textarea name='userBio' form='register' rows='2' cols='30' placeholder='introduce yourself'></textarea>
                <input type='text' name='petName' placeholder={`your pet's name`}></input>
                <input type='text' name='petBreed' placeholder={`your pet's breed`}></input>
                <input type='number' name='petAge' placeholder={`your pet's age`}></input>
                <input type='file' name='petImgUrl'></input>
                <br />
                <button className='formBttn' onClick= {()=> getPost()}>Register</button>
            </form>
        </div>
    )
}

export default Form