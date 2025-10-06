import React from 'react';
import UseInputField from '../Hooks/UseInputField';

const HookForm = () => {

    const [name, nameOnChange] = UseInputField();
    const [email, emailOnChage] = UseInputField();
    const [password, passwordOnChage] = UseInputField();

    const handleSubmit = e =>{
        e.preventDefault();
        console.log('submit', name, email, password);
        
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" defaultValue={name} onChange={nameOnChange} placeholder='name' /><br />
                <input type="text" defaultValue={email} onChange={emailOnChage} placeholder='email'/> <br />
                <input type="password" name="" id="" defaultValue={password} onChange={passwordOnChage} placeholder='password'/> <br />
                <input type="submit" value="Submit"  />
            </form>
        </div>
    );
};

export default HookForm;