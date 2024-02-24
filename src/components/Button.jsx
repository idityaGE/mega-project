import React from 'react'

export default function Button({
    children,//text inside the button
    // onClick,
    type = "button",
    className = "",
    ...rest
}) {
    return (
        <button
            type={type}
            className={`text-white bg-blue-600 px-4 py-2 rounded-lg ${className}`} 
            {...rest} >
            {children}
        </button>
    )
}
