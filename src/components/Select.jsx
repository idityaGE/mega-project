import React, { useId } from 'react'

function Select({
    option = [],
    label,
    className = "",
    ...rest
}, ref) {
    const id = useId()
    return (

        <div >
            {label && <label
                className='block text-sm font-medium text-gray-700'
                htmlFor={id}>
            </label>}
            <select
                className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 ${className}`}
                ref={ref}
                {...rest}
                id={id}
            >
                {option.map((option) =>
                    <option
                        key={option}
                        value={option}
                    >
                        {option}
                    </option>
                )}
            </select>
        </div>
    )
}

export default React.forwardRef(Select)