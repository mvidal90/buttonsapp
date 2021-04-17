import React from 'react';

export const Button = ({ color }) => {
    // Mi etiqueta de html es una sola y depende lo que yo envie por las props el componente va a mutar
    // la variable color sirve como className porque las declare en mi css
    return (
        <button className={ color }>
            { color }
        </button>
    )
}
