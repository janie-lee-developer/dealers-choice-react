import React from 'react';
import Pet from './Pet';

const User = ({ user }) => {
    return (
        <div className="contentbox">
            {/* <img src={ match.key.imageUrl } /> */}
            <h3>{ user.name }</h3>
            <ul>
                <li className="joinAt">Joined at: { user.createdAt }</li>
                <li className="bio">{user.bio}</li>
                <div>
                    {
                        user.pets.map((pet, index) => {
                            return <Pet key={index} pet={pet} />
                        })
                    }
                </div>
            </ul>
        </div>
    )
}

export default User;