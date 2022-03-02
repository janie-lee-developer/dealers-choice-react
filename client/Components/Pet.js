import React from 'react';

const Pet = ({ pet }) => {
    return (
        <div>
            <img className='pet' src={`assets/${pet.imgUrl}`} />
            <ul>
                <li>pet name: { pet.pet_name }</li>
                <li>pet breed: { pet.breed }</li>
                <li>pet age: { pet.age }</li>
            </ul>
        </div>
    )
}

export default Pet;