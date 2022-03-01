import React from 'react';

const ListOfMatches = ({ matches }) => {
    return(
        <div>
            { matches[0].key.name }
        </div>
    )
}

export default ListOfMatches;