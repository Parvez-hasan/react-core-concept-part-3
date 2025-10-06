import React, { use } from 'react';
import { MoneyContext } from './FamilyTree';

const Friend = () => {

    const [money,setMoney] = use(MoneyContext);

    return (
        <div>
            <h3>friend</h3>
            <h4>family got: {money}</h4>
        </div>
    );
};

export default Friend;