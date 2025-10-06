import React, { use } from 'react';
import { MoneyContext } from './FamilyTree';

const Batiza = () => {
    const [money,setMoney] = use(MoneyContext);

    const handleMoney = () => {
      setMoney(money + 5000)
    }
    return (
        <div>
            <h3>batiza</h3>
            <button onClick={handleMoney}>add 5000</button>
        </div>
    );
};

export default Batiza;