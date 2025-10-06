import React, { use } from 'react';
import { MoneyContext } from './FamilyTree';

const Anti = () => {
    const [money, setMoney] = use(MoneyContext);
    return (
        <div>
            <h3>Anti</h3>
            <button onClick={() => setMoney(money + 1000)}>Add 1000 Tk</button>
        </div>
    );
};

export default Anti;