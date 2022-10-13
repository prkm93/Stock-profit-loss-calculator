import React from 'react';

function Input(props) {
  return (
    <div className='input-box'>
        <label htmlFor={props.id} className="input-label">{props.label}</label>
        <input
            className='input-element' 
            type="text"
            placeholder={props.placeholder}
            value={props.value}
            onChange={e => props.onChange(e.target.value)}
        />
    </div>
  )
}

export default Input;