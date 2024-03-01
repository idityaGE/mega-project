import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function Protected({ children, authentication = true }) {
    const navigate = useNavigate()
    const authStatus = useSelector((state) => state.auth.status)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (authentication && authStatus !== authentication) {//if the user is not authenticated and the authentication is true
            navigate('/login')
        }
        else if (!authentication && authStatus === authentication) {//if the user is authenticated and the authentication is false
            navigate('/')
        }
        setLoading(false)
    }, [authStatus, navigate, authentication])

    return loading ? <h1>Loading...</h1> : <>{children}</>
}
