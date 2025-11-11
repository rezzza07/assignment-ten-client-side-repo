import React from 'react';
import { useLoaderData } from 'react-router';

const ArtDetails = () => {
    const art = useLoaderData()
    console.log(art);
    
    return (
        <div>
            
        </div>
    );
};

export default ArtDetails;