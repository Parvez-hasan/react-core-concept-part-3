import React, { createContext, useState } from 'react';
import Grandpa from './Grandpa';

// useing context API

export const AssetContext = createContext('');
export const MoneyContext = createContext(0);

const FamilyTree = () => {

    const [money, setMoney] = useState(0);

    const newAsset = 'gold';
    return (
        <div className='Family-Tree'>
            <h2>Family Tree</h2>
            <h4>family Money: {money}</h4>

            <MoneyContext value={[money,setMoney]}>
                <AssetContext.Provider value={newAsset}>
                    <Grandpa></Grandpa>
                </AssetContext.Provider>
            </MoneyContext>

        </div>
    );
};

export default FamilyTree;