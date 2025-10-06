import React from 'react';
import { useRef } from 'react';

const UnControlField = () => {

    const emailRaf = useRef();
    const passwordRaf = useRef();

    const handleSubmit = e => {
        e.preventDefault();
        // console.log(emailRaf.current.value);
        // console.log(passwordRaf.current.value);
        const email = emailRaf.current.value;
        const password = passwordRaf.current.value;  
        console.log(email,password);
            
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
               {/* <input type="text" name='name' placeholder='your name' required/> <br /> */}
                
                <input type="emil" name='email' ref={emailRaf} placeholder='your email' required/> <br />
                <input type="password" ref={passwordRaf} name="password" id="" placeholder='password' /> <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default UnControlField;