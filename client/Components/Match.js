import React from 'react';
import Pet from './Pet';

const Match = ({ match, destroy }) => {
    return(
        <div className="match">  
           <div className="user">
                {/* <img src={ match.key.imageUrl } /> */}
               <h3>Owner Name: { match.key.name }</h3>
               <ul>
                    <li className="joinAt">Joined at: {match.key.createdAt}</li>
                    {/* <li className="bio">{match.key.bio}</li> */}
               </ul>
               <div>
                   {
                        match.key.pets.map((pet, index) => {
                            return <Pet key = {index} pet = { pet }/>
                        })
                   }
               </div>
           </div>
           <div>
                <img src="/assets/heart.png" className="heart" />
           </div>
            <div className="user">
                {/* <img src={ match.lock.imageUrl } /> */}
                <h3>Owner Name: {match.lock.name}</h3>
                <ul>
                    <li className="joinAt">Joined at: {match.lock.createdAt}</li>
                    {/* <li className="bio">{match.lock.bio}</li> */}
                </ul>
                <div>
                    {
                        match.lock.pets.map((pet, index) => {
                            return <Pet key={index} pet={pet} />
                        })
                    }
                </div>
           </div>
           <button onClick = { ()=> destroy(match)}>X</button>
        </div>
    )
}

export default Match;