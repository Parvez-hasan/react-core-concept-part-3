import React, { useContext } from 'react';
import { AssetContext } from './FamilyTree';

const Ancle = () => {
    
    const newAsset = useContext(AssetContext);
    console.log('new asset', newAsset);
    

    return (
        <div>
            <h3>Ancle</h3>
            <p>{newAsset}</p>
        </div>
    );
};

export default Ancle;