import React from 'react';

const PetDetail = ({ pet }) => {
    return(
        <div className='contentbox'>
            <img className='pet' src={`assets/${pet.imgUrl}`} />
            <ul>
                <li>pet name: {pet.pet_name}</li>
                <li>pet breed: {pet.breed}</li>
                <li>pet age: {pet.age}</li>
                <li>pet membership id: {pet.id}</li>
                <li>owner: {pet.user.name}</li>
                <li className="joinAt">owner joined at: {pet.user.createdAt}</li>
                <li className="bio">{pet.user.bio}</li>
            </ul>
        </div>
    )
}

export default PetDetail;