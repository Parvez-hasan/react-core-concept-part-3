import React, { useState } from 'react';

const UseInputField = (defaultValue) => {
    
    const [fieldValue, setFielsValue] = useState(defaultValue);

    const handleFieldOnChange = e => {
        setFielsValue(e.target.value);
    }
    
    return [fieldValue, handleFieldOnChange];
};

export default UseInputField;