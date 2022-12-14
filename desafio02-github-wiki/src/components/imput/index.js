import React from "react";

import { InputContainer } from './style'

function Input( { value, onChange,  placeholder }) {
    return(
        <InputContainer>
        <input value={ value } onChange= { onChange }  placeholder={ placeholder}/>
        </InputContainer>
    )
}

export default Input;





