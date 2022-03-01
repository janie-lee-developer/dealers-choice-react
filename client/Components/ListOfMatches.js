import React from 'react';

const ListOfMatches = ({ matches }) => {
    return(
        <div>
            { matches[0].key.name, matches[0].key.bio }
        </div>
    )
}

export default ListOfMatches;