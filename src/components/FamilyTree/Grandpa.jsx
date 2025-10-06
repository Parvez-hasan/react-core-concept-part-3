import React from 'react';
import Dad from './Dad';
import Anti from './Anti';
import Ancle from './Ancle';
import Friend from './Friend';
import Batiza from './Batiza';

const Grandpa = () => {
    return (
        <div>
            <h2>Grandpa</h2>
            <section>
                <Dad></Dad>
                <Anti></Anti>
                <Ancle></Ancle>
                <Friend></Friend>
                <Batiza></Batiza>
            </section>
        </div>
    );
};

export default Grandpa;