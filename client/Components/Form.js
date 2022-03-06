import React from 'react';
import axios from 'axios';

const Form = ({handleSubmit})=> {
    // const create = (e)=> {
    //     e.preventDefault();
    //     // console.log(e.target)
    //     handleSubmit(e);
    // }
    return (
        <div className='input'>
            <h2>Register</h2>
            <form onSubmit={(e)=> {e.preventDefault(); handleSubmit(e)}} id='register'>
                <input className="formInput" type='text' name='userName' placeholder='your name'  ></input>
                <textarea className="formInput" name='userBio' form='register' rows='2' cols='30' placeholder='introduce yourself'></textarea>
                <input className="formInput" type='text' name='petName' placeholder={`your pet's name`}></input>
                <input className="formInput" type='text' name='petBreed' placeholder={`your pet's breed`}></input>
                <input className="formInput" type='number' name='petAge' placeholder={`your pet's age`}></input>
                <input className="formInput" type='file' name='petImgUrl'></input>
                <br />
                <button className='formBttn' >Register</button>
            </form>
        </div>
    )
}

export default Form

// onClick = {() => getNewUser()}

// onChange = { (event) => { addNewUser({ name: event.target.value }) }} value = { this.state.newUser.name }