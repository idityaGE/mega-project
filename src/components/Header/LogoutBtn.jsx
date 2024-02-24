import React from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../../store/authSlice.js'
import authService from '../../appwrite/auth/auth.js'

export default function LogoutBtn() {
    const dispatch = useDispatch()
    const handleLogout = () => {
        authService.logout()//logout is a promise
            .then(() => {
                dispatch(logout())
            })
    }

    return (
        <button
            onClick={handleLogout}
            className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'>
            Logout
        </button>
    )
}
