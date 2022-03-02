import React from 'react';
import PetDetail from './PetDetail';

const Pets = ({ pets }) => {
    return (
        <div>
            { 
                pets.map( (pet) => {
                return <PetDetail key={ pet.id } pet={ pet }/>
                })
            }
        </div>
    )
}

export default Pets;