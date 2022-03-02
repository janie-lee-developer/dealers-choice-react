import React from 'react';
import Match from './Match';

const ListOfMatches = ({ matches, destroy }) => {
    return(
        <div>
            <h2>Matches</h2>
            {
                matches.map(( match, index ) => {
                    return <Match key = {match.id} match = { match } destroy={ destroy }/>
                })
            }
        </div>
    )
}

export default ListOfMatches;