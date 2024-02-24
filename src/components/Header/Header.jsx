import React from 'react'
import { useSelector } from 'react-redux'
import LogoutBtn from './LogoutBtn'
import { Link } from 'react-router-dom'
import Logo from '../Logo'
import Container from '../container/Container'
import { useNavigate } from 'react-router-dom'






export default function Header() {
    const authStatus = useSelector((state) => state.auth.status)
    const navigate = useNavigate()

    const navItems = [
        { label: 'Home', to: '/', active: true },
        { label: 'Login', to: '/login', active: !authStatus },
        { label: 'Signup', to: '/signup', active: !authStatus },
        { label: 'All Posts', to: '/all-posts', active: authStatus },
        { label: 'Add Post', to: '/add-post', active: authStatus },
    ]

    return (
        <header className='py-3 shadow bg-gray-500'>
            <Container>
                <nav className='flex'>
                    <div className='mr-4'>
                        <Link to='/'>
                            <Logo width='70px' />
                        </Link>
                    </div>
                    <ul className='flex ml-auto'>
                        {navItems.map((item) =>
                            item.active ? (
                                <li key={item.name}>
                                    <button
                                        className='px-4 py-2 text-white duration-200 hover:bg-gray-400 rounded-full'
                                        onClick={() => navigate(item.to)}>
                                        {item.name}
                                    </button>
                                </li>
                            ) : null
                        )}
                        {authStatus ? <li><LogoutBtn /></li> : null}
                    </ul>
                </nav>
            </Container>
        </header>
    )
}
