import React, { useState } from 'react';

const ControlField = () => {

    const [password, setPassword] = useState('')
    const [errorPassword, setErrorPassword] = useState('');

    const handleSubmit = (e) => {
    e.preventDefault();
        console.log(e);

//submit korar pore error dekabe

//  if(errorPassword.length < 6){
//     setErrorPassword("must be 6 word")
//     }
//     else{
//         setErrorPassword('')
//     }
        
    }

    const handlePassword = (e) => {
    console.log(e.target.value);
    setPassword(e.target.value);
   
 /// submit korar age error dekabe
    if(errorPassword.length < 6){
    setErrorPassword("must be 6 word")
    }
    else{
        setErrorPassword('')
    }
    
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
               {/* <input type="text" name='name' placeholder='your name' required/> <br /> */}
                
                <input type="emil" name='email' placeholder='your email' required/> <br />
                <input type="password" name="password" id="" placeholder='password' onChange={handlePassword} defaultValue={password} /> <br />
                <input type="submit" value="Submit" />
            </form>
            <p style={{color: 'red' }}><small>{errorPassword}</small></p>
        </div>
    );
};

export default ControlField;