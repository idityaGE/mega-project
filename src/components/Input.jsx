import React, { forwardRef } from 'react'
import { useId } from 'react'

const Input = forwardRef(function Input({
    label,
    type = "text",
    className = "",
    ...rest
}, ref) {
    const id = useId()
    return (
        <div className='w-full'>
            {label && <label
                className='block text-sm font-medium text-gray-700'
                htmlFor={id}>
                {label}
            </label>}
            <input
                className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 ${className}`}
                type={type}
                ref={ref}//this is the ref that will be passed to the input
                {...rest}
                id={id}
                />
        </div>
    )
})

export default Input